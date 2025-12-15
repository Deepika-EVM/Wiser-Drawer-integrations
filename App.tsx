import React, { useState, useEffect, useMemo } from 'react';
import { Search, Plus, Code, Layout, Database, ChevronLeft, ChevronRight } from 'lucide-react';
import CodeBlock from './components/CodeBlock';
import AddModal from './components/AddModal';
import { Snippet, SortOption } from './types';
import { INITIAL_DATA } from './services/initialData';
import { addSnippetToFirebase, fetchSnippets } from './services/firebase';
import "./App1.css";   // <-- NEW FILE

const ITEMS_PER_PAGE = 48;

const App: React.FC = () => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('date-desc');
  const [firebaseActive, setFirebaseActive] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const init = async () => {
      setSnippets(INITIAL_DATA);
      try {
        const remoteData = await fetchSnippets();
        if (remoteData.length > 0) {
          setSnippets(prev => {
            const ids = new Set(prev.map(p => p.id));
            const added = remoteData.filter(x => !ids.has(x.id));
            return [...added, ...prev];
          });
        }
      } catch {
        setFirebaseActive(false);
      }
    };
    init();
  }, []);

  const handleSaveSnippet = async (newSnippetData: Omit<Snippet, 'id'>) => {
    let newId = Date.now().toString();

    try {
      const fbId = await addSnippetToFirebase(newSnippetData);
      if (fbId) newId = fbId;
    } catch {}

    const newSnippet: Snippet = { id: newId, ...newSnippetData };

    setSnippets(prev => [newSnippet, ...prev]);
    setCurrentPage(1);
    setSortBy('date-desc');
  };

  const filteredSnippets = useMemo(() => {
    const q = searchQuery.toLowerCase();
    const filtered = snippets.filter(s =>
      s.themeName.toLowerCase().includes(q) ||
      s.storeName.toLowerCase().includes(q) ||
      s.author.toLowerCase().includes(q) ||
      s.code.toLowerCase().includes(q)
    );

    return filtered.sort((a, b) => {
      if (sortBy === 'date-desc') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'date-asc') return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortBy === 'theme-asc') return a.themeName.localeCompare(b.themeName);
      return 0;
    });
  }, [snippets, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredSnippets.length / ITEMS_PER_PAGE);
  const paginatedSnippets = filteredSnippets.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy]);

  const totalThemes = snippets.length;
  const uniqueStores = snippets.length;

const downloadSnippets = async () => {
  const snippets = await fetchSnippets();

  const blob = new Blob([JSON.stringify(snippets, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "snippets.json";
  a.click();

  URL.revokeObjectURL(url);
};



  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <div className="navbar-icon">
              <Code />
            </div>
            <div className="navbar-title">
              <h1>WiserCode</h1>
              <p>Integration Library</p>
            </div>
          </div>

          <button onClick={() => setIsModalOpen(true)} className="btn-primary desktop-only">
            <Plus size={18} />
            Add Integration
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="main">
        {/* HEADER INFO */}
        <div className="header">
          <div>
            <h2 className="page-title">Theme Repository</h2>
            <p className="page-desc">
              Centralized hub for Shopify drawer integration codes.
            </p>
          </div>

          <div className="stats">
            <div className="stat-box">
              <span className="stat-label">Total Codes</span>
              <span className="stat-value">{totalThemes}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Stores</span>
              <span className="stat-value">{uniqueStores}</span>
            </div>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="filter-bar">
          <div className="search-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search themes, store URLs, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-right">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="sort-select"
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="theme-asc">Theme (A-Z)</option>
            </select>

            <button className="btn-primary mobile-only" onClick={() => setIsModalOpen(true)}>
              <Plus size={18} />
            </button>
          </div>
        </div>

        {/* PAGINATION */}
        {filteredSnippets.length > ITEMS_PER_PAGE && (
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
            >
              <ChevronLeft size={16} /> 
            </button>

            <span className="page-count">Page {currentPage} of {totalPages}</span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
            >
               <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* GRID */}
        <div className="grid">
          {paginatedSnippets.length > 0 ? (
            paginatedSnippets.map(snippet => (
              <CodeBlock key={snippet.id} snippet={snippet} />
            ))
          ) : (
            <div className="empty">
              <div className="empty-icon">
                <Database />
              </div>
              <h3>No results found</h3>
              <p>No integration codes match “{searchQuery}”.</p>

              <button className="btn-link" onClick={() => setIsModalOpen(true)}>
                <Plus size={16} /> Add new integration
              </button>
            </div>
          )}
        </div>
<button onClick={downloadSnippets} className="btn-secondary desktop-only">
  Download Firebase data Snippets
</button>


      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} WiserCode. Internal Development Tool.</p>
        <div className="status">
          <span className={firebaseActive ? "dot green" : "dot yellow"}></span>
          <span>{firebaseActive ? "Database Connected" : "Local Mode"}</span>
        </div>
      </footer>

      <AddModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveSnippet}
      />
      
    </div>
    
  );
};

export default App;

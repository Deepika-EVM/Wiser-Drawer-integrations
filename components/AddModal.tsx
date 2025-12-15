import React, { useState } from 'react';
import { X, Save, AlertCircle, Type, Globe, User, Code, Image, FileDiff } from 'lucide-react';
import { Snippet } from '../types';

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (snippet: Omit<Snippet, 'id'>) => Promise<void>;
}

const AddModal: React.FC<AddModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    storeName: '',
    themeName: '',
    author: '',
    code: '',
    screenshot: '',
    themeChanges: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
// Validation: themeChanges and screenshot — at least ONE is required
// ✅ Correct Validation — Screenshot & Theme Changes NOT required
if (
  !formData.storeName ||
  !formData.themeName ||
  !formData.code ||
  !formData.author
) {
  setError("Store, Theme, Author, and Code are required.");
  return;
}



    setLoading(true);
    setError('');
    
    const date = new Date().toISOString().split('T')[0];

    try {
      // @ts-ignore - Assuming Snippet type handles extra fields or is flexible
      await onSave({
        ...formData,
        date,
      });
      setFormData({ storeName: '', themeName: '', author: '', code: '', screenshot: '', themeChanges: '' }); // Reset
      onClose();
    } catch (err) {
      setError('Failed to save. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleScreenshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    setFormData({ ...formData, screenshot: reader.result as string });
  };
  reader.readAsDataURL(file); // convert to base64
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100 bg-slate-50/50">
          <div>
            <h2 className="text-xl font-bold text-slate-800">New Integration</h2>
            <p className="text-sm text-slate-500 mt-0.5">Add a new drawer code snippet to the library.</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-full">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar bg-white">
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2 text-red-600 text-sm font-medium">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <form id="add-code-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Type size={12} /> Theme Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dawn 12.0"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium"
                  value={formData.themeName}
                  onChange={(e) => setFormData({...formData, themeName: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Globe size={12} /> Store URL
                </label>
                <input
                  type="text"
                  placeholder="shop.myshopify.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium"
                  value={formData.storeName}
                  onChange={(e) => setFormData({...formData, storeName: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <User size={12} /> Added By
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium"
                value={formData.author}
                onChange={(e) => setFormData({...formData, author: e.target.value})}
              />
            </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Image size={12} /> Screenshot
                </label>

                {/* Option A: URL */}
                <input
                  type="text"
                  placeholder="https://example.com/screenshot.png"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5"
                  value={formData.screenshot}
                  onChange={(e) => setFormData({ ...formData, screenshot: e.target.value })}
                />

                {/* Option B: Upload from computer */}
                <input
                  type="file"
                  accept="image/*"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5"
                  onChange={handleScreenshotUpload}
                />

                {/* Preview selected screenshot */}
                {formData.screenshot && (
                  <img
                    src={formData.screenshot}
                    alt="Screenshot preview"
                    className="mt-2 rounded-lg border border-slate-200 max-h-40 object-cover"
                  />
                )}
              </div>


            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <FileDiff size={12} /> Theme Code Changes Details
              </label>
              <textarea
                rows={3}
                placeholder="Describe the theme code changes..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium resize-none leading-relaxed"
                value={formData.themeChanges}
                onChange={(e) => setFormData({...formData, themeChanges: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Code size={12} /> JavaScript Code
              </label>
              <div className="relative rounded-lg overflow-hidden border border-slate-200 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all">
                <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 text-xs text-slate-500 font-mono">
                  function wiseraddedtocart() {'{ ... }'}
                </div>
                <textarea
                  rows={10}
                  placeholder="// Paste your code here..."
                  className="w-full bg-white px-4 py-3 text-slate-700 font-mono text-sm outline-none resize-none leading-relaxed"
                  value={formData.code}
                  onChange={(e) => setFormData({...formData, code: e.target.value})}
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
          <button 
            type="button" 
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            form="add-code-form"
            disabled={loading}
            className="px-6 py-2.5 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all shadow-md shadow-indigo-200 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? 'Saving...' : <><Save size={18} /> Save to Library</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
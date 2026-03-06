import React, { useState } from 'react';
import {
  X,
  Save,
  AlertCircle,
  Type,
  Globe,
  User,
  Code,
  Image,
  FileDiff
} from 'lucide-react';
import "./App.css";
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
    version: '',
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

    if (!formData.storeName || !formData.themeName || !formData.code || !formData.author) {
      setError('Store, Theme, Author, and Code are required.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const date = new Date().toISOString().split('T')[0];
      await onSave({ ...formData, date });
      setFormData({
        storeName: '',
        themeName: '',
        version: '',
        author: '',
        code: '',
        screenshot: '',
        themeChanges: ''
      });
      onClose();
    } catch {
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
    reader.readAsDataURL(file);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">

        {/* Header */}
        <div className="modal-header">
          <div>
            <h2>New Integration</h2>
            <p>Add a new drawer code snippet to the library.</p>
          </div>
          <button className="icon-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {error && (
            <div className="error-box">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <form id="add-code-form" onSubmit={handleSubmit}>
<div className="grid-2">
  <div className="field">
    <label><Type size={12} /> Theme Name</label>
    <input  placeholder="Dawn"
      value={formData.themeName}
      onChange={(e) =>
        setFormData({ ...formData, themeName: e.target.value })
      }
    />
  </div>

  {/* ✅ NEW VERSION FIELD */}
  <div className="field">
    <label>Version (optional)</label>
    <input
      placeholder="1.0, 2.0"
      value={formData.version}
      onChange={(e) =>
        setFormData({ ...formData, version: e.target.value })
      }
    />
  </div>
                <div className="field">
                <label><Globe size={12} /> Store URL</label>
                <input  placeholder="wiser.myshopify.com"
                  value={formData.storeName}
                  onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                />
              </div>
</div>


            <div className="field">
              <label><User size={12} /> Added By</label>
              <input
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              />
            </div>

            <div className="field">
              <label><Image size={12} /> Screenshot</label>
              <input
                placeholder="https://example.com/image.png"
                value={formData.screenshot}
                onChange={(e) => setFormData({ ...formData, screenshot: e.target.value })}
              />
              <input type="file" accept="image/*" onChange={handleScreenshotUpload} />

              {formData.screenshot && (
                <img className="preview-image" src={formData.screenshot} />
              )}
            </div>

            <div className="field">
              <label><FileDiff size={12} /> Theme Code Changes</label>
              <textarea
                rows={3}
                value={formData.themeChanges}
                onChange={(e) => setFormData({ ...formData, themeChanges: e.target.value })}
              />
            </div>

            <div className="field">
              <label><Code size={12} /> JavaScript Code</label>
              <textarea
            
                rows={10}
                className="code-box"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
              />
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn secondary" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn primary"
            type="submit"
            form="add-code-form"
            disabled={loading}
          >
            <Save size={16} />
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddModal;

import React, { useState } from "react";
import { Copy, Check, User, ShoppingBag, Code2, ImageOff } from "lucide-react";
import { Snippet } from "../types";
import "./App.css";

interface CodeBlockProps {
  snippet: Snippet;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ snippet }) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);



  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(snippet.code);
      } else {
        // Fallback for unsafe environments
        const textArea = document.createElement("textarea");
        textArea.value = snippet.code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);

    } catch (err) {
      console.error("Copy failed", err);

    }
  };

  const cleanStoreUrl = snippet.storeName
    ?.replace(/^https?:\/\//, "")
    ?.replace(/\/$/, "")
    ?.replace(/^www\./, "");

  const screenshotExists =
    snippet.screenshot && snippet.screenshot.trim() !== "";

  const themeChangesExists =
    snippet.themeChanges && snippet.themeChanges.trim() !== "";

  const hasExtra = screenshotExists || themeChangesExists;

  return (
    <div className="code-card">

      {/* HEADER */}
      <div className="code-card-header">

        <div className="author-date">
          <a
            className="store-link"
            href={`https://${cleanStoreUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cleanStoreUrl}
          </a>
          <div className="author">
            <User size={14} /> {snippet.author}
          </div>

        </div>

        <div className="theme-info">
                 
          <div className="theme-name-wrapper">
            <ShoppingBag size={16} />
<h3 className="theme-name">
  {snippet.themeName}
  {snippet.version && (
    <span className="theme-version"> ({snippet.version})</span>
  )}
</h3>

          </div>

   <div className="date">{snippet.date}</div>
        </div>
      </div>

      {/* CODE ALWAYS VISIBLE */}
      <div className="code-block">
        <div className="code-toolbar">
          <div className="toolbar-left">
            <Code2 size={14} className="opacity-70" />
            Code Snippet
          </div>

          <button
            className={`copy-button ${copied ? "copied" : ""}`}
            onClick={handleCopy}
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? "Copied" : "Copy"}
          </button>

        </div>

        <pre className="code-content">
          <code>{snippet.code}</code>
        </pre>
      </div>

      {/* EXTRA CONTENT => ALWAYS ACCORDION */}
      {hasExtra && (
        <>
          <div
            className="accordion-toggle"
            onClick={() => setExpanded(!expanded)}
          >
            <span>{expanded ? "Hide Themechanges ▲" : "Show Themechanges ▼"}</span>
          </div>

          {expanded && (
            <div className="accordion-content">

              {/* Screenshot */}
              {screenshotExists && !imgError && (
                <div className="screenshot-container">
                  <img
                    src={snippet.screenshot}
                    alt="Screenshot"
                    className="screenshot"
                    onError={() => setImgError(true)}
                  />
                </div>
              )}

              {screenshotExists && imgError && (
                <div className="screenshot-fallback">
                  <ImageOff size={20} />
                  Screenshot not available
                </div>
              )}

              {/* Theme Changes */}
              {themeChangesExists && (
                <div className="theme-changes">
                  <h4>Theme Changes</h4>
                  <pre>{snippet.themeChanges}</pre>
                </div>
              )}
            </div>
          )}
        </>
      )}

    </div>
  );
};

export default CodeBlock;

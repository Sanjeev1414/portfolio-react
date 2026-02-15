import React from 'react';
import '../styles/ItCompanyScene.css';

const ItCompanyScene = () => {
  return (
    <div className="it-company-scene">
      {/* Screen Board */}
      <div className="screen-board">
        <div className="screen-content">
          <div className="screen-line"></div>
          <div className="screen-line"></div>
          <div className="screen-line short"></div>
        </div>
      </div>

      {/* Main Table */}
      <div className="workspace-table">
        {/* Left Laptop */}
        <div className="laptop left-laptop">
          <div className="laptop-screen">
            <div className="screen-glow"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
          </div>
          <div className="laptop-base"></div>
        </div>

        {/* Center - Developer Workspace */}
        <div className="developer-workspace">
          {/* Developer Avatar */}
          <div className="developer-avatar">
            <div className="avatar-head"></div>
            <div className="avatar-body"></div>
          </div>
          <div className="developer-label">Developer</div>
        </div>

        {/* Right Laptop */}
        <div className="laptop right-laptop">
          <div className="laptop-screen">
            <div className="screen-glow"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
          </div>
          <div className="laptop-base"></div>
        </div>
      </div>

      {/* Table Legs */}
      <div className="table-legs">
        <div className="leg left-leg"></div>
        <div className="leg right-leg"></div>
      </div>

      {/* Floating Code Symbols */}
      <div className="floating-symbols">
        <span className="symbol">{'<'}</span>
      </div>

      <div className="floating-symbols right-symbol">
        <span className="symbol">{'>'}</span>
      </div>

      {/* Animated Background Grid */}
      <div className="scene-grid"></div>

      {/* Status Indicator */}
      <div className="status-indicator">
        <div className="status-dot"></div>
        <span>Active</span>
      </div>
    </div>
  );
};

export default ItCompanyScene;

// src/components/TopBar.tsx
import React from "react";
import { Link } from "react-router";
import './TopBar.css';

interface TopBarProps {
  leftText?: string;
  rightLink?: { text: string, to: string };
}

const TopBar: React.FC<TopBarProps> = ({ leftText, rightLink }) => {
  return (
    <div className="topbar">
      <div className="topbar-left">{leftText}</div>
      <div className="topbar-right">
        {rightLink && <Link to={rightLink.to}>{rightLink.text}</Link>}
      </div>
    </div>
  );
};

export default TopBar;

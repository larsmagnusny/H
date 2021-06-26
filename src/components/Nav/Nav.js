import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
    return (
        <nav className="nav">
            <Link to="/rig" className="nav-item">Rig</Link>
            <Link to="/dashboard" className="nav-item">Dashboard</Link>
            <Link to="/preferences" className="nav-item">Preferences</Link>
        </nav>
    );
}
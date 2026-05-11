import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page">
      <h1>404 — Page Not Found</h1>
      <p>We could not find the page you were looking for.</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

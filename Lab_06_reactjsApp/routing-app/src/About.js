import React from 'react';

export default function About() {
  return (
    <div className="page">
      <h1>About This Website</h1>
      <p>
        This demo site is built with React and React Router to show how a single-page application can
        handle multiple pages without reloading the browser.
      </p>
      <p>
        Use the navigation links to browse the Home, Products, and Contact pages. The Products page
        includes interactive buttons, and the Contact page includes a form.
      </p>
    </div>
  );
}

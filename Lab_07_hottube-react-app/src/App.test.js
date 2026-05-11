import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the category page', () => {
  window.history.pushState({}, 'Category', '/category');
  render(<App />);
  expect(screen.getByRole('heading', { name: /top product listing/i })).toBeInTheDocument();
  expect(screen.getByRole('searchbox', { name: /search/i })).toBeInTheDocument();
});

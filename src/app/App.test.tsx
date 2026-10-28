import { render, screen } from '@testing-library/react';
import { App } from '@/app/App';

describe('App', () => {
  it('renders the portfolio home', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Leidis Lopez Castaño/i })).toBeTruthy();
  });
});

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Header from '@/components/Header';

test('renders the header with the logo and Try Now button', () => {
  render(<Header />);

  // Check if the logo with the correct alt text is rendered
  const logoElement = screen.getByAltText(/Logo of medical/i);
  expect(logoElement).toBeInTheDocument();

  // Check if the "Try Now" button is rendered
  const buttonElement = screen.getByText(/Try Now/i);
  expect(buttonElement).toBeInTheDocument();
});
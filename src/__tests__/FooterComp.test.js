import { render, screen } from '@testing-library/react';
import FooterComp from '../components/FooterComp'

test('Busca el texto Designed', () => {
  render(<FooterComp />);
  const linkElement = screen.getByText(/Designed/i);
  expect(linkElement).toBeInTheDocument();
});
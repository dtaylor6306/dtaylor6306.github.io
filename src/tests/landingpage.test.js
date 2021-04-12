import LandingPage from '../components/landingpage';
import { render, screen } from '@testing-library/react';



test('My name should be on screen', () => {
    render(<LandingPage />);
    const name = screen.getByText('Dylan Taylor');
    expect(name).toBeInTheDocument();
  });

test('My Avatar img must have src = "/images/mesaSelfie.jpg", and alt= "avatar"', () => {
  render(<LandingPage/>);
  const avatar = screen.getByRole('img');
  expect(avatar).toHaveAttribute('src', '/images/mesaSelfie.jpg');
  expect(avatar).toHaveAttribute('alt', 'avatar');
});
import { render, screen } from '@testing-library/react';
import AboutMe from '../components/aboutme';


test('Looking for the exact text of my about me.', () => {
    render(<AboutMe />);
    const name = screen.getByText(/My name is Dylan Taylor/i);
    expect(name).toBeInTheDocument();
}); 

test('Looking for the exact text of my about me.', () => {
    render(<AboutMe />);
    const text = screen.getByText(/about me/i);
    expect(text).toBeInTheDocument();
}); 
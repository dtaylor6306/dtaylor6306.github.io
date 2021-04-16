import { render, screen } from '@testing-library/react';
import AboutMeText from '../data/aboutmetext';


test('Looking for the exact text of my about me.', () => {
    render(<AboutMeText />);
    const name = screen.getByText(/My name is Dylan Taylor/i);
    expect(name).toBeInTheDocument();
}); 


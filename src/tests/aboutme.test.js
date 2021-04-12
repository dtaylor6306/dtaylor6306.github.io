import { render, screen } from '@testing-library/react';
import AboutMe from '../components/aboutme';


test('Looking for the exact text of my about me.', () => {
    render(<AboutMe />);
    const name = screen.getByText("My name is Dylan Taylor, I am currently a student at Colorado Mesa University, aswell as a Tutor for the school.I started my academic journey in 2017 and will graduate with a B.S. in Computer Science spring 2021.");
    expect(name).toBeInTheDocument();
}); 

test('Looking for the exact text of my about me.', () => {
    render(<AboutMe />);
    const text = screen.getByText(/about me/i);
    expect(text).toBeInTheDocument();
}); 
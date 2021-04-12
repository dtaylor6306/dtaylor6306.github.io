import { render, screen } from '@testing-library/react';
import Resume from '../components/resume';


test('The date should be shown on screen.', () => {
    render(<Resume />);
    const resume = screen.getByText(/my resume/i);
    expect(resume).toBeInTheDocument();
  });
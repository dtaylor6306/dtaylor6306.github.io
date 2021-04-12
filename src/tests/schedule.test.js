import { render, screen } from '@testing-library/react';
import Schedule from '../components/schedule';


test('The date should be shown on screen.', () => {
    render(<Schedule />);
    const schedule = screen.getByText(/Today's Date:/i);
    expect(schedule).toBeInTheDocument();
  });
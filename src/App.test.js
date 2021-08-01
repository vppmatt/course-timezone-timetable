import { render, screen } from '@testing-library/react';
import {timeZone1} from './course-data'
import App from './App';

test('renders time zone 1', () => {
  render(<App />);
  const linkElement = screen.getByText(timeZone1.location);
  expect(linkElement).toBeInTheDocument();
});

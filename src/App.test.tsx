import { fireEvent, render, screen } from '@testing-library/react';
import App, { COLORS } from './App';

test('renders Move images button', () => {
  render(<App />);
  const button = screen.getByText('Move images');
  expect(button).toBeInTheDocument();
});

test('renders next button color', () => {
  render(<App />);
  const button = screen.getByText('Move images');
  expect(button).toHaveStyle(`background-color: ${COLORS[0]}`);
  fireEvent.click(button);
  expect(button).toHaveStyle(`background-color: ${COLORS[1]}`);
});

test('should render first button color in the end', () => {
  render(<App />);
  const button = screen.getByText('Move images');
  expect(button).toHaveStyle(`background-color: ${COLORS[0]}`);
  COLORS.forEach(() => fireEvent.click(button));
  expect(button).toHaveStyle(`background-color: ${COLORS[0]}`);
});

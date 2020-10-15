import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

<<<<<<< HEAD
<<<<<<< HEAD
test('renders learn react link', () => {});
=======
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
>>>>>>> 2e26135b46affb4aa1acfb2d67fecd4cd9035ff3
=======
test('renders learn react link', () => {});
>>>>>>> aa96c6e (first commit)

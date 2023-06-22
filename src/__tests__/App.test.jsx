import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import App from '../App';

describe('App component', () => { 
  test('allows form use and renders expected results', () => {
    render(<App />);
    let urlInput = screen.getByTestId('test-url-input');
    let postMethod = screen.getByTestId('test-post');
    let goButton = screen.getByTestId('test-button');

    fireEvent.change(urlInput, { target: { value: 'https://pokeapi.co/api/v2/pokemon' } });
    fireEvent.click(postMethod);
    fireEvent.click(goButton);

    let resultsBefore = screen.getByTestId('test-results');
    expect(resultsBefore).toHaveTextContent('LOADING...');

    //!! THESE ARE BROKEN BELOW FIX LATER
    let methodDiv = screen.getByTestId('test-method');
    let urlDiv = screen.getByTestId('test-url');
    expect(methodDiv).toHaveTextContent('Request Method:');
    expect(urlDiv).toHaveTextContent('URL:');
  });
  
});
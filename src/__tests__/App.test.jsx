import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
// import { renderHook } from '@testing-library/react-hooks'; // this is not working
import { useState, useEffect } from 'react';
import { rest, setupServer } from 'msw'
import App from '../App';

//from the docs: https://testing-library.com/docs/react-testing-library/example-intro/#full-example
const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there'}))
  }),
)

// establish API mocking BEFORE running test below
beforeAll(() => server.listen());
// reset any request handlers that we may add during the tests, so they don't affect other tests
afterEach(() => server.resetHandlers());
// clean up after the tests are finished
afterAll(() => server.close());

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

    let methodDiv = screen.getByTestId('test-method');
    let urlDiv = screen.getByTestId('test-url');
    expect(methodDiv).toHaveTextContent('Request Method:');
    expect(urlDiv).toHaveTextContent('URL:');
  });

  test('should fetch data from the API', async () => {
   
  });
  
});
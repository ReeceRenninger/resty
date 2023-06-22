import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
// import { renderHook } from '@testing-library/react-hooks'; // this is not working
import { useState, useEffect } from 'react';
import { rest, setupServer } from 'msw'
import App from '../App';

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    // Define the response data you want to mock
    const mockedResponse = { name: 'Pikachu', type: 'Electric' };

    // Return the mocked response
    return res(ctx.json(mockedResponse));
  })
);

beforeAll(() => server.listen());

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

    //!! THESE ARE BROKEN BELOW FIX LATER
    let methodDiv = screen.getByTestId('test-method');
    let urlDiv = screen.getByTestId('test-url');
    expect(methodDiv).toHaveTextContent('Request Method:');
    expect(urlDiv).toHaveTextContent('URL:');
  });

  test('should fetch data from the API', async () => {
    const { result, waitForNextUpdate } = renderHook(() => {
      // Your useEffect hook that makes the API call
      const [data, setData] = useState(null);

      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon');
          const data = await response.json();
          setData(data);
        };

        fetchData();
      }, []);

      return data;
    });

    await waitForNextUpdate();

    expect(result.current).toEqual({ name: 'Pikachu', type: 'Electric' });
  });
  
});
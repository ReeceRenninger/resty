import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { rest} from 'msw'
import { setupServer} from 'msw/node'
import App from '../App';

//msw is trash, find a better way to mock API calls in the future myself
//from the docs: https://testing-library.com/docs/react-testing-library/example-intro/#full-example
const server = setupServer(
  rest.get('/testGet', (req, res, ctx) => {
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
  test('allows form use and renders expected results', async () => {
    render(<App />);
    let urlInput = screen.getByTestId('test-url-input');
    let getMethod = screen.getByTestId('test-get');
    let goButton = screen.getByTestId('test-button');

    fireEvent.change(urlInput, { target: { value: '/testGet' } });
    fireEvent.click(getMethod);
    fireEvent.click(goButton);

    let pre = await screen.findByTestId('test-results');
    expect(pre).toHaveTextContent('hello there');
    // expect(resultsBefore).toHaveTextContent('LOADING...');

    let methodDiv = screen.getByTestId('test-method');
    let urlDiv = screen.getByTestId('test-url');
    expect(methodDiv).toHaveTextContent('Request Method:');
    expect(urlDiv).toHaveTextContent('/testGet');
  });

  // test('should fetch data from the API', async () => {
   
  // });
  
});
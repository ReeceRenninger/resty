import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Results from '.';

describe('Test Results functions', () => {
  test('Should contain component with results id', () => { 
    render(<Results/>);
    const results = screen.getByTestId('test-results');
    expect(results).toBeInTheDocument();
   })
});
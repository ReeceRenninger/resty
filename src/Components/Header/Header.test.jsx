import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '.';

describe('Test Header elements', () => { 
  test('Should contain component with footer id', () => { 
    render(<Header/>);
    const header = screen.getByTestId('test-header');
    expect(header).toBeInTheDocument();
   })
});
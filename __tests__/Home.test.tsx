import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

const pushMock = jest.fn();

useRouter;
it('should have Mage text', () => {
  jest.mock('next/router', () => ({
    useRouter: jest.fn(),
  }));
  render(<Home />); //ARRANGE

  const myElem = screen.getByText('Mage'); //ACT

  expect(myElem).toBeInTheDocument(); //ASSERT
});

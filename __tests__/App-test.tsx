import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import Cart from '../Component/Cart';

// Mock the navigation prop
const mockNavigation = {
  navigate: jest.fn(),
};


test('Cart Screen', () => {
  const { getByTestId } = render(<Cart navigation={mockNavigation} />);
  const CartScreen = getByTestId('myButton');
  expect(CartScreen).toHaveTextContent('CheckoutScreen');
});


test('renders initial counter value', () => {
  const { getByTestId } = render(<Cart navigation={undefined} />);
  
  const counterText = getByTestId('COUNTTEXT-0');
  expect(counterText).toHaveTextContent('0');

  const incrementButton = getByTestId('incrementButton-0');
  fireEvent.press(incrementButton)

  const decrementButton = getByTestId('decrementButton-0');
  fireEvent.press(decrementButton)




});





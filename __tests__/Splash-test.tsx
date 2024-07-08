import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Splash from "../Component/Splash"

// Mock the navigation prop
const mockNavigation = {
  navigate: jest.fn(),
};

test('Food Delivery Splash Screen', () => {
  const { getByTestId } = render(<Splash navigation={mockNavigation} />);
  const splashText = getByTestId('splash-text');
  expect(splashText).toHaveTextContent('Food Delivery');
});

test('navigates to CarouselScreen after 3 seconds', async () => {
    render(<Splash navigation={mockNavigation} />);
    await waitFor(() => {
      console.log('Navigation calls:', mockNavigation.navigate.mock.calls);
      expect(mockNavigation.navigate).toHaveBeenCalledWith('CarouselScreen');
    }, { timeout: 5000 }); // Increase the timeout to 5 seconds to allow for the navigation delay
  });
  
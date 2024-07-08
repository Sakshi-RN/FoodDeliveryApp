import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselScreen from '../Component/CarouselScreen';

jest.mock('react-native-snap-carousel', () => ({
    __esModule: true,
    default: jest.fn(),
  }));

  test('renders the carousel', () => {
    const { getByTestId } = render(<CarouselScreen />);
    const carousel = getByTestId('carousel');
  
    expect(carousel).toBeDefined();
  });
import React from 'react'
import {renderWithProviders} from '../../testUtils';
import {screen} from '@testing-library/react';
import 'jest-styled-components';
import LoadingOverlay from "./LoadingOverlay";

test('It is not visible on the screen when \'show\' prop is false', async () => {
  renderWithProviders(<LoadingOverlay show={false}/>);

  expect(screen.getByTestId("loading-overlay")).not.toBeVisible();
});

test('It is visible on the screen when \'show\' prop is true', async () => {
  renderWithProviders(<LoadingOverlay show={true}/>);

  expect(screen.getByTestId("loading-overlay")).toBeVisible();
});

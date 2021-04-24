import React from 'react'
import {renderWithProviders} from '../../../testUtils';
import {screen} from '@testing-library/react';
import Button from "./Button";
import 'jest-styled-components';

test('Displays a given text', async () => {
  const label = "label";
  renderWithProviders(<Button>label</Button>);

  expect(screen.getByRole("button")).toHaveTextContent(label);
});

test('Is disabled when given the \'disabled\' prop', async () => {
  renderWithProviders(<Button disabled/>);

  expect(screen.getByRole("button")).toHaveAttribute('disabled');
});

test('Is fullwidth when \'fullwidth prop\' is passed', async () => {
  renderWithProviders(<Button fullWidth/>);

  expect(screen.getByRole("button")).toHaveStyleRule('width', '100%');
});

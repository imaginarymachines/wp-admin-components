// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

import React from 'react';
import AdminPage from '../src/AdminPage';
export const decorators = [
  (Story) => (
    <AdminPage>
      <Story />
    </AdminPage>
  ),
];

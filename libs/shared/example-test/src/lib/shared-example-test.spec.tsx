import React from 'react';
import { render } from '@testing-library/react';

import SharedExampleTest from './shared-example-test';

describe('SharedExampleTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedExampleTest />);
    expect(baseElement).toBeTruthy();
  });
});

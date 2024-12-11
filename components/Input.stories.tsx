import React, { useEffect, useState } from 'react';

const DelayedVisibilityDecorator = (Story) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: visible ? 'inherit' : 'none' }}>
      <Story />
    </div>
  );
};

import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      inlineStories: true, // Ensures stories appear inline in Docs
    },
  },
  decorators: [DelayedVisibilityDecorator],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Input with value',
    value: 'Pre-filled value',
  },
};

export const Autofocus: Story = {
  args: {
    placeholder: 'Autofocused input',
    autoFocus: true,
  },
};

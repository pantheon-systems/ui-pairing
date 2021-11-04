import React from 'react';

import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  id: 'my-regular-input',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  id: 'my-email-input',
  type: 'email',
};

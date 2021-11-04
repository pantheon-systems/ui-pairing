import React from 'react';

import { Form } from './Form';
import { Button } from '../Button';
import { Input } from '../Input';

export default {
  title: 'Example/Form',
  component: Form,
  argTypes: {
    children: { control: null },
  },
};

const Template = (args) => (
  <Form {...args}>
    <div className="form-group">
      <label htmlFor="my-email-field">Email</label>
      <Input id="my-email-field" />
    </div>
    <div className="form-group">
      <label htmlFor="my-password-field">Password</label>
      <Input id="my-password-field" type="password" />
    </div>
    <Button primary={true} type="submit">
      Submit
    </Button>
  </Form>
);

export const BasicForm = Template.bind({});
BasicForm.args = {
  autoComplete: 'off',
};

export const HorizontalForm = Template.bind({});
HorizontalForm.args = {
  autoComplete: 'off',
  horizontal: true,
};

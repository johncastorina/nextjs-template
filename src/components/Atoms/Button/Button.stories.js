import React from 'react';
import '../../../styles/tailwind.css';

import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: { control: 'string' },
  },
};

const Template = (args, { text }) => <Button {...args}>{text}</Button>;

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  variant: 'primary',
  size: 'medium',
  text: 'Primary Button',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  variant: 'primary',
  size: 'large',
  text: 'Primary Button',
};

export const PrimaryExtraLarge = Template.bind({});
PrimaryExtraLarge.args = {
  variant: 'primary',
  size: 'xlarge',
  text: 'Primary Button',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  variant: 'secondary',
  text: 'Secondary Button',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  variant: 'secondary',
  size: 'large',
  text: 'Secondary Button',
};

export const SecondaryExtraLarge = Template.bind({});
SecondaryExtraLarge.args = {
  variant: 'secondary',
  size: 'xlarge',
  text: 'Secondary Button',
};

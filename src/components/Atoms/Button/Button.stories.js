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

const Template = (args) => <Button {...args}>Button Component</Button>;

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  variant: 'primary',
  size: 'medium',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  variant: 'primary',
  size: 'large',
};

export const PrimaryExtraLarge = Template.bind({});
PrimaryExtraLarge.args = {
  variant: 'primary',
  size: 'xlarge',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  variant: 'secondary',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  variant: 'secondary',
  size: 'large',
};

export const SecondaryExtraLarge = Template.bind({});
SecondaryExtraLarge.args = {
  variant: 'secondary',
  size: 'xlarge',
};

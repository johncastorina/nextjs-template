import React from 'react';
import '../../../styles/tailwind.css';

import { Typography } from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: { control: 'string' },
  },
};

const Template = (args) => <Typography {...args}>This is typography</Typography>;

export const Title = Template.bind({});
Title.args = {
  variant: 'h1',
};

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'h3',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  variant: 'h4',
};

export const Heading5 = Template.bind({});
Heading5.args = {
  variant: 'h5',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: 'p',
};

export const Em = Template.bind({});
Em.args = {
  variant: 'em',
};

export const Strong = Template.bind({});
Strong.args = {
  variant: 'strong',
};

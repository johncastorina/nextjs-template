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

const Template = (args, { text }) => <Typography {...args}>This is typography</Typography>;

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

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
  variant: 'h4',
};

export const H5 = Template.bind({});
H5.args = {
  variant: 'h5',
};

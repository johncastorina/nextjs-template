import React from 'react';
import '../../styles/tailwind.css';

import { Modal } from './Modal';
import AuthNavBar from '../Navbars/AuthNavbar';
import { UIContextProvider } from '../../state';

export default {
  title: 'Modals/Modal',
  component: Modal,
  argTypes: {
    variant: { control: 'string' },
  },
};

const Template = () => (
  <UIContextProvider>
    <AuthNavBar />
    <Modal />
  </UIContextProvider>
);

export const MainModal = Template.bind({});

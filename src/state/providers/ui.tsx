import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

type TUIContextProviderProps = {
  children: React.ReactNode
}

const UIContext = createContext({});

const UIContextProvider = ({ children }: TUIContextProviderProps):JSX.Element => {
  const [open, setOpen] = useState(false);
  const state = {
    modal: {
      open,
      setOpen,
    },
  };

  return (
    <UIContext.Provider value={state}>
      {children}
    </UIContext.Provider>
  );
};

UIContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UIContext };
export { UIContextProvider };
export default UIContextProvider;

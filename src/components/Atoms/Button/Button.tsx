import React from 'react';
import classNames from 'classnames';

export type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  variant?: string,
  size?: string,
  classes?: string,
  children: React.ReactNode
  buttonType?: ButtonType,
  [x:string]: any
}

const variantClasses = {
  primary: 'text-white font-bold px-6 py-4 rounded outline-none focus:outline-none bg-blueGray-700 active:bg-blueGray-600 uppercase shadow hover:shadow-lg',
  primaryOutline: 'text-blueGray-700',
  secondary: 'text-white font-bold px-6 py-4 rounded outline-none focus:outline-none bg-blueGray-400 active:bg-blueGray-500 uppercase  shadow hover:shadow-lg ease-linear transition-all duration-150',
  secondaryOutline: '',
  tertiary: '',
  tertiaryOutline: '',
};

const sizeClasses = {
  small: 'text-xs',
  medium: 'text-sm',
  large: 'text-lg',
  xlarge: 'text-2xl',
};

const defaultSize = 'medium';
const getVariantClasses = (variant) => variantClasses[variant] || variantClasses.primary;
const getSizeClasses = (size) => sizeClasses[size] || sizeClasses[defaultSize];

export const Button: React.FC<ButtonProps> = ({
  children, classes, variant, size, ...restProps
}) => {
  const { href, buttonType = 'button' } = restProps;
  const mergedClasses = classNames(
    classes,
    getVariantClasses(variant),
    getSizeClasses(size),
  );

  let ButtonHTML = (
    <button
      type={buttonType}
      {...restProps}
      className={mergedClasses}
    >
      {children}
    </button>
  );
  if (href) {
    ButtonHTML = (<a {...restProps} className={mergedClasses}>{children}</a>);
  }
  return ButtonHTML;
};

Button.displayName = 'Button';

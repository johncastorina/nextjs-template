import React from 'react';
import classNames from 'classnames';

export type TVariant =
'p' |
'strong' |
'em' |
'h1' |
'h2' |
'h3' |
'h4' |
'h5'

export interface TypographyProps {
  variant: TVariant,
  className?: string,
  children: React.ReactNode
  [x:string]: any
}

const commonClasses = '';

const variantClasses = {
  p: 'text-base mt-2',
  strong: 'font-bold',
  em: 'text-base',
  h1: 'text-5xl font-bold',
  h2: 'text-4xl font-bold',
  h3: 'text-3xl font-bold',
  h4: 'text-2xl font-bold',
  h5: 'text-lg font-semibold',
};

const getVariantClasses = (variant) => variantClasses[variant];

export const Typography: React.FC<TypographyProps> = ({
  children, className, variant, ...restProps
}) => {
  const mergedClasses = classNames(
    className,
    commonClasses,
    getVariantClasses(variant),
  );
  switch (variant) {
    case 'p':
      return (<p className={mergedClasses} {...restProps}>{children}</p>);
    case 'em':
      return (<em className={mergedClasses} {...restProps}>{children}</em>);
    case 'strong':
      return (<strong className={mergedClasses} {...restProps}>{children}</strong>);
    case 'h1':
      return (<h1 className={mergedClasses} {...restProps}>{children}</h1>);
    case 'h2':
      return (<h2 className={mergedClasses} {...restProps}>{children}</h2>);
    case 'h3':
      return (<h3 className={mergedClasses} {...restProps}>{children}</h3>);
    case 'h4':
      return (<h4 className={mergedClasses} {...restProps}>{children}</h4>);
    case 'h5':
      return (<h5 className={mergedClasses} {...restProps}>{children}</h5>);
    default:
      return null;
  }
};

Typography.displayName = 'Typography';

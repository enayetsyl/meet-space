import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center border font-medium rounded-md focus:outline-none transition ease-in-out duration-150';
  const sizeStyles = {
    small: 'px-2.5 py-1.5 text-xs',
    medium: 'px-3 py-2 text-sm',
    large: 'px-4 py-2 text-base',
  };

  const variantStyles = {
    primary: 'bg-light-gold text-dark-black border-light-gold hover:bg-medium-gold',
    secondary: 'bg-silver text-medium-black border-silver hover:bg-dark-gray',
    danger: 'bg-red-600 text-white border-red-600 hover:bg-red-700',
  };

  const buttonStyles = classNames(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className,
    { 'opacity-50 cursor-not-allowed': disabled }
  );

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  size: 'medium',
  className: '',
  disabled: false,
};

export default Button;

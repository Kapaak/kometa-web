import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'tetriary'
    | 'success'
    | 'error'
    | 'white'
    | 'disabled';
  size?: 'small' | 'regular';
  variant?: 'filled' | 'plain' | 'outlined';
  customColor?: string;
  loading?: boolean;
  fullWidth?: boolean;
}

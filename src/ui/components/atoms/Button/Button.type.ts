import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'tetriary' | 'success' | 'error' | 'grey';
  size?: 'small' | 'regular';
  variant?: 'filled' | 'plain' | 'outlined';
  customColor?: string;
  loading?: boolean;
}

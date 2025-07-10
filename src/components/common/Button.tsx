import { cn } from '@/utils/classUtils';
import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...props }: Props) => (
  <button
    className={cn(
      'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400',
      className
    )}
    {...props}
  />
);

export default Button;

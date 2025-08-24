import { cn } from '@/utils/classUtils';
import type { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: Props) => (
  <input
    className={cn(
      'w-full px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent',
      className
    )}
    {...props}
  />
);

export default Input;

import { cn } from '@/utils/classUtils';
import { useEffect, useRef, useState } from 'react';

export const Select = ({
  children,
}: {
  children: (props: {
    open: boolean;
    setOpen: (v: boolean) => void;
  }) => React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {children({ open, setOpen })}
    </div>
  );
};

export const SelectTrigger = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <button
    type="button"
    className={cn(
      'w-full border px-3 py-2 rounded-md text-sm text-left bg-white',
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export const SelectValue = ({
  value,
  placeholder,
}: {
  value: string | null;
  placeholder: string;
}) => (
  <span className={cn('text-sm', value ? 'text-black' : 'text-gray-400')}>
    {value || placeholder}
  </span>
);

export const SelectContent = ({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) =>
  open ? (
    <div className="absolute mt-1 w-full border rounded-md bg-white shadow z-10">
      {children}
    </div>
  ) : null;

export const SelectItem = ({
  value,
  children,
  onSelect,
}: {
  value: string;
  children: React.ReactNode;
  onSelect?: (value: string) => void;
}) => (
  <div
    className="px-3 py-2 hover:bg-blue-100 cursor-pointer text-sm"
    onClick={() => onSelect?.(value)}
  >
    {children}
  </div>
);

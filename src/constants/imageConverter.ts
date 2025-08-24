import type { WatermarkPosition } from '@/types/imageConverter';

export const FORMAT_OPTIONS = [
  { value: 'jpeg', label: 'JPG' },
  { value: 'png', label: 'PNG' },
  { value: 'bmp', label: 'BMP' },
];

export const POSITIONS: { label: string; value: WatermarkPosition }[] = [
  { label: '⬛', value: 'TOP_LEFT' },
  { label: '⬛', value: 'TOP_CENTER' },
  { label: '⬛', value: 'TOP_RIGHT' },
  { label: '⬛', value: 'CENTER_LEFT' },
  { label: '⬛', value: 'CENTER' },
  { label: '⬛', value: 'CENTER_RIGHT' },
  { label: '⬛', value: 'BOTTOM_LEFT' },
  { label: '⬛', value: 'BOTTOM_CENTER' },
  { label: '⬛', value: 'BOTTOM_RIGHT' },
];

export const STYLE_MAP: Record<WatermarkPosition, string> = {
  TOP_LEFT: 'top-2 left-2',
  TOP_CENTER: 'top-2 left-1/2 -translate-x-1/2',
  TOP_RIGHT: 'top-2 right-2',
  CENTER_LEFT: 'top-1/2 left-2 -translate-y-1/2',
  CENTER: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  CENTER_RIGHT: 'top-1/2 right-2 -translate-y-1/2',
  BOTTOM_LEFT: 'bottom-2 left-2',
  BOTTOM_CENTER: 'bottom-2 left-1/2 -translate-x-1/2',
  BOTTOM_RIGHT: 'bottom-2 right-2',
};

export const MAX_IMAGES = 50;

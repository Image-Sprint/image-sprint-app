import { useEffect, useRef, useState } from 'react';

type AspectRatioOptions = {
  width: number;
  height: number;
  keepRatio: boolean;
  setWidth: (w: number) => void;
  setHeight: (h: number) => void;
};

const useKeepAspectRatio = ({
  width,
  height,
  keepRatio,
  setWidth,
  setHeight,
}: AspectRatioOptions) => {
  const aspectRatioRef = useRef(width / height);
  const [lastChanged, setLastChanged] = useState<'width' | 'height' | null>(
    null
  );

  useEffect(() => {
    if (keepRatio) {
      aspectRatioRef.current = width / height;
    }
  }, [keepRatio]);

  useEffect(() => {
    if (!keepRatio || lastChanged !== 'width') return;
    const next = Math.round(width / aspectRatioRef.current);
    if (next !== height) setHeight(next);
  }, [width, height, keepRatio, lastChanged, setHeight]);

  useEffect(() => {
    if (!keepRatio || lastChanged !== 'height') return;
    const next = Math.round(height * aspectRatioRef.current);
    if (next !== width) setWidth(next);
  }, [height, width, keepRatio, lastChanged, setWidth]);

  const onWidthChange = (w: number) => {
    setLastChanged('width');
    setWidth(w);
  };

  const onHeightChange = (h: number) => {
    setLastChanged('height');
    setHeight(h);
  };

  return { onWidthChange, onHeightChange };
};

export default useKeepAspectRatio;

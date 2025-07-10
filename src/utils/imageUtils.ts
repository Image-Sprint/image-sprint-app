import type { WatermarkPosition } from '@/types/imageConverter';

export const generateWatermarkedPreview = async ({
  imageUrl,
  watermarkText,
  watermarkPosition,
  watermarkOpacity,
}: {
  imageUrl: string;
  watermarkText: string;
  watermarkPosition: WatermarkPosition;
  watermarkOpacity: number;
}): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // 외부 이미지 대응 시 필요
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);

      ctx.globalAlpha = watermarkOpacity;

      const fontSize = Math.floor(canvas.width * 0.08);
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.fillStyle = 'black';
      ctx.textBaseline = 'top';

      const textWidth = ctx.measureText(watermarkText).width;
      const textHeight = fontSize;
      const padding = 10;

      let x = 0,
        y = 0;

      switch (watermarkPosition) {
        case 'TOP_LEFT':
          x = padding;
          y = padding;
          break;
        case 'TOP_CENTER':
          x = canvas.width / 2 - textWidth / 2;
          y = padding;
          break;
        case 'TOP_RIGHT':
          x = canvas.width - textWidth - padding;
          y = padding;
          break;
        case 'CENTER_LEFT':
          x = padding;
          y = canvas.height / 2 - textHeight / 2;
          break;
        case 'CENTER':
          x = canvas.width / 2 - textWidth / 2;
          y = canvas.height / 2 - textHeight / 2;
          break;
        case 'CENTER_RIGHT':
          x = canvas.width - textWidth - padding;
          y = canvas.height / 2 - textHeight / 2;
          break;
        case 'BOTTOM_LEFT':
          x = padding;
          y = canvas.height - textHeight - padding;
          break;
        case 'BOTTOM_CENTER':
          x = canvas.width / 2 - textWidth / 2;
          y = canvas.height - textHeight - padding;
          break;
        case 'BOTTOM_RIGHT':
          x = canvas.width - textWidth - padding;
          y = canvas.height - textHeight - padding;
          break;
      }

      ctx.fillText(watermarkText, x, y);

      const dataUrl = canvas.toDataURL('image/png');
      resolve(dataUrl);
    };

    img.onerror = () => reject(new Error('이미지 로드 실패'));
  });
};

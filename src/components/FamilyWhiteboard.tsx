import { useRef, useEffect } from 'react';
import styles from './FamilyWhiteboard.module.css';
import { useTranslation } from 'react-i18next';

interface FamilyWhiteboardProps {
  isDarkMode?: boolean;
}

const drawStickFigure = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale: number = 1.0,
  name?: string,
  isDarkMode: boolean = false
) => {
  if (isDarkMode) {
    // Rainbow gradient for dark mode
    const gradient = ctx.createLinearGradient(x - 20, y - 50, x + 20, y + 50);
    gradient.addColorStop(0, '#ff0000'); // Red
    gradient.addColorStop(0.17, '#ff8000'); // Orange
    gradient.addColorStop(0.33, '#ffff00'); // Yellow
    gradient.addColorStop(0.5, '#00ff00'); // Green
    gradient.addColorStop(0.67, '#0080ff'); // Blue
    gradient.addColorStop(0.83, '#8000ff'); // Indigo
    gradient.addColorStop(1, '#ff0080'); // Violet
    ctx.strokeStyle = gradient;
  } else {
    ctx.strokeStyle = '#000';
  }

  ctx.lineWidth = 2 * scale;
  ctx.lineCap = 'round';

  const headRadius = 10 * scale;
  const armLength = 15 * scale;
  const legLength = 20 * scale;

  // Head
  ctx.beginPath();
  ctx.arc(x, y - 30 * scale, headRadius, 0, Math.PI * 2);
  ctx.stroke();

  // Body
  ctx.beginPath();
  ctx.moveTo(x, y - 20 * scale);
  ctx.lineTo(x, y + 20 * scale);
  ctx.stroke();

  // Arms
  ctx.beginPath();
  ctx.moveTo(x - armLength, y - 10 * scale);
  ctx.lineTo(x + armLength, y - 10 * scale);
  ctx.stroke();

  // Legs
  ctx.beginPath();
  ctx.moveTo(x, y + 20 * scale);
  ctx.lineTo(x - 10 * scale, y + 20 * scale + legLength);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x, y + 20 * scale);
  ctx.lineTo(x + 10 * scale, y + 20 * scale + legLength);
  ctx.stroke();

  // Name
  if (name) {
    if (isDarkMode) {
      // Rainbow gradient for text in dark mode
      const textGradient = ctx.createLinearGradient(x - 30, y + 35, x + 30, y + 45);
      textGradient.addColorStop(0, '#ff0000'); // Red
      textGradient.addColorStop(0.17, '#ff8000'); // Orange
      textGradient.addColorStop(0.33, '#ffff00'); // Yellow
      textGradient.addColorStop(0.5, '#00ff00'); // Green
      textGradient.addColorStop(0.67, '#0080ff'); // Blue
      textGradient.addColorStop(0.83, '#8000ff'); // Indigo
      textGradient.addColorStop(1, '#ff0080'); // Violet
      ctx.fillStyle = textGradient;
    } else {
      ctx.fillStyle = '#666';
    }
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(name, x, y + 50 * scale + 15);
  }
};

const drawSun = (ctx: CanvasRenderingContext2D, x: number, y: number, isDarkMode: boolean = false) => {
  if (isDarkMode) {
    // Rainbow gradient for sun in dark mode
    const sunGradient = ctx.createRadialGradient(x, y, 0, x, y, 20);
    sunGradient.addColorStop(0, '#ffff00'); // Yellow center
    sunGradient.addColorStop(0.5, '#ff8000'); // Orange middle
    sunGradient.addColorStop(1, '#ff0000'); // Red edge
    ctx.fillStyle = sunGradient;
  } else {
    ctx.fillStyle = '#FFD700';
  }

  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fill();

  // Sun rays
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4;
    const startX = x + Math.cos(angle) * 20;
    const startY = y + Math.sin(angle) * 20;
    const endX = x + Math.cos(angle) * 30;
    const endY = y + Math.sin(angle) * 30;

    if (isDarkMode) {
      // Rainbow gradient for rays in dark mode
      const rayGradient = ctx.createLinearGradient(startX, startY, endX, endY);
      rayGradient.addColorStop(0, '#ffff00'); // Yellow
      rayGradient.addColorStop(0.5, '#ff8000'); // Orange
      rayGradient.addColorStop(1, '#ff0000'); // Red
      ctx.strokeStyle = rayGradient;
    } else {
      ctx.strokeStyle = '#FFA500';
    }

    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
};

export default function FamilyWhiteboard({ isDarkMode = false }: FamilyWhiteboardProps) {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const familyDad = t('familyDad');
  const familyMom = t('familyMom');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw family stick figures
    drawStickFigure(ctx, 60, 120, 1, familyDad, isDarkMode); // Adult size
    drawStickFigure(ctx, 150, 120, 1, familyMom, isDarkMode); // Adult size
    drawStickFigure(ctx, 250, 135, 0.7, 'Atlas', isDarkMode); // Teen size
    drawStickFigure(ctx, 340, 150, 0.4, 'Oliver', isDarkMode); // Toddler size
    drawSun(ctx, 420, 60, isDarkMode); // Sun
  }, [isDarkMode, familyDad, familyMom]);

  return (
    <div className={`${styles.whiteboard} ${isDarkMode ? styles.dark : ''}`}>
      <h4 className={`${styles.whiteboardTitle} ${isDarkMode ? styles.dark : ''}`}>{t('familyTitle')}</h4>
      <canvas
        ref={canvasRef}
        width={450}
        height={250}
        className={`${styles.whiteboardCanvas} ${isDarkMode ? styles.dark : ''}`}
      />
    </div>
  );
}

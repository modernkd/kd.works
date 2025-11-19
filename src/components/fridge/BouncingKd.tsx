import * as React from 'react';
import styles from './BouncingKd.module.css';

interface BouncingKdProps {
  isBouncing?: boolean;
  initialPosition?: { x: number; y: number };
}

export default function BouncingKd({ isBouncing = false, initialPosition }: BouncingKdProps) {
  const screenWidthRef = React.useRef(window.innerWidth);
  const screenHeightRef = React.useRef(window.innerHeight);

  const positionRef = React.useRef(initialPosition || { x: 0, y: 0 });
  const speed = 20;
  const angle = Math.random() * 2 * Math.PI;
  const directionRef = React.useRef({
    dx: speed * Math.cos(angle),
    dy: speed * Math.sin(angle),
  });

  const [currentX, setCurrentX] = React.useState(initialPosition?.y || 0);
  const [currentY, setCurrentY] = React.useState(initialPosition?.x || 0);
  const [color, setColor] = React.useState('#f0f');

  const updatePosition = () => {
    if (!isBouncing) return;

    positionRef.current.x += directionRef.current.dx;
    positionRef.current.y += directionRef.current.dy;

    if (positionRef.current.x <= 0) {
      positionRef.current.x = 0;
      directionRef.current.dx = -directionRef.current.dx;
    } else if (positionRef.current.x + 50 >= screenWidthRef.current) {
      positionRef.current.x = screenWidthRef.current - 50;
      directionRef.current.dx = -directionRef.current.dx;
    }

    if (positionRef.current.y <= 0) {
      positionRef.current.y = 0;
      directionRef.current.dy = -directionRef.current.dy;
    } else if (positionRef.current.y + 50 >= screenHeightRef.current) {
      positionRef.current.y = screenHeightRef.current - 50;
      directionRef.current.dy = -directionRef.current.dy;
    }

    setCurrentX(positionRef.current.y);
    setCurrentY(positionRef.current.x);
  };

  React.useEffect(() => {
    const handleResize = () => {
      screenWidthRef.current = window.innerWidth;
      screenHeightRef.current = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(updatePosition, 100);

    return () => clearInterval(timer);
  }, [isBouncing]);

  React.useEffect(() => {
    if (isBouncing) {
      const colorTimer = setInterval(() => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setColor(randomColor);
      }, 1000);

      return () => clearInterval(colorTimer);
    }
  }, [isBouncing]);

  return (
    <div
      className={`${styles.kdIcon} ${isBouncing ? styles.bouncing : ''}`}
      style={{
        top: `${currentX}px`,
        left: `${currentY}px`,
      }}
    >
      <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m350 72.137c-183.55 0-332.88 158.86-332.88 347.86h21c0-175 139.91-326.86 311.88-326.86s311.88 151.86 311.88 326.86h21c0-189-149.32-347.86-332.88-347.86z"
          fill="black"
        />
        <path
          d="m484.7 423.79c-45.387 0-83.496 32.684-94.023 76.609-13.715-7.4141-29.008-11.445-44.645-11.445-14.035 0-27.707 3.1484-40.27 9.1289-11.289-42.75-48.852-74.289-93.441-74.289-53.488 0-97 45.324-97 101.03s43.512 101.03 97 101.03c53.488 0 97-45.324 97-101.03 0-1.6094-0.16016-3.1836-0.23047-4.7812 11.25-6.6094 23.91-10.078 36.945-10.078 14.883 0 29.406 4.6836 41.742 13.223-0.015625 0.55469-0.085938 1.0859-0.085938 1.6367 0 55.707 43.52 101.03 97.008 101.03s96.992-45.324 96.992-101.03c-0.003906-55.711-43.504-101.04-96.992-101.04zm-272.38 181.05c-41.91 0-76-35.902-76-80.031s34.098-80.031 76-80.031 76 35.902 76 80.031-34.09 80.031-76 80.031zm272.38 0c-41.91 0-76.008-35.902-76.008-80.031s34.098-80.031 76.008-80.031c41.902 0 75.992 35.902 75.992 80.031s-34.09 80.031-75.992 80.031z"
          fill={color}
        />
      </svg>
    </div>
  );
}

import type { FridgeTheme } from '../types';
import { applyRandomizedBackground } from '../lib/backgroundUtils';

/**
 * Default gradient configurations for fridge themes
 */
const getDefaultGradients = () => {
  const root = document.documentElement;
  return [
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-1').trim() || 'rgba(34, 139, 34, 0.15)',
      size: '80px 80px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-2').trim() || 'rgba(50, 205, 50, 0.601)',
      size: '60px 60px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-3').trim() || 'rgba(0, 128, 0, 0.1)',
      size: '90px 90px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-4').trim() || 'rgba(34, 139, 34, 0.585)',
      size: '50px 50px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-5').trim() || 'rgba(50, 205, 50, 0.12)',
      size: '70px 70px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-6').trim() || 'rgba(0, 128, 0, 0.281)',
      size: '80px 80px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-7').trim() || 'rgba(34, 139, 34, 0.1)',
      size: '65px 65px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-8').trim() || 'rgba(50, 205, 50, 0.666)',
      size: '55px 55px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-9').trim() || 'rgba(34, 139, 34, 0.08)',
      size: '75px 75px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-10').trim() || 'rgba(50, 205, 50, 0.05)',
      size: '85px 85px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-11').trim() || 'rgba(0, 128, 0, 0.15)',
      size: '45px 45px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-12').trim() || 'rgba(34, 139, 34, 0.25)',
      size: '95px 95px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-13').trim() || 'rgba(50, 205, 50, 0.09)',
      size: '60px 60px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-14').trim() || 'rgba(0, 128, 0, 0.12)',
      size: '70px 70px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-15').trim() || 'rgba(34, 139, 34, 0.18)',
      size: '50px 50px',
    },
    {
      color: getComputedStyle(root).getPropertyValue('--splotch-color-16').trim() || 'rgba(50, 205, 50, 0.07)',
      size: '80px 80px',
    },
    {
      color:
        getComputedStyle(root).getPropertyValue('--splotch-linear').trim() ||
        'linear-gradient(135deg, rgba(34, 139, 34, 0.05), rgba(50, 205, 50, 0.05))',
      size: '100% 100%',
      isLinear: true,
    },
  ];
};

export const applyFridgeTheme = (theme: FridgeTheme) => {
  const root = document.documentElement;
  switch (theme) {
    case 'red':
      root.style.setProperty('--fridge-body-background', '#ff4444');
      root.style.setProperty('--fridge-border', '#cc0000');
      root.style.setProperty('--fridge-background-primary', '#ffe6e6');
      root.style.setProperty('--fridge-shadow', '#cc0000');

      root.style.setProperty('--splotch-color-1', 'rgba(255, 68, 68, 0.15)');
      root.style.setProperty('--splotch-color-2', 'rgba(255, 102, 102, 0.601)');
      root.style.setProperty('--splotch-color-3', 'rgba(255, 0, 0, 0.1)');
      root.style.setProperty('--splotch-color-4', 'rgba(255, 68, 68, 0.585)');
      root.style.setProperty('--splotch-color-5', 'rgba(255, 102, 102, 0.12)');
      root.style.setProperty('--splotch-color-6', 'rgba(255, 0, 0, 0.281)');
      root.style.setProperty('--splotch-color-7', 'rgba(255, 68, 68, 0.1)');
      root.style.setProperty('--splotch-color-8', 'rgba(255, 102, 102, 0.666)');
      root.style.setProperty('--splotch-color-9', 'rgba(255, 68, 68, 0.08)');
      root.style.setProperty('--splotch-color-10', 'rgba(255, 102, 102, 0.05)');
      root.style.setProperty('--splotch-color-11', 'rgba(255, 0, 0, 0.15)');
      root.style.setProperty('--splotch-color-12', 'rgba(255, 68, 68, 0.25)');
      root.style.setProperty('--splotch-color-13', 'rgba(255, 102, 102, 0.09)');
      root.style.setProperty('--splotch-color-14', 'rgba(255, 0, 0, 0.12)');
      root.style.setProperty('--splotch-color-15', 'rgba(255, 68, 68, 0.18)');
      root.style.setProperty('--splotch-color-16', 'rgba(255, 102, 102, 0.07)');
      root.style.setProperty(
        '--splotch-linear',
        'linear-gradient(135deg, rgba(255, 68, 68, 0.05), rgba(255, 102, 102, 0.05))'
      );
      break;
    case 'orange':
      root.style.setProperty('--fridge-body-background', '#f57b34');
      root.style.setProperty('--fridge-border', '#ff8c00');
      root.style.setProperty('--fridge-background-primary', '#fff4e6');
      root.style.setProperty('--fridge-shadow', '#ff8c00');

      root.style.setProperty('--splotch-color-1', 'rgba(245, 123, 52, 0.15)');
      root.style.setProperty('--splotch-color-2', 'rgba(255, 140, 0, 0.601)');
      root.style.setProperty('--splotch-color-3', 'rgba(255, 165, 0, 0.1)');
      root.style.setProperty('--splotch-color-4', 'rgba(245, 123, 52, 0.585)');
      root.style.setProperty('--splotch-color-5', 'rgba(255, 140, 0, 0.12)');
      root.style.setProperty('--splotch-color-6', 'rgba(255, 165, 0, 0.281)');
      root.style.setProperty('--splotch-color-7', 'rgba(245, 123, 52, 0.1)');
      root.style.setProperty('--splotch-color-8', 'rgba(255, 140, 0, 0.666)');
      root.style.setProperty('--splotch-color-9', 'rgba(245, 123, 52, 0.08)');
      root.style.setProperty('--splotch-color-10', 'rgba(255, 140, 0, 0.05)');
      root.style.setProperty('--splotch-color-11', 'rgba(255, 165, 0, 0.15)');
      root.style.setProperty('--splotch-color-12', 'rgba(245, 123, 52, 0.25)');
      root.style.setProperty('--splotch-color-13', 'rgba(255, 140, 0, 0.09)');
      root.style.setProperty('--splotch-color-14', 'rgba(255, 165, 0, 0.12)');
      root.style.setProperty('--splotch-color-15', 'rgba(245, 123, 52, 0.18)');
      root.style.setProperty('--splotch-color-16', 'rgba(255, 140, 0, 0.07)');
      root.style.setProperty(
        '--splotch-linear',
        'linear-gradient(135deg, rgba(245, 123, 52, 0.05), rgba(255, 140, 0, 0.05))'
      );
      break;
    case 'blue':
      root.style.setProperty('--fridge-body-background', '#4444ff');
      root.style.setProperty('--fridge-border', '#0000cc');
      root.style.setProperty('--fridge-background-primary', '#e6e6ff');
      root.style.setProperty('--fridge-shadow', '#0000cc');

      root.style.setProperty('--splotch-color-1', 'rgba(68, 68, 255, 0.15)');
      root.style.setProperty('--splotch-color-2', 'rgba(0, 0, 204, 0.601)');
      root.style.setProperty('--splotch-color-3', 'rgba(0, 0, 255, 0.1)');
      root.style.setProperty('--splotch-color-4', 'rgba(68, 68, 255, 0.585)');
      root.style.setProperty('--splotch-color-5', 'rgba(0, 0, 204, 0.12)');
      root.style.setProperty('--splotch-color-6', 'rgba(0, 0, 255, 0.281)');
      root.style.setProperty('--splotch-color-7', 'rgba(68, 68, 255, 0.1)');
      root.style.setProperty('--splotch-color-8', 'rgba(0, 0, 204, 0.666)');
      root.style.setProperty('--splotch-color-9', 'rgba(68, 68, 255, 0.08)');
      root.style.setProperty('--splotch-color-10', 'rgba(0, 0, 204, 0.05)');
      root.style.setProperty('--splotch-color-11', 'rgba(0, 0, 255, 0.15)');
      root.style.setProperty('--splotch-color-12', 'rgba(68, 68, 255, 0.25)');
      root.style.setProperty('--splotch-color-13', 'rgba(0, 0, 204, 0.09)');
      root.style.setProperty('--splotch-color-14', 'rgba(0, 0, 255, 0.12)');
      root.style.setProperty('--splotch-color-15', 'rgba(68, 68, 255, 0.18)');
      root.style.setProperty('--splotch-color-16', 'rgba(0, 0, 204, 0.07)');
      root.style.setProperty(
        '--splotch-linear',
        'linear-gradient(135deg, rgba(68, 68, 255, 0.05), rgba(0, 0, 204, 0.05))'
      );
      break;
    case 'yellow':
      root.style.setProperty('--fridge-body-background', '#ffff44');
      root.style.setProperty('--fridge-border', '#cccc00');
      root.style.setProperty('--fridge-background-primary', '#ffffe6');
      root.style.setProperty('--fridge-shadow', '#cccc00');

      root.style.setProperty('--splotch-color-1', 'rgba(255, 255, 68, 0.15)');
      root.style.setProperty('--splotch-color-2', 'rgba(204, 204, 0, 0.601)');
      root.style.setProperty('--splotch-color-3', 'rgba(255, 255, 0, 0.1)');
      root.style.setProperty('--splotch-color-4', 'rgba(255, 255, 68, 0.585)');
      root.style.setProperty('--splotch-color-5', 'rgba(204, 204, 0, 0.12)');
      root.style.setProperty('--splotch-color-6', 'rgba(255, 255, 0, 0.281)');
      root.style.setProperty('--splotch-color-7', 'rgba(255, 255, 68, 0.1)');
      root.style.setProperty('--splotch-color-8', 'rgba(204, 204, 0, 0.666)');
      root.style.setProperty('--splotch-color-9', 'rgba(255, 255, 68, 0.08)');
      root.style.setProperty('--splotch-color-10', 'rgba(204, 204, 0, 0.05)');
      root.style.setProperty('--splotch-color-11', 'rgba(255, 255, 0, 0.15)');
      root.style.setProperty('--splotch-color-12', 'rgba(255, 255, 68, 0.25)');
      root.style.setProperty('--splotch-color-13', 'rgba(204, 204, 0, 0.09)');
      root.style.setProperty('--splotch-color-14', 'rgba(255, 255, 0, 0.12)');
      root.style.setProperty('--splotch-color-15', 'rgba(255, 255, 68, 0.18)');
      root.style.setProperty('--splotch-color-16', 'rgba(204, 204, 0, 0.07)');
      root.style.setProperty(
        '--splotch-linear',
        'linear-gradient(135deg, rgba(255, 255, 68, 0.05), rgba(204, 204, 0, 0.05))'
      );
      break;
    case 'green':
      root.style.setProperty('--fridge-body-background', '#44ff44');
      root.style.setProperty('--fridge-border', '#00cc00');
      root.style.setProperty('--fridge-background-primary', '#e6ffe6');
      root.style.setProperty('--fridge-shadow', '#00cc00');

      root.style.setProperty('--splotch-color-1', 'rgba(34, 139, 34, 0.15)');
      root.style.setProperty('--splotch-color-2', 'rgba(50, 205, 50, 0.601)');
      root.style.setProperty('--splotch-color-3', 'rgba(0, 128, 0, 0.1)');
      root.style.setProperty('--splotch-color-4', 'rgba(34, 139, 34, 0.585)');
      root.style.setProperty('--splotch-color-5', 'rgba(50, 205, 50, 0.12)');
      root.style.setProperty('--splotch-color-6', 'rgba(0, 128, 0, 0.281)');
      root.style.setProperty('--splotch-color-7', 'rgba(34, 139, 34, 0.1)');
      root.style.setProperty('--splotch-color-8', 'rgba(50, 205, 50, 0.666)');
      root.style.setProperty('--splotch-color-9', 'rgba(34, 139, 34, 0.08)');
      root.style.setProperty('--splotch-color-10', 'rgba(50, 205, 50, 0.05)');
      root.style.setProperty('--splotch-color-11', 'rgba(0, 128, 0, 0.15)');
      root.style.setProperty('--splotch-color-12', 'rgba(34, 139, 34, 0.25)');
      root.style.setProperty('--splotch-color-13', 'rgba(50, 205, 50, 0.09)');
      root.style.setProperty('--splotch-color-14', 'rgba(0, 128, 0, 0.12)');
      root.style.setProperty('--splotch-color-15', 'rgba(34, 139, 34, 0.18)');
      root.style.setProperty('--splotch-color-16', 'rgba(50, 205, 50, 0.07)');
      root.style.setProperty(
        '--splotch-linear',
        'linear-gradient(135deg, rgba(34, 139, 34, 0.05), rgba(50, 205, 50, 0.05))'
      );
      break;
    default:
      root.style.setProperty('--fridge-body-background', '#f57b34');
      root.style.setProperty('--fridge-border', '#ff8c00');
      root.style.setProperty('--fridge-background-primary', '#fff4e6');
      root.style.setProperty('--fridge-shadow', '#ff8c00');

      root.style.setProperty('--splotch-color-1', 'rgba(34, 139, 34, 0.15)');
      root.style.setProperty('--splotch-color-2', 'rgba(50, 205, 50, 0.601)');
      root.style.setProperty('--splotch-color-3', 'rgba(0, 128, 0, 0.1)');
      root.style.setProperty('--splotch-color-4', 'rgba(34, 139, 34, 0.585)');
      root.style.setProperty('--splotch-color-5', 'rgba(50, 205, 50, 0.12)');
      root.style.setProperty('--splotch-color-6', 'rgba(0, 128, 0, 0.281)');
      root.style.setProperty('--splotch-color-7', 'rgba(34, 139, 34, 0.1)');
      root.style.setProperty('--splotch-color-8', 'rgba(50, 205, 50, 0.666)');
      root.style.setProperty('--splotch-color-9', 'rgba(34, 139, 34, 0.08)');
      root.style.setProperty('--splotch-color-10', 'rgba(50, 205, 50, 0.05)');
      root.style.setProperty('--splotch-color-11', 'rgba(0, 128, 0, 0.15)');
      root.style.setProperty('--splotch-color-12', 'rgba(34, 139, 34, 0.25)');
      root.style.setProperty('--splotch-color-13', 'rgba(50, 205, 50, 0.09)');
      root.style.setProperty('--splotch-color-14', 'rgba(0, 128, 0, 0.12)');
      root.style.setProperty('--splotch-color-15', 'rgba(34, 139, 34, 0.18)');
      root.style.setProperty('--splotch-color-16', 'rgba(50, 205, 50, 0.07)');
      root.style.setProperty(
        '--splotch-linear',
        'linear-gradient(135deg, rgba(34, 139, 34, 0.05), rgba(50, 205, 50, 0.05))'
      );
      break;
  }

  // Apply randomized background using the shared gradients function
  applyRandomizedBackground(getDefaultGradients());
};

export const randomizeBackground = () => {
  const gradients = getDefaultGradients();

  const radialGradients = gradients.slice(0, 16).map((g) => {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    return `radial-gradient(circle at ${x}% ${y}%, ${g.color} 0%, transparent 50%)`;
  });

  const linear = gradients[16].color;
  const backgroundImage = [...radialGradients, linear].join(', ');
  const backgroundSize = gradients.map((g) => g.size).join(', ');
  const backgroundPosition = gradients
    .map(() => `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`)
    .join(', ');

  document.body.style.backgroundImage = backgroundImage;
  document.body.style.backgroundSize = backgroundSize;
  document.body.style.backgroundPosition = backgroundPosition;
  document.body.style.backgroundRepeat = 'no-repeat';
};

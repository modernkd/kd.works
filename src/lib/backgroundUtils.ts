/**
 * Background generation utilities for creating dynamic visual effects
 */

/**
 * Generates random radial gradients for background effects
 * @param gradients - Array of gradient configurations
 * @returns Array of CSS radial gradient strings
 */
export const generateRadialGradients = (gradients: Array<{ color: string; size: string }>) => {
  return gradients.slice(0, 16).map((g) => {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    return `radial-gradient(circle at ${x}% ${y}%, ${g.color} 0%, transparent 50%)`;
  });
};

/**
 * Generates random background positions for gradients
 * @param gradients - Array of gradient configurations
 * @returns Array of CSS position strings
 */
export const generateBackgroundPositions = (gradients: Array<{ color: string; size: string }>) => {
  return gradients.map(() => `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`);
};

/**
 * Applies randomized background styling to the document body
 * @param gradients - Array of gradient configurations
 */
export const applyRandomizedBackground = (gradients: Array<{ color: string; size: string; isLinear?: boolean }>) => {
  const radialGradients = generateRadialGradients(gradients);
  const linear = gradients.find((g) => g.isLinear)?.color || gradients[16]?.color;

  const backgroundImage = [...radialGradients, linear].join(', ');
  const backgroundSize = gradients.map((g) => g.size).join(', ');
  const backgroundPosition = generateBackgroundPositions(gradients);

  document.body.style.backgroundImage = backgroundImage;
  document.body.style.backgroundSize = backgroundSize;
  document.body.style.backgroundPosition = backgroundPosition.join(', ');
  document.body.style.backgroundRepeat = 'no-repeat';
};

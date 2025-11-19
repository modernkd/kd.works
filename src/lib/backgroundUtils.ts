/**
 * Applies a randomized background pattern to the document body
 * @param gradients - Array of gradient configurations
 */
export function applyRandomizedBackground(
  gradients: Array<{
    color: string;
    size: string;
    isLinear?: boolean;
  }>
): void {
  const radialGradients = gradients.slice(0, 16).map((g) => {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    return `radial-gradient(circle at ${x}% ${y}%, ${g.color} 0%, transparent 50%)`;
  });

  const linear = gradients[16]?.color || 'linear-gradient(135deg, rgba(34, 139, 34, 0.05), rgba(50, 205, 50, 0.05))';
  const backgroundImage = [...radialGradients, linear].join(', ');
  const backgroundSize = gradients.map((g) => g.size).join(', ');
  const backgroundPosition = gradients
    .map(() => `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`)
    .join(', ');

  document.body.style.backgroundImage = backgroundImage;
  document.body.style.backgroundSize = backgroundSize;
  document.body.style.backgroundPosition = backgroundPosition;
  document.body.style.backgroundRepeat = 'no-repeat';
}

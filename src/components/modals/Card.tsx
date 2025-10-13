import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'overlay' | 'form';
  size?: 'sm' | 'md' | 'lg';
  centered?: boolean;
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  centered = false,
}: CardProps) {
  const cardClass = [styles.card, styles[variant], styles[size], centered ? styles.centered : '', className]
    .filter(Boolean)
    .join(' ');

  return <div className={cardClass}>{children}</div>;
}

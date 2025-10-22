import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import ContactFormWrapper from '../../components/modals/ContactFormWrapper';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/Modals/ContactForm',
  component: ContactFormWrapper,
  decorators: [
    (Story, context) => {
      const storyTheme = context.parameters?.theme || context.globals?.theme || 'light';
      return (
        <ThemeProvider initialTheme={storyTheme}>
          <HelmetProvider>
            <BrowserRouter>
              <Story />
            </BrowserRouter>
          </HelmetProvider>
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
} satisfies Meta<typeof ContactFormWrapper>;

export default meta;
type Story = StoryObj<typeof ContactFormWrapper>;

export const Default: Story = {
  args: {
    isVisible: true,
    onClose: () => {},
  },
  globals: {
    theme: 'light',
  },
};

export const DarkMode: Story = {
  args: {
    ...Default.args,
  },
  globals: {
    theme: 'dark',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Hidden: Story = {
  args: {
    ...Default.args,
    isVisible: false,
  },
  globals: {
    theme: 'light',
  },
  render: (args) => {
    const [isVisible, setIsVisible] = useState(args.isVisible);
    const { t } = useTranslation();
    return (
      <>
        <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
          <div
            onClick={() => setIsVisible(true)}
            style={{
              height: '4rem',
              width: '4rem',
              backgroundColor: '#fef3c7',
              border: '2px solid #f59e0b',
              borderRadius: '5px',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '9px',
              fontWeight: 'bold',
              color: '#333',
              textAlign: 'center',
              padding: '3px',
              transform: 'rotate(-5deg)',
              transition: 'transform 0.2s ease-in-out',
              fontFamily: "'Comic Sans MS', cursive, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(-5deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-5deg)';
            }}
          >
            {t('stickyNoteText')}
          </div>
        </div>
        <ContactFormWrapper {...args} isVisible={isVisible} onClose={() => setIsVisible(false)} />
        {isVisible && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 4,
            }}
            onClick={() => setIsVisible(false)}
          />
        )}
      </>
    );
  },
};

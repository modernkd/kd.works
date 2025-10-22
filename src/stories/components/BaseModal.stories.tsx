import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import BaseModal from '../../components/modals/BaseModal';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/Modals/BaseModal',
  component: BaseModal,
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
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the modal is open or closed',
    },
    onClose: {
      action: 'closed',
      description: 'Callback fired when the modal is closed',
    },
  },
} satisfies Meta<typeof BaseModal>;

export default meta;
type Story = StoryObj<typeof BaseModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Sample Modal',
    onClose: () => {},
    children: <div style={{ padding: '1rem' }}>Modal content goes here</div>,
  },
  globals: {
    theme: 'light',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <>
        <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
        </div>
        <BaseModal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};

export const WithFooter: Story = {
  args: {
    ...Default.args,
    footer: <button onClick={() => {}}>Action Button</button>,
  },
  globals: {
    theme: 'light',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <>
        <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
        </div>
        <BaseModal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
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
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <>
        <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
        </div>
        <BaseModal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};

export const Closed: Story = {
  args: {
    ...Default.args,
    isOpen: false,
  },
  globals: {
    theme: 'light',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const { t } = useTranslation();
    return (
      <>
        <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
          <div
            onClick={() => setIsOpen(true)}
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
        <BaseModal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};

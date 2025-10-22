import type { Meta, StoryObj } from '@storybook/react-vite';
import Message from '../../components/cowbell/Message';

const meta = {
  title: 'Components/Cowbell/Message',
  component: Message,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof Message>;

export const JoinMessage: Story = {
  args: {
    text: 'Alice joined the room',
    type: 'join',
  },
};

export const LeaveMessage: Story = {
  args: {
    text: 'Bob left the room',
    type: 'leave',
  },
};

export const SoundMessage: Story = {
  args: {
    text: 'Charlie played 🎵',
    type: 'sound',
  },
};

export const CustomSoundMessage: Story = {
  args: {
    text: 'David added custom sound 🎸',
    type: 'custom',
  },
};

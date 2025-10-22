export type FridgeTheme = 'red' | 'orange' | 'blue' | 'yellow' | 'green';

export interface QueuedSubmission {
  id: string;
  data: {
    name: string;
    email: string;
    title: string;
    message: string;
  };
  timestamp: number;
}

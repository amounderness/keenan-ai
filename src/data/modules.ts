export type ThemeID = 'University' | 'Home' | 'Work' | 'Social' | 'Relationship' | 'Personal' | 'Hobbies';

export interface Theme {
  id: ThemeID;
  label: string;
  color: string;
  description: string;
}

export interface Task {
  id: string;
  description: string;
  isRepeating: boolean;
}

export interface Module {
  id: string;
  themeId: ThemeID;
  name: string;
  suggestedDuration: number;
  tasks: Task[];
  isInbox?: boolean;
}

export const THEMES: Theme[] = [
  { id: 'University', label: 'University', color: '#3b82f6', description: 'Academic and portfolio work.' },
  { id: 'Home', label: 'Home', color: '#10b981', description: 'Chores and house maintenance.' },
  { id: 'Work', label: 'Work', color: '#f59e0b', description: 'Shifts and expenses.' },
  { id: 'Social', label: 'Social', color: '#8b5cf6', description: 'Meet-ups and calls.' },
  { id: 'Relationship', label: 'Relationship', color: '#ec4899', description: 'Shared activities and dates.' },
  { id: 'Personal', label: 'Personal', color: '#6366f1', description: 'Self-care and downtime.' },
  { id: 'Hobbies', label: 'Hobbies', color: '#64748b', description: 'Research and gaming.' },
];

// Helper to ensure every theme has an Inbox module
export const getInitialModules = (): Module[] => {
  return THEMES.map(theme => ({
    id: `inbox-${theme.id.toLowerCase()}`,
    themeId: theme.id,
    name: `${theme.label} Inbox`,
    suggestedDuration: 30,
    tasks: [],
    isInbox: true
  }));
};
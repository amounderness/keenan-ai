export type ThemeID = 'University' | 'Home' | 'Work' | 'Social' | 'Relationship' | 'Personal' | 'Hobbies';

export interface Theme {
  id: ThemeID;
  label: string;
  color: string;
  textColor: string;
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
  tasks: Task[];
  isInbox?: boolean;
}

export const THEMES: Theme[] = [
  { id: 'University', label: 'University', color: '#E1EFFE', textColor: '#1E429F', description: 'Academic and portfolio work.' },
  { id: 'Home', label: 'Home', color: '#DEF7EC', textColor: '#03543F', description: 'Chores and house maintenance.' },
  { id: 'Work', label: 'Work', color: '#FEF3C7', textColor: '#92400E', description: 'Shifts and expenses.' },
  { id: 'Social', label: 'Social', color: '#EDEBFE', textColor: '#5521B5', description: 'Meet-ups and calls.' },
  { id: 'Relationship', label: 'Relationship', color: '#FCE8F3', textColor: '#99154B', description: 'Shared activities and dates.' },
  { id: 'Personal', label: 'Personal', color: '#E1E7FF', textColor: '#3730A3', description: 'Self-care and downtime.' },
  { id: 'Hobbies', label: 'Hobbies', color: '#F3F4F6', textColor: '#1F2937', description: 'Research and gaming.' },
];

export const getInitialModules = (): Module[] => {
  return THEMES.map(theme => ({
    id: `inbox-${theme.id.toLowerCase()}`,
    themeId: theme.id,
    name: `${theme.label} Inbox`,
    tasks: [],
    isInbox: true
  }));
};
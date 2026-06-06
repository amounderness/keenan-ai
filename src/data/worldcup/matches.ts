// src/data/worldcup/matches.ts
import type { Group } from './teams';

export type Stage = 'group' | 'round_of_32' | 'round_of_16' | 'quarter_final' | 'semi_final' | 'third_place' | 'final';
export type MatchStatus = 'scheduled' | 'live' | 'finished';

// Advanced Stat Tracking
export interface GoalEvent {
  minute: number;
  teamCode: string;
  scorer: string;
  assistant?: string;
  isPenalty?: boolean;
  isOwnGoal?: boolean;
}

export interface MatchTimeline {
  goals: GoalEvent[];
  cleanSheets: string[]; // E.g., ['ESP'] if Spain conceded 0 goals
  isComeback?: boolean; // Flag if a team won from behind
  shootoutWinner?: string;
}

export interface Match {
  id: string;
  stage: Stage;
  group?: Group;
  kickoffUtc: string;
  homeTeamCode: string; // Will use 'W_A' (Winner A) or '3_BCDE' (3rd Place B/C/D/E) for knockouts
  awayTeamCode: string;
  homeGoals?: number;
  awayGoals?: number;
  homePenalties?: number;
  awayPenalties?: number;
  isExtraTime?: boolean;
  status: MatchStatus;
  timeline?: MatchTimeline; // Enables granular statistics engines later
}

// Initialise the Database (Group Stage + Knockout Structure)
export const matches: Match[] = [
  // --- GROUP STAGE ---
  {
    id: 'G01', stage: 'group', group: 'A', kickoffUtc: '2026-06-11T20:00:00Z',
    homeTeamCode: 'MEX', awayTeamCode: 'RSA', status: 'scheduled'
  },
  {
    id: 'G02', stage: 'group', group: 'A', kickoffUtc: '2026-06-12T15:00:00Z',
    homeTeamCode: 'KOR', awayTeamCode: 'CZE', status: 'scheduled'
  },
// --- ROUND OF 32 (Matches 73-88) ---
  { id: 'M73', stage: 'round_of_32', kickoffUtc: '2026-06-28T00:00:00Z', 
    homeTeamCode: '1A', awayTeamCode: '3CDEF', status: 'scheduled' },
  { id: 'M74', stage: 'round_of_32', kickoffUtc: '2026-06-28T00:00:00Z', 
    homeTeamCode: '2A', awayTeamCode: '2B', status: 'scheduled' },
  { id: 'M75', stage: 'round_of_32', kickoffUtc: '2026-06-29T00:00:00Z', 
    homeTeamCode: '1E', awayTeamCode: '3ABCD', status: 'scheduled' },
  { id: 'M76', stage: 'round_of_32', kickoffUtc: '2026-06-29T00:00:00Z', 
    homeTeamCode: '1F', awayTeamCode: '2C', status: 'scheduled' },
  { id: 'M77', stage: 'round_of_32', kickoffUtc: '2026-06-30T00:00:00Z', 
    homeTeamCode: '1C', awayTeamCode: '3ABEF', status: 'scheduled' },
  { id: 'M78', stage: 'round_of_32', kickoffUtc: '2026-06-30T00:00:00Z', 
    homeTeamCode: '2E', awayTeamCode: '2F', status: 'scheduled' },
  { id: 'M79', stage: 'round_of_32', kickoffUtc: '2026-07-01T00:00:00Z', 
    homeTeamCode: '1I', awayTeamCode: '3CDEF', status: 'scheduled' },
  { id: 'M80', stage: 'round_of_32', kickoffUtc: '2026-07-01T00:00:00Z', 
    homeTeamCode: '2I', awayTeamCode: '2J', status: 'scheduled' },
  { id: 'M81', stage: 'round_of_32', kickoffUtc: '2026-07-02T00:00:00Z', 
    homeTeamCode: '1B', awayTeamCode: '3EFGI', status: 'scheduled' },
  { id: 'M82', stage: 'round_of_32', kickoffUtc: '2026-07-02T00:00:00Z', 
    homeTeamCode: '1G', awayTeamCode: '3ABCD', status: 'scheduled' },
  { id: 'M83', stage: 'round_of_32', kickoffUtc: '2026-07-03T00:00:00Z', 
    homeTeamCode: '1D', awayTeamCode: '3BEFG', status: 'scheduled' },
  { id: 'M84', stage: 'round_of_32', kickoffUtc: '2026-07-03T00:00:00Z', 
    homeTeamCode: '2G', awayTeamCode: '2H', status: 'scheduled' },
  { id: 'M85', stage: 'round_of_32', kickoffUtc: '2026-07-04T00:00:00Z', 
    homeTeamCode: '1H', awayTeamCode: '3JKLM', status: 'scheduled' },
  { id: 'M86', stage: 'round_of_32', kickoffUtc: '2026-07-04T00:00:00Z', 
    homeTeamCode: '2D', awayTeamCode: '2C', status: 'scheduled' },
  { id: 'M87', stage: 'round_of_32', kickoffUtc: '2026-07-05T00:00:00Z', 
    homeTeamCode: '1K', awayTeamCode: '3ABEF', status: 'scheduled' },
  { id: 'M88', stage: 'round_of_32', kickoffUtc: '2026-07-05T00:00:00Z', 
    homeTeamCode: '1L', awayTeamCode: '3GHJK', status: 'scheduled' },

  // --- ROUND OF 16 (Matches 89-96) ---
  { id: 'M89', stage: 'round_of_16', kickoffUtc: '2026-07-04T00:00:00Z', 
    homeTeamCode: 'W73', awayTeamCode: 'W75', status: 'scheduled' },
  { id: 'M90', stage: 'round_of_16', kickoffUtc: '2026-07-04T00:00:00Z', 
    homeTeamCode: 'W74', awayTeamCode: 'W76', status: 'scheduled' },
  { id: 'M91', stage: 'round_of_16', kickoffUtc: '2026-07-05T00:00:00Z', 
    homeTeamCode: 'W77', awayTeamCode: 'W79', status: 'scheduled' },
  { id: 'M92', stage: 'round_of_16', kickoffUtc: '2026-07-05T00:00:00Z', 
    homeTeamCode: 'W78', awayTeamCode: 'W80', status: 'scheduled' },
  { id: 'M93', stage: 'round_of_16', kickoffUtc: '2026-07-06T00:00:00Z', 
    homeTeamCode: 'W81', awayTeamCode: 'W83', status: 'scheduled' },
  { id: 'M94', stage: 'round_of_16', kickoffUtc: '2026-07-06T00:00:00Z', 
    homeTeamCode: 'W82', awayTeamCode: 'W84', status: 'scheduled' },
  { id: 'M95', stage: 'round_of_16', kickoffUtc: '2026-07-07T00:00:00Z', 
    homeTeamCode: 'W85', awayTeamCode: 'W87', status: 'scheduled' },
  { id: 'M96', stage: 'round_of_16', kickoffUtc: '2026-07-07T00:00:00Z', 
    homeTeamCode: 'W86', awayTeamCode: 'W88', status: 'scheduled' },

  // --- QUARTER FINALS (Matches 97-100) ---
  { id: 'M97', stage: 'quarter_final', kickoffUtc: '2026-07-09T00:00:00Z', 
    homeTeamCode: 'W89', awayTeamCode: 'W91', status: 'scheduled' },
  { id: 'M98', stage: 'quarter_final', kickoffUtc: '2026-07-09T00:00:00Z', 
    homeTeamCode: 'W90', awayTeamCode: 'W92', status: 'scheduled' },
  { id: 'M99', stage: 'quarter_final', kickoffUtc: '2026-07-10T00:00:00Z', 
    homeTeamCode: 'W93', awayTeamCode: 'W95', status: 'scheduled' },
  { id: 'M100', stage: 'quarter_final', kickoffUtc: '2026-07-10T00:00:00Z', 
    homeTeamCode: 'W94', awayTeamCode: 'W96', status: 'scheduled' },

  // --- SEMI FINALS (Matches 101-102) ---
  { id: 'M101', stage: 'semi_final', kickoffUtc: '2026-07-14T00:00:00Z', 
    homeTeamCode: 'W97', awayTeamCode: 'W99', status: 'scheduled' },
  { id: 'M102', stage: 'semi_final', kickoffUtc: '2026-07-15T00:00:00Z', 
    homeTeamCode: 'W98', awayTeamCode: 'W100', status: 'scheduled' },

  // --- THIRD PLACE (Match 103) ---
  { id: 'M103', stage: 'third_place', kickoffUtc: '2026-07-18T00:00:00Z', 
    homeTeamCode: 'L101', awayTeamCode: 'L102', status: 'scheduled' },

  // --- FINAL (Match 104) ---
  { id: 'M104', stage: 'final', kickoffUtc: '2026-07-19T00:00:00Z', 
    homeTeamCode: 'W101', awayTeamCode: 'W102', status: 'scheduled' }
];

// --- Helpers ---
export function getMatchesByGroup(group: Group): Match[] {
  return matches.filter(match => match.group === group);
}

export function getMatchesByTeam(teamCode: string): Match[] {
  return matches.filter(match => match.homeTeamCode === teamCode || match.awayTeamCode === teamCode);
}
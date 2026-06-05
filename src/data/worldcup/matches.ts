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
  // (You will populate the rest of the 72 group stage matches here as the real schedule demands)
  
  // --- ROUND OF 32 (Placeholders) ---
  // Using official 2026 progression maths
  {
    id: 'R32_1', stage: 'round_of_32', kickoffUtc: '2026-06-28T16:00:00Z',
    homeTeamCode: 'W_A', awayTeamCode: '3_CDEF', status: 'scheduled'
  },
  {
    id: 'R32_2', stage: 'round_of_32', kickoffUtc: '2026-06-28T20:00:00Z',
    homeTeamCode: 'R_A', awayTeamCode: 'R_B', status: 'scheduled'
  },
  // --- ROUND OF 16 ---
  {
    id: 'R16_1', stage: 'round_of_16', kickoffUtc: '2026-07-04T16:00:00Z',
    homeTeamCode: 'W_R32_1', awayTeamCode: 'W_R32_2', status: 'scheduled'
  }
  // (Add further knockouts linearly through to the Final)
];

// --- Helpers ---
export function getMatchesByGroup(group: Group): Match[] {
  return matches.filter(match => match.group === group);
}

export function getMatchesByTeam(teamCode: string): Match[] {
  return matches.filter(match => match.homeTeamCode === teamCode || match.awayTeamCode === teamCode);
}
// src/data/worldcup/matches.ts
import type { Group } from './teams';

export type Stage = 'group' | 'round_of_32' | 'round_of_16' | 'quarter_final' | 'semi_final' | 'third_place' | 'final';
export type MatchStatus = 'scheduled' | 'live' | 'finished';

export interface Match {
  id: string;
  stage: Stage;
  group?: Group;
  kickoffUtc: string; // ISO 8601 string, e.g., '2026-06-11T20:00:00Z'
  homeTeamCode: string;
  awayTeamCode: string;
  homeGoals?: number;
  awayGoals?: number;
  
  // Optional fields for custom sweepstake scoring
  homePenalties?: number;
  awayPenalties?: number;
  isExtraTime?: boolean;
  
  status: MatchStatus;
}

export const matches: Match[] = [
  // Example: A scheduled match
  {
    id: 'M01',
    stage: 'group',
    group: 'A',
    kickoffUtc: '2026-06-11T20:00:00Z',
    homeTeamCode: 'MEX', // Keenan
    awayTeamCode: 'RSA', // Poppie
    status: 'scheduled'
  },
  // Example: A finished match
  {
    id: 'M02',
    stage: 'group',
    group: 'A',
    kickoffUtc: '2026-06-12T15:00:00Z',
    homeTeamCode: 'KOR', // Poppie
    awayTeamCode: 'CZE', // Keenan
    homeGoals: 2,
    awayGoals: 1,
    status: 'finished'
  }
];

// --- Helpers for Phase 2 ---

export function getMatchesByGroup(group: Group): Match[] {
  return matches.filter(match => match.group === group);
}

export function getMatchesByTeam(teamCode: string): Match[] {
  return matches.filter(match => match.homeTeamCode === teamCode || match.awayTeamCode === teamCode);
}
// src/data/worldcup/matches.ts
import type { Group } from './teams';

export type Stage = 'group' | 'round_of_32' | 'round_of_16' | 'quarter_final' | 'semi_final' | 'third_place' | 'final';
export type MatchStatus = 'scheduled' | 'live' | 'finished';

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
  cleanSheets: string[];
  isComeback?: boolean;
  shootoutWinner?: string;
}

export interface Match {
  id: string;
  stage: Stage;
  group?: Group;
  kickoffUtc: string;
  homeTeamCode: string;
  awayTeamCode: string;
  homeGoals?: number;
  awayGoals?: number;
  homePenalties?: number;
  awayPenalties?: number;
  isExtraTime?: boolean;
  status: MatchStatus;
  timeline?: MatchTimeline;
}

export const matches: Match[] = [
  // --- GROUP STAGE ---
  { id: 'M001', stage: 'group', group: 'A', kickoffUtc: '2026-06-11T20:00:00Z', 
    homeTeamCode: 'MEX', awayTeamCode: 'RSA', status: 'scheduled' },
  { id: 'M002', stage: 'group', group: 'A', kickoffUtc: '2026-06-12T03:00:00Z', 
    homeTeamCode: 'KOR', awayTeamCode: 'CZE', status: 'scheduled' },
  { id: 'M003', stage: 'group', group: 'B', kickoffUtc: '2026-06-12T20:00:00Z', 
    homeTeamCode: 'CAN', awayTeamCode: 'BIH', status: 'scheduled' },
  { id: 'M004', stage: 'group', group: 'D', kickoffUtc: '2026-06-13T02:00:00Z', 
    homeTeamCode: 'USA', awayTeamCode: 'PAR', status: 'scheduled' },
  { id: 'M005', stage: 'group', group: 'B', kickoffUtc: '2026-06-13T20:00:00Z', 
    homeTeamCode: 'QAT', awayTeamCode: 'SUI', status: 'scheduled' },
  { id: 'M006', stage: 'group', group: 'C', kickoffUtc: '2026-06-13T23:00:00Z', 
    homeTeamCode: 'BRA', awayTeamCode: 'MAR', status: 'scheduled' },
  { id: 'M007', stage: 'group', group: 'C', kickoffUtc: '2026-06-13T23:00:00Z', 
    homeTeamCode: 'HAI', awayTeamCode: 'SCO', status: 'scheduled' },  

  // NEED TO CONTINUE LIST OR FIND BETTER WAY TO GENERATE FULL SCHEDULE - THIS IS JUST A STARTING POINT

  // --- ROUND OF 32 ---
  { id: 'M073', stage: 'round_of_32', kickoffUtc: '2026-06-28T15:00:00Z', 
    homeTeamCode: '1A', awayTeamCode: '3CDEF', status: 'scheduled' },
  { id: 'M074', stage: 'round_of_32', kickoffUtc: '2026-06-28T18:00:00Z', 
    homeTeamCode: '2A', awayTeamCode: '2B', status: 'scheduled' },
  { id: 'M075', stage: 'round_of_32', kickoffUtc: '2026-06-28T21:00:00Z', 
    homeTeamCode: '1E', awayTeamCode: '3ABCD', status: 'scheduled' },
  { id: 'M076', stage: 'round_of_32', kickoffUtc: '2026-06-29T00:00:00Z', 
    homeTeamCode: '1F', awayTeamCode: '2C', status: 'scheduled' },
  { id: 'M077', stage: 'round_of_32', kickoffUtc: '2026-06-29T15:00:00Z', 
    homeTeamCode: '1C', awayTeamCode: '3ABEF', status: 'scheduled' },
  { id: 'M078', stage: 'round_of_32', kickoffUtc: '2026-06-29T18:00:00Z', 
    homeTeamCode: '2E', awayTeamCode: '2F', status: 'scheduled' },
  { id: 'M079', stage: 'round_of_32', kickoffUtc: '2026-06-29T21:00:00Z', 
    homeTeamCode: '1I', awayTeamCode: '3CDEF', status: 'scheduled' },
  { id: 'M080', stage: 'round_of_32', kickoffUtc: '2026-06-30T00:00:00Z', 
    homeTeamCode: '2I', awayTeamCode: '2J', status: 'scheduled' },
  { id: 'M081', stage: 'round_of_32', kickoffUtc: '2026-06-30T15:00:00Z', 
    homeTeamCode: '1B', awayTeamCode: '3EFGI', status: 'scheduled' },
  { id: 'M082', stage: 'round_of_32', kickoffUtc: '2026-06-30T18:00:00Z', 
    homeTeamCode: '1G', awayTeamCode: '3ABCD', status: 'scheduled' },
  { id: 'M083', stage: 'round_of_32', kickoffUtc: '2026-06-30T21:00:00Z', 
    homeTeamCode: '1D', awayTeamCode: '3BEFG', status: 'scheduled' },
  { id: 'M084', stage: 'round_of_32', kickoffUtc: '2026-07-01T00:00:00Z', 
    homeTeamCode: '2G', awayTeamCode: '2H', status: 'scheduled' },
  { id: 'M085', stage: 'round_of_32', kickoffUtc: '2026-07-01T15:00:00Z', 
    homeTeamCode: '1H', awayTeamCode: '3JKLM', status: 'scheduled' },
  { id: 'M086', stage: 'round_of_32', kickoffUtc: '2026-07-01T18:00:00Z', 
    homeTeamCode: '2D', awayTeamCode: '2C', status: 'scheduled' },
  { id: 'M087', stage: 'round_of_32', kickoffUtc: '2026-07-01T21:00:00Z', 
    homeTeamCode: '1K', awayTeamCode: '3ABEF', status: 'scheduled' },
  { id: 'M088', stage: 'round_of_32', kickoffUtc: '2026-07-02T00:00:00Z', 
    homeTeamCode: '1L', awayTeamCode: '3GHJK', status: 'scheduled' },

  // --- ROUND OF 16 ---
  { id: 'M089', stage: 'round_of_16', kickoffUtc: '2026-07-04T15:00:00Z', 
    homeTeamCode: 'W073', awayTeamCode: 'W075', status: 'scheduled' },
  { id: 'M090', stage: 'round_of_16', kickoffUtc: '2026-07-04T19:00:00Z', 
    homeTeamCode: 'W074', awayTeamCode: 'W076', status: 'scheduled' },
  { id: 'M091', stage: 'round_of_16', kickoffUtc: '2026-07-05T15:00:00Z', 
    homeTeamCode: 'W077', awayTeamCode: 'W079', status: 'scheduled' },
  { id: 'M092', stage: 'round_of_16', kickoffUtc: '2026-07-05T19:00:00Z', 
    homeTeamCode: 'W078', awayTeamCode: 'W080', status: 'scheduled' },
  { id: 'M093', stage: 'round_of_16', kickoffUtc: '2026-07-06T15:00:00Z', 
    homeTeamCode: 'W081', awayTeamCode: 'W083', status: 'scheduled' },
  { id: 'M094', stage: 'round_of_16', kickoffUtc: '2026-07-06T19:00:00Z', 
    homeTeamCode: 'W082', awayTeamCode: 'W084', status: 'scheduled' },
  { id: 'M095', stage: 'round_of_16', kickoffUtc: '2026-07-07T15:00:00Z', 
    homeTeamCode: 'W085', awayTeamCode: 'W087', status: 'scheduled' },
  { id: 'M096', stage: 'round_of_16', kickoffUtc: '2026-07-07T19:00:00Z', 
    homeTeamCode: 'W086', awayTeamCode: 'W088', status: 'scheduled' },

  // --- QUARTER FINALS ---
  { id: 'M097', stage: 'quarter_final', kickoffUtc: '2026-07-09T15:00:00Z', 
    homeTeamCode: 'W089', awayTeamCode: 'W091', status: 'scheduled' },
  { id: 'M098', stage: 'quarter_final', kickoffUtc: '2026-07-09T19:00:00Z', 
    homeTeamCode: 'W090', awayTeamCode: 'W092', status: 'scheduled' },
  { id: 'M099', stage: 'quarter_final', kickoffUtc: '2026-07-10T15:00:00Z', 
    homeTeamCode: 'W093', awayTeamCode: 'W095', status: 'scheduled' },
  { id: 'M100', stage: 'quarter_final', kickoffUtc: '2026-07-10T19:00:00Z', 
    homeTeamCode: 'W094', awayTeamCode: 'W096', status: 'scheduled' },

  // --- SEMI FINALS ---
  { id: 'M101', stage: 'semi_final', kickoffUtc: '2026-07-14T19:00:00Z', 
    homeTeamCode: 'W097', awayTeamCode: 'W099', status: 'scheduled' },
  { id: 'M102', stage: 'semi_final', kickoffUtc: '2026-07-15T19:00:00Z', 
    homeTeamCode: 'W098', awayTeamCode: 'W100', status: 'scheduled' },

  // --- THIRD PLACE & FINAL ---
  { id: 'M103', stage: 'third_place', kickoffUtc: '2026-07-18T19:00:00Z', 
    homeTeamCode: 'L101', awayTeamCode: 'L102', status: 'scheduled' },
  { id: 'M104', stage: 'final', kickoffUtc: '2026-07-19T19:00:00Z', 
    homeTeamCode: 'W101', awayTeamCode: 'W102', status: 'scheduled' }
];

export function getMatchesByGroup(group: Group): Match[] {
  return matches.filter(match => match.group === group);
}

export function getMatchesByTeam(teamCode: string): Match[] {
  return matches.filter(match => match.homeTeamCode === teamCode || match.awayTeamCode === teamCode);
}
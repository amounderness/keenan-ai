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
  { id: 'M001', stage: 'group', group: 'A', kickoffUtc: '2026-06-11T19:00:00Z', homeTeamCode: 'MEX', awayTeamCode: 'RSA', status: 'scheduled' },
  { id: 'M002', stage: 'group', group: 'A', kickoffUtc: '2026-06-11T22:00:00Z', homeTeamCode: 'KOR', awayTeamCode: 'CZE', status: 'scheduled' },
  { id: 'M003', stage: 'group', group: 'A', kickoffUtc: '2026-06-16T15:00:00Z', homeTeamCode: 'MEX', awayTeamCode: 'KOR', status: 'scheduled' },
  { id: 'M004', stage: 'group', group: 'A', kickoffUtc: '2026-06-16T18:00:00Z', homeTeamCode: 'CZE', awayTeamCode: 'RSA', status: 'scheduled' },
  { id: 'M005', stage: 'group', group: 'A', kickoffUtc: '2026-06-21T15:00:00Z', homeTeamCode: 'CZE', awayTeamCode: 'MEX', status: 'scheduled' },
  { id: 'M006', stage: 'group', group: 'A', kickoffUtc: '2026-06-21T18:00:00Z', homeTeamCode: 'RSA', awayTeamCode: 'KOR', status: 'scheduled' },
  { id: 'M007', stage: 'group', group: 'B', kickoffUtc: '2026-06-12T15:00:00Z', homeTeamCode: 'CAN', awayTeamCode: 'BIH', status: 'scheduled' },
  { id: 'M008', stage: 'group', group: 'B', kickoffUtc: '2026-06-12T18:00:00Z', homeTeamCode: 'QAT', awayTeamCode: 'SUI', status: 'scheduled' },
  { id: 'M009', stage: 'group', group: 'B', kickoffUtc: '2026-06-17T15:00:00Z', homeTeamCode: 'CAN', awayTeamCode: 'QAT', status: 'scheduled' },
  { id: 'M010', stage: 'group', group: 'B', kickoffUtc: '2026-06-17T18:00:00Z', homeTeamCode: 'SUI', awayTeamCode: 'BIH', status: 'scheduled' },
  { id: 'M011', stage: 'group', group: 'B', kickoffUtc: '2026-06-22T15:00:00Z', homeTeamCode: 'SUI', awayTeamCode: 'CAN', status: 'scheduled' },
  { id: 'M012', stage: 'group', group: 'B', kickoffUtc: '2026-06-22T18:00:00Z', homeTeamCode: 'BIH', awayTeamCode: 'QAT', status: 'scheduled' },
  { id: 'M013', stage: 'group', group: 'C', kickoffUtc: '2026-06-12T21:00:00Z', homeTeamCode: 'BRA', awayTeamCode: 'MAR', status: 'scheduled' },
  { id: 'M014', stage: 'group', group: 'C', kickoffUtc: '2026-06-13T00:00:00Z', homeTeamCode: 'HAI', awayTeamCode: 'SCO', status: 'scheduled' },
  { id: 'M015', stage: 'group', group: 'C', kickoffUtc: '2026-06-17T21:00:00Z', homeTeamCode: 'BRA', awayTeamCode: 'HAI', status: 'scheduled' },
  { id: 'M016', stage: 'group', group: 'C', kickoffUtc: '2026-06-18T00:00:00Z', homeTeamCode: 'SCO', awayTeamCode: 'MAR', status: 'scheduled' },
  { id: 'M017', stage: 'group', group: 'C', kickoffUtc: '2026-06-22T21:00:00Z', homeTeamCode: 'SCO', awayTeamCode: 'BRA', status: 'scheduled' },
  { id: 'M018', stage: 'group', group: 'C', kickoffUtc: '2026-06-23T00:00:00Z', homeTeamCode: 'MAR', awayTeamCode: 'HAI', status: 'scheduled' },
  { id: 'M019', stage: 'group', group: 'D', kickoffUtc: '2026-06-13T15:00:00Z', homeTeamCode: 'USA', awayTeamCode: 'PAR', status: 'scheduled' },
  { id: 'M020', stage: 'group', group: 'D', kickoffUtc: '2026-06-13T18:00:00Z', homeTeamCode: 'AUS', awayTeamCode: 'TUR', status: 'scheduled' },
  { id: 'M021', stage: 'group', group: 'D', kickoffUtc: '2026-06-18T15:00:00Z', homeTeamCode: 'USA', awayTeamCode: 'AUS', status: 'scheduled' },
  { id: 'M022', stage: 'group', group: 'D', kickoffUtc: '2026-06-18T18:00:00Z', homeTeamCode: 'TUR', awayTeamCode: 'PAR', status: 'scheduled' },
  { id: 'M023', stage: 'group', group: 'D', kickoffUtc: '2026-06-23T15:00:00Z', homeTeamCode: 'TUR', awayTeamCode: 'USA', status: 'scheduled' },
  { id: 'M024', stage: 'group', group: 'D', kickoffUtc: '2026-06-23T18:00:00Z', homeTeamCode: 'PAR', awayTeamCode: 'AUS', status: 'scheduled' },
  { id: 'M025', stage: 'group', group: 'E', kickoffUtc: '2026-06-13T21:00:00Z', homeTeamCode: 'GER', awayTeamCode: 'CUW', status: 'scheduled' },
  { id: 'M026', stage: 'group', group: 'E', kickoffUtc: '2026-06-14T00:00:00Z', homeTeamCode: 'CIV', awayTeamCode: 'ECU', status: 'scheduled' },
  { id: 'M027', stage: 'group', group: 'E', kickoffUtc: '2026-06-18T21:00:00Z', homeTeamCode: 'GER', awayTeamCode: 'CIV', status: 'scheduled' },
  { id: 'M028', stage: 'group', group: 'E', kickoffUtc: '2026-06-19T00:00:00Z', homeTeamCode: 'ECU', awayTeamCode: 'CUW', status: 'scheduled' },
  { id: 'M029', stage: 'group', group: 'E', kickoffUtc: '2026-06-24T15:00:00Z', homeTeamCode: 'ECU', awayTeamCode: 'GER', status: 'scheduled' },
  { id: 'M030', stage: 'group', group: 'E', kickoffUtc: '2026-06-24T18:00:00Z', homeTeamCode: 'CUW', awayTeamCode: 'CIV', status: 'scheduled' },
  { id: 'M031', stage: 'group', group: 'F', kickoffUtc: '2026-06-14T15:00:00Z', homeTeamCode: 'NED', awayTeamCode: 'JPN', status: 'scheduled' },
  { id: 'M032', stage: 'group', group: 'F', kickoffUtc: '2026-06-14T18:00:00Z', homeTeamCode: 'SWE', awayTeamCode: 'TUN', status: 'scheduled' },
  { id: 'M033', stage: 'group', group: 'F', kickoffUtc: '2026-06-19T15:00:00Z', homeTeamCode: 'NED', awayTeamCode: 'SWE', status: 'scheduled' },
  { id: 'M034', stage: 'group', group: 'F', kickoffUtc: '2026-06-19T18:00:00Z', homeTeamCode: 'TUN', awayTeamCode: 'JPN', status: 'scheduled' },
  { id: 'M035', stage: 'group', group: 'F', kickoffUtc: '2026-06-24T21:00:00Z', homeTeamCode: 'TUN', awayTeamCode: 'NED', status: 'scheduled' },
  { id: 'M036', stage: 'group', group: 'F', kickoffUtc: '2026-06-25T00:00:00Z', homeTeamCode: 'JPN', awayTeamCode: 'SWE', status: 'scheduled' },
  { id: 'M037', stage: 'group', group: 'G', kickoffUtc: '2026-06-14T21:00:00Z', homeTeamCode: 'BEL', awayTeamCode: 'EGY', status: 'scheduled' },
  { id: 'M038', stage: 'group', group: 'G', kickoffUtc: '2026-06-15T00:00:00Z', homeTeamCode: 'IRN', awayTeamCode: 'NZL', status: 'scheduled' },
  { id: 'M039', stage: 'group', group: 'G', kickoffUtc: '2026-06-19T21:00:00Z', homeTeamCode: 'BEL', awayTeamCode: 'IRN', status: 'scheduled' },
  { id: 'M040', stage: 'group', group: 'G', kickoffUtc: '2026-06-20T00:00:00Z', homeTeamCode: 'NZL', awayTeamCode: 'EGY', status: 'scheduled' },
  { id: 'M041', stage: 'group', group: 'G', kickoffUtc: '2026-06-25T15:00:00Z', homeTeamCode: 'NZL', awayTeamCode: 'BEL', status: 'scheduled' },
  { id: 'M042', stage: 'group', group: 'G', kickoffUtc: '2026-06-25T18:00:00Z', homeTeamCode: 'EGY', awayTeamCode: 'IRN', status: 'scheduled' },
  { id: 'M043', stage: 'group', group: 'H', kickoffUtc: '2026-06-15T15:00:00Z', homeTeamCode: 'ESP', awayTeamCode: 'CPV', status: 'scheduled' },
  { id: 'M044', stage: 'group', group: 'H', kickoffUtc: '2026-06-15T18:00:00Z', homeTeamCode: 'KSA', awayTeamCode: 'URU', status: 'scheduled' },
  { id: 'M045', stage: 'group', group: 'H', kickoffUtc: '2026-06-20T15:00:00Z', homeTeamCode: 'ESP', awayTeamCode: 'KSA', status: 'scheduled' },
  { id: 'M046', stage: 'group', group: 'H', kickoffUtc: '2026-06-20T18:00:00Z', homeTeamCode: 'URU', awayTeamCode: 'CPV', status: 'scheduled' },
  { id: 'M047', stage: 'group', group: 'H', kickoffUtc: '2026-06-25T21:00:00Z', homeTeamCode: 'URU', awayTeamCode: 'ESP', status: 'scheduled' },
  { id: 'M048', stage: 'group', group: 'H', kickoffUtc: '2026-06-26T00:00:00Z', homeTeamCode: 'CPV', awayTeamCode: 'KSA', status: 'scheduled' },
  { id: 'M049', stage: 'group', group: 'I', kickoffUtc: '2026-06-15T21:00:00Z', homeTeamCode: 'FRA', awayTeamCode: 'SEN', status: 'scheduled' },
  { id: 'M050', stage: 'group', group: 'I', kickoffUtc: '2026-06-16T00:00:00Z', homeTeamCode: 'IRQ', awayTeamCode: 'NOR', status: 'scheduled' },
  { id: 'M051', stage: 'group', group: 'I', kickoffUtc: '2026-06-20T21:00:00Z', homeTeamCode: 'FRA', awayTeamCode: 'IRQ', status: 'scheduled' },
  { id: 'M052', stage: 'group', group: 'I', kickoffUtc: '2026-06-21T00:00:00Z', homeTeamCode: 'NOR', awayTeamCode: 'SEN', status: 'scheduled' },
  { id: 'M053', stage: 'group', group: 'I', kickoffUtc: '2026-06-26T15:00:00Z', homeTeamCode: 'NOR', awayTeamCode: 'FRA', status: 'scheduled' },
  { id: 'M054', stage: 'group', group: 'I', kickoffUtc: '2026-06-26T18:00:00Z', homeTeamCode: 'SEN', awayTeamCode: 'IRQ', status: 'scheduled' },
  { id: 'M055', stage: 'group', group: 'J', kickoffUtc: '2026-06-16T15:00:00Z', homeTeamCode: 'ARG', awayTeamCode: 'ALG', status: 'scheduled' },
  { id: 'M056', stage: 'group', group: 'J', kickoffUtc: '2026-06-16T18:00:00Z', homeTeamCode: 'AUT', awayTeamCode: 'JOR', status: 'scheduled' },
  { id: 'M057', stage: 'group', group: 'J', kickoffUtc: '2026-06-21T15:00:00Z', homeTeamCode: 'ARG', awayTeamCode: 'AUT', status: 'scheduled' },
  { id: 'M058', stage: 'group', group: 'J', kickoffUtc: '2026-06-21T18:00:00Z', homeTeamCode: 'JOR', awayTeamCode: 'ALG', status: 'scheduled' },
  { id: 'M059', stage: 'group', group: 'J', kickoffUtc: '2026-06-26T21:00:00Z', homeTeamCode: 'JOR', awayTeamCode: 'ARG', status: 'scheduled' },
  { id: 'M060', stage: 'group', group: 'J', kickoffUtc: '2026-06-27T00:00:00Z', homeTeamCode: 'ALG', awayTeamCode: 'AUT', status: 'scheduled' },
  { id: 'M061', stage: 'group', group: 'K', kickoffUtc: '2026-06-16T21:00:00Z', homeTeamCode: 'POR', awayTeamCode: 'COD', status: 'scheduled' },
  { id: 'M062', stage: 'group', group: 'K', kickoffUtc: '2026-06-17T00:00:00Z', homeTeamCode: 'UZB', awayTeamCode: 'COL', status: 'scheduled' },
  { id: 'M063', stage: 'group', group: 'K', kickoffUtc: '2026-06-21T21:00:00Z', homeTeamCode: 'POR', awayTeamCode: 'UZB', status: 'scheduled' },
  { id: 'M064', stage: 'group', group: 'K', kickoffUtc: '2026-06-22T00:00:00Z', homeTeamCode: 'COL', awayTeamCode: 'COD', status: 'scheduled' },
  { id: 'M065', stage: 'group', group: 'K', kickoffUtc: '2026-06-27T15:00:00Z', homeTeamCode: 'COL', awayTeamCode: 'POR', status: 'scheduled' },
  { id: 'M066', stage: 'group', group: 'K', kickoffUtc: '2026-06-27T18:00:00Z', homeTeamCode: 'COD', awayTeamCode: 'UZB', status: 'scheduled' },
  { id: 'M067', stage: 'group', group: 'L', kickoffUtc: '2026-06-17T15:00:00Z', homeTeamCode: 'ENG', awayTeamCode: 'CRO', status: 'scheduled' },
  { id: 'M068', stage: 'group', group: 'L', kickoffUtc: '2026-06-17T18:00:00Z', homeTeamCode: 'ZAM', awayTeamCode: 'PAN', status: 'scheduled' },
  { id: 'M069', stage: 'group', group: 'L', kickoffUtc: '2026-06-22T15:00:00Z', homeTeamCode: 'ENG', awayTeamCode: 'ZAM', status: 'scheduled' },
  { id: 'M070', stage: 'group', group: 'L', kickoffUtc: '2026-06-22T18:00:00Z', homeTeamCode: 'PAN', awayTeamCode: 'CRO', status: 'scheduled' },
  { id: 'M071', stage: 'group', group: 'L', kickoffUtc: '2026-06-27T21:00:00Z', homeTeamCode: 'PAN', awayTeamCode: 'ENG', status: 'scheduled' },
  { id: 'M072', stage: 'group', group: 'L', kickoffUtc: '2026-06-28T00:00:00Z', homeTeamCode: 'CRO', awayTeamCode: 'ZAM', status: 'scheduled' },

  // --- ROUND OF 32 ---
  { id: 'M073', stage: 'round_of_32', kickoffUtc: '2026-06-28T15:00:00Z', homeTeamCode: '1A', awayTeamCode: '3CDEF', status: 'scheduled' },
  { id: 'M074', stage: 'round_of_32', kickoffUtc: '2026-06-28T18:00:00Z', homeTeamCode: '2A', awayTeamCode: '2B', status: 'scheduled' },
  { id: 'M075', stage: 'round_of_32', kickoffUtc: '2026-06-28T21:00:00Z', homeTeamCode: '1E', awayTeamCode: '3ABCD', status: 'scheduled' },
  { id: 'M076', stage: 'round_of_32', kickoffUtc: '2026-06-29T00:00:00Z', homeTeamCode: '1F', awayTeamCode: '2C', status: 'scheduled' },
  { id: 'M077', stage: 'round_of_32', kickoffUtc: '2026-06-29T15:00:00Z', homeTeamCode: '1C', awayTeamCode: '3ABEF', status: 'scheduled' },
  { id: 'M078', stage: 'round_of_32', kickoffUtc: '2026-06-29T18:00:00Z', homeTeamCode: '2E', awayTeamCode: '2F', status: 'scheduled' },
  { id: 'M079', stage: 'round_of_32', kickoffUtc: '2026-06-29T21:00:00Z', homeTeamCode: '1I', awayTeamCode: '3CDEF', status: 'scheduled' },
  { id: 'M080', stage: 'round_of_32', kickoffUtc: '2026-06-30T00:00:00Z', homeTeamCode: '2I', awayTeamCode: '2J', status: 'scheduled' },
  { id: 'M081', stage: 'round_of_32', kickoffUtc: '2026-06-30T15:00:00Z', homeTeamCode: '1B', awayTeamCode: '3EFGI', status: 'scheduled' },
  { id: 'M082', stage: 'round_of_32', kickoffUtc: '2026-06-30T18:00:00Z', homeTeamCode: '1G', awayTeamCode: '3ABCD', status: 'scheduled' },
  { id: 'M083', stage: 'round_of_32', kickoffUtc: '2026-06-30T21:00:00Z', homeTeamCode: '1D', awayTeamCode: '3BEFG', status: 'scheduled' },
  { id: 'M084', stage: 'round_of_32', kickoffUtc: '2026-07-01T00:00:00Z', homeTeamCode: '2G', awayTeamCode: '2H', status: 'scheduled' },
  { id: 'M085', stage: 'round_of_32', kickoffUtc: '2026-07-01T15:00:00Z', homeTeamCode: '1H', awayTeamCode: '3JKLM', status: 'scheduled' },
  { id: 'M086', stage: 'round_of_32', kickoffUtc: '2026-07-01T18:00:00Z', homeTeamCode: '2D', awayTeamCode: '2C', status: 'scheduled' },
  { id: 'M087', stage: 'round_of_32', kickoffUtc: '2026-07-01T21:00:00Z', homeTeamCode: '1K', awayTeamCode: '3ABEF', status: 'scheduled' },
  { id: 'M088', stage: 'round_of_32', kickoffUtc: '2026-07-02T00:00:00Z', homeTeamCode: '1L', awayTeamCode: '3GHJK', status: 'scheduled' },

  // --- ROUND OF 16 ---
  { id: 'M089', stage: 'round_of_16', kickoffUtc: '2026-07-04T15:00:00Z', homeTeamCode: 'W073', awayTeamCode: 'W075', status: 'scheduled' },
  { id: 'M090', stage: 'round_of_16', kickoffUtc: '2026-07-04T19:00:00Z', homeTeamCode: 'W074', awayTeamCode: 'W076', status: 'scheduled' },
  { id: 'M091', stage: 'round_of_16', kickoffUtc: '2026-07-05T15:00:00Z', homeTeamCode: 'W077', awayTeamCode: 'W079', status: 'scheduled' },
  { id: 'M092', stage: 'round_of_16', kickoffUtc: '2026-07-05T19:00:00Z', homeTeamCode: 'W078', awayTeamCode: 'W080', status: 'scheduled' },
  { id: 'M093', stage: 'round_of_16', kickoffUtc: '2026-07-06T15:00:00Z', homeTeamCode: 'W081', awayTeamCode: 'W083', status: 'scheduled' },
  { id: 'M094', stage: 'round_of_16', kickoffUtc: '2026-07-06T19:00:00Z', homeTeamCode: 'W082', awayTeamCode: 'W084', status: 'scheduled' },
  { id: 'M095', stage: 'round_of_16', kickoffUtc: '2026-07-07T15:00:00Z', homeTeamCode: 'W085', awayTeamCode: 'W087', status: 'scheduled' },
  { id: 'M096', stage: 'round_of_16', kickoffUtc: '2026-07-07T19:00:00Z', homeTeamCode: 'W086', awayTeamCode: 'W088', status: 'scheduled' },

  // --- QUARTER FINALS ---
  { id: 'M097', stage: 'quarter_final', kickoffUtc: '2026-07-09T15:00:00Z', homeTeamCode: 'W089', awayTeamCode: 'W091', status: 'scheduled' },
  { id: 'M098', stage: 'quarter_final', kickoffUtc: '2026-07-09T19:00:00Z', homeTeamCode: 'W090', awayTeamCode: 'W092', status: 'scheduled' },
  { id: 'M099', stage: 'quarter_final', kickoffUtc: '2026-07-10T15:00:00Z', homeTeamCode: 'W093', awayTeamCode: 'W095', status: 'scheduled' },
  { id: 'M100', stage: 'quarter_final', kickoffUtc: '2026-07-10T19:00:00Z', homeTeamCode: 'W094', awayTeamCode: 'W096', status: 'scheduled' },

  // --- SEMI FINALS ---
  { id: 'M101', stage: 'semi_final', kickoffUtc: '2026-07-14T19:00:00Z', homeTeamCode: 'W097', awayTeamCode: 'W099', status: 'scheduled' },
  { id: 'M102', stage: 'semi_final', kickoffUtc: '2026-07-15T19:00:00Z', homeTeamCode: 'W098', awayTeamCode: 'W100', status: 'scheduled' },

  // --- THIRD PLACE & FINAL ---
  { id: 'M103', stage: 'third_place', kickoffUtc: '2026-07-18T19:00:00Z', homeTeamCode: 'L101', awayTeamCode: 'L102', status: 'scheduled' },
  { id: 'M104', stage: 'final', kickoffUtc: '2026-07-19T19:00:00Z', homeTeamCode: 'W101', awayTeamCode: 'W102', status: 'scheduled' }
];

export function getMatchesByGroup(group: Group): Match[] {
  return matches.filter(match => match.group === group);
}

export function getMatchesByTeam(teamCode: string): Match[] {
  return matches.filter(match => match.homeTeamCode === teamCode || match.awayTeamCode === teamCode);
}
// src/data/worldcup/teams.ts

export type Player = 'Keenan' | 'Poppie';
export type Group = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L';

export interface Team {
  id: string;
  name: string;
  owner: Player;
  group: Group;
  groupPosition: number;
  tier: number;
  worldRank: number;
  tournamentRank: number;
  status?: 'active' | 'eliminated';
}

export const teams: Team[] = [
  { id: 'MEX', name: 'Mexico', owner: 'Keenan', group: 'A', groupPosition: 1, tier: 2, worldRank: 15, tournamentRank: 14 },
  { id: 'RSA', name: 'South Africa', owner: 'Poppie', group: 'A', groupPosition: 2, tier: 5, worldRank: 60, tournamentRank: 40 },
  { id: 'KOR', name: 'Korea Republic', owner: 'Poppie', group: 'A', groupPosition: 3, tier: 3, worldRank: 25, tournamentRank: 23 },
  { id: 'CZE', name: 'Czechia', owner: 'Keenan', group: 'A', groupPosition: 4, tier: 5, worldRank: 41, tournamentRank: 33 },
  { id: 'CAN', name: 'Canada', owner: 'Poppie', group: 'B', groupPosition: 1, tier: 4, worldRank: 30, tournamentRank: 27 },
  { id: 'BIH', name: 'Bosnia and Herzegovina', owner: 'Keenan', group: 'B', groupPosition: 2, tier: 6, worldRank: 64, tournamentRank: 43 },
  { id: 'QAT', name: 'Qatar', owner: 'Poppie', group: 'B', groupPosition: 3, tier: 5, worldRank: 55, tournamentRank: 38 },
  { id: 'SUI', name: 'Switzerland', owner: 'Keenan', group: 'B', groupPosition: 4, tier: 3, worldRank: 19, tournamentRank: 18 },
  { id: 'BRA', name: 'Brazil', owner: 'Poppie', group: 'C', groupPosition: 1, tier: 1, worldRank: 6, tournamentRank: 6 },
  { id: 'MAR', name: 'Morocco', owner: 'Keenan', group: 'C', groupPosition: 2, tier: 1, worldRank: 7, tournamentRank: 7 },
  { id: 'HAI', name: 'Haiti', owner: 'Poppie', group: 'C', groupPosition: 3, tier: 6, worldRank: 82, tournamentRank: 46 },
  { id: 'SCO', name: 'Scotland', owner: 'Keenan', group: 'C', groupPosition: 4, tier: 5, worldRank: 43, tournamentRank: 34 },
  { id: 'USA', name: 'USA', owner: 'Poppie', group: 'D', groupPosition: 1, tier: 2, worldRank: 16, tournamentRank: 15 },
  { id: 'PAR', name: 'Paraguay', owner: 'Keenan', group: 'D', groupPosition: 2, tier: 4, worldRank: 40, tournamentRank: 32 },
  { id: 'AUS', name: 'Australia', owner: 'Keenan', group: 'D', groupPosition: 3, tier: 3, worldRank: 27, tournamentRank: 24 },
  { id: 'TUR', name: 'Turkiye', owner: 'Poppie', group: 'D', groupPosition: 4, tier: 3, worldRank: 22, tournamentRank: 20 },
  { id: 'GER', name: 'Germany', owner: 'Keenan', group: 'E', groupPosition: 1, tier: 2, worldRank: 10, tournamentRank: 10 },
  { id: 'CUW', name: 'Curacao', owner: 'Keenan', group: 'E', groupPosition: 2, tier: 6, worldRank: 83, tournamentRank: 47 },
  { id: 'CIV', name: 'Cote d\'Ivoire', owner: 'Poppie', group: 'E', groupPosition: 3, tier: 4, worldRank: 34, tournamentRank: 30 },
  { id: 'ECU', name: 'Ecuador', owner: 'Poppie', group: 'E', groupPosition: 4, tier: 3, worldRank: 24, tournamentRank: 22 },
  { id: 'NED', name: 'Netherlands', owner: 'Poppie', group: 'F', groupPosition: 1, tier: 1, worldRank: 8, tournamentRank: 8 },
  { id: 'JPN', name: 'Japan', owner: 'Keenan', group: 'F', groupPosition: 2, tier: 3, worldRank: 18, tournamentRank: 17 },
  { id: 'SWE', name: 'Sweden', owner: 'Keenan', group: 'F', groupPosition: 3, tier: 4, worldRank: 38, tournamentRank: 31 },
  { id: 'TUN', name: 'Tunisia', owner: 'Poppie', group: 'F', groupPosition: 4, tier: 5, worldRank: 46, tournamentRank: 36 },
  { id: 'BEL', name: 'Belgium', owner: 'Keenan', group: 'G', groupPosition: 1, tier: 2, worldRank: 9, tournamentRank: 9 },
  { id: 'EGY', name: 'Egypt', owner: 'Poppie', group: 'G', groupPosition: 2, tier: 4, worldRank: 29, tournamentRank: 26 },
  { id: 'IRN', name: 'Iran', owner: 'Poppie', group: 'G', groupPosition: 3, tier: 3, worldRank: 21, tournamentRank: 19 },
  { id: 'NZL', name: 'New Zealand', owner: 'Keenan', group: 'G', groupPosition: 4, tier: 6, worldRank: 85, tournamentRank: 48 },
  { id: 'ESP', name: 'Spain', owner: 'Poppie', group: 'H', groupPosition: 1, tier: 1, worldRank: 2, tournamentRank: 2 },
  { id: 'CPV', name: 'Cabo Verde', owner: 'Poppie', group: 'H', groupPosition: 2, tier: 6, worldRank: 68, tournamentRank: 44 },
  { id: 'KSA', name: 'Saudi Arabia', owner: 'Keenan', group: 'H', groupPosition: 3, tier: 6, worldRank: 61, tournamentRank: 41 },
  { id: 'URU', name: 'Uruguay', owner: 'Keenan', group: 'H', groupPosition: 4, tier: 2, worldRank: 17, tournamentRank: 16 },
  { id: 'FRA', name: 'France', owner: 'Keenan', group: 'I', groupPosition: 1, tier: 1, worldRank: 1, tournamentRank: 1 },
  { id: 'SEN', name: 'Senegal', owner: 'Poppie', group: 'I', groupPosition: 2, tier: 2, worldRank: 14, tournamentRank: 13 },
  { id: 'IRQ', name: 'Iraq', owner: 'Keenan', group: 'I', groupPosition: 3, tier: 5, worldRank: 57, tournamentRank: 39 },
  { id: 'NOR', name: 'Norway', owner: 'Poppie', group: 'I', groupPosition: 4, tier: 4, worldRank: 31, tournamentRank: 28 },
  { id: 'ARG', name: 'Argentina', owner: 'Poppie', group: 'J', groupPosition: 1, tier: 1, worldRank: 3, tournamentRank: 3 },
  { id: 'ALG', name: 'Algeria', owner: 'Keenan', group: 'J', groupPosition: 2, tier: 4, worldRank: 28, tournamentRank: 25 },
  { id: 'AUT', name: 'Austria', owner: 'Keenan', group: 'J', groupPosition: 3, tier: 3, worldRank: 23, tournamentRank: 21 },
  { id: 'JOR', name: 'Jordan', owner: 'Poppie', group: 'J', groupPosition: 4, tier: 6, worldRank: 63, tournamentRank: 42 },
  { id: 'POR', name: 'Portugal', owner: 'Keenan', group: 'K', groupPosition: 1, tier: 1, worldRank: 5, tournamentRank: 5 },
  { id: 'COD', name: 'Congo DR', owner: 'Poppie', group: 'K', groupPosition: 2, tier: 5, worldRank: 45, tournamentRank: 35 },
  { id: 'UZB', name: 'Uzbekistan', owner: 'Keenan', group: 'K', groupPosition: 3, tier: 5, worldRank: 50, tournamentRank: 37 },
  { id: 'COL', name: 'Colombia', owner: 'Poppie', group: 'K', groupPosition: 4, tier: 2, worldRank: 13, tournamentRank: 12 },
  { id: 'ENG', name: 'England', owner: 'Keenan', group: 'L', groupPosition: 1, tier: 1, worldRank: 4, tournamentRank: 4 },
  { id: 'CRO', name: 'Croatia', owner: 'Poppie', group: 'L', groupPosition: 2, tier: 2, worldRank: 11, tournamentRank: 11 },
  { id: 'ZAM', name: 'Zambia', owner: 'Poppie', group: 'L', groupPosition: 3, tier: 6, worldRank: 73, tournamentRank: 45 },
  { id: 'PAN', name: 'Panama', owner: 'Keenan', group: 'L', groupPosition: 4, tier: 4, worldRank: 33, tournamentRank: 29 },
];

// --- Helpers for Phase 1 ---

export function getTeamsByOwner(owner: Player): Team[] {
  return teams.filter(team => team.owner === owner);
}

export function getTeamsByGroup(group: Group): Team[] {
  return teams.filter(team => team.group === group).sort((a, b) => a.groupPosition - b.groupPosition);
}

export function getRankSummary(owner: Player) {
  const playerTeams = getTeamsByOwner(owner);
  const totalWorldRank = playerTeams.reduce((sum, team) => sum + team.worldRank, 0);
  
  return {
    totalTeams: playerTeams.length,
    averageWorldRank: (totalWorldRank / playerTeams.length).toFixed(2),
    topTierCount: playerTeams.filter(t => t.tier === 1).length,
    bestRank: Math.min(...playerTeams.map(t => t.worldRank)),
    worstRank: Math.max(...playerTeams.map(t => t.worldRank))
  };
}
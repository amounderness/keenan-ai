// src/data/worldcup/standings.ts
import { teams } from './teams';
import { matches } from './matches';
import type { Group } from './teams';

export interface TeamStanding {
  id: string;
  name: string;
  owner: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  tiebreakerScore?: number; // For manual overrides in rare identical scenarios
}

export function getGroupStandings(group: Group): TeamStanding[] {
  // 1. Initialise the standings with 0 for all stats
  const groupTeams = teams.filter(t => t.group === group);
  const standingsMap: Record<string, TeamStanding> = {};
  
  groupTeams.forEach(t => {
    standingsMap[t.id] = {
      id: t.id,
      name: t.name,
      owner: t.owner,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      tiebreakerScore: 0
    };
  });

  // 2. Find all finished matches for this group
  const groupMatches = matches.filter(m => m.group === group && m.status === 'finished');
  
  // 3. Tally up the results
  groupMatches.forEach(m => {
    if (m.homeGoals === undefined || m.awayGoals === undefined) return;
    
    const home = standingsMap[m.homeTeamCode];
    const away = standingsMap[m.awayTeamCode];
    
    if (!home || !away) return;

    home.played += 1;
    away.played += 1;
    home.goalsFor += m.homeGoals;
    away.goalsFor += m.awayGoals;
    home.goalsAgainst += m.awayGoals;
    away.goalsAgainst += m.homeGoals;

    if (m.homeGoals > m.awayGoals) {
      home.won += 1;
      home.points += 3;
      away.lost += 1;
    } else if (m.homeGoals < m.awayGoals) {
      away.won += 1;
      away.points += 3;
      home.lost += 1;
    } else {
      home.drawn += 1;
      away.drawn += 1;
      home.points += 1;
      away.points += 1;
    }
  });

  // 4. Calculate Goal Difference and convert map to array
  const standings = Object.values(standingsMap).map(s => {
    s.goalDifference = s.goalsFor - s.goalsAgainst;
    return s;
  });

  // 5. Sort the array based on the official hierarchy
  standings.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
    return (b.tiebreakerScore || 0) - (a.tiebreakerScore || 0);
  });

  return standings;
}

export function getThirdPlaceStandings(): TeamStanding[] {
  const groups: Group[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  const thirdPlaceTeams: TeamStanding[] = [];

  groups.forEach(group => {
    const groupTable = getGroupStandings(group);
    // In a zero-indexed array, index 2 is the 3rd placed team
    if (groupTable.length >= 3) {
      thirdPlaceTeams.push(groupTable[2]);
    }
  });

  // Sort by official wildcard hierarchy (Points -> GD -> GF)
  thirdPlaceTeams.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
    return (b.tiebreakerScore || 0) - (a.tiebreakerScore || 0);
  });

  return thirdPlaceTeams;
}
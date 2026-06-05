// src/data/worldcup/scoring.ts
import { matches } from './matches';
import { teams } from './teams';
import type { Player } from './teams';

export interface TeamScoreBreakdown {
  teamId: string;
  teamName: string;
  wins: number;
  draws: number;
  goals: number;
  cleanSheets: number;
  totalPoints: number;
}

export interface PlayerScoreSummary {
  player: Player;
  totalPoints: number;
  teamBreakdowns: TeamScoreBreakdown[];
}

export function calculateTeamScore(teamId: string): TeamScoreBreakdown {
  // Find all finished matches involving this team
  const teamMatches = matches.filter(m => 
    (m.homeTeamCode === teamId || m.awayTeamCode === teamId) && m.status === 'finished'
  );

  let wins = 0;
  let draws = 0;
  let goals = 0;
  let cleanSheets = 0;
  let totalPoints = 0;

  teamMatches.forEach(m => {
    const isHome = m.homeTeamCode === teamId;
    const myGoals = isHome ? m.homeGoals! : m.awayGoals!;
    const theirGoals = isHome ? m.awayGoals! : m.homeGoals!;

    // 1. Goal Points (+1 per goal)
    goals += myGoals;
    totalPoints += (myGoals * 1); 

    // 2. Clean Sheet Points (+2)
    if (theirGoals === 0) {
      cleanSheets += 1;
      totalPoints += 2; 
    }

    // 3. Match Result Points
    if (myGoals > theirGoals) {
      wins += 1;
      totalPoints += 3; // +3 for a win
    } else if (myGoals === theirGoals) {
      // Handle Penalty Shootouts
      const myPens = isHome ? m.homePenalties : m.awayPenalties;
      const theirPens = isHome ? m.awayPenalties : m.homePenalties;

      if (myPens !== undefined && theirPens !== undefined) {
         if (myPens > theirPens) {
            wins += 1;
            totalPoints += 3; // +3 for shootout win
         } else {
             draws += 1;
             totalPoints += 1; // +1 for regulation draw, despite shootout loss
         }
      } else {
         draws += 1;
         totalPoints += 1; // +1 for standard draw
      }
    }
  });

  const team = teams.find(t => t.id === teamId);

  return {
    teamId,
    teamName: team?.name || teamId,
    wins,
    draws,
    goals,
    cleanSheets,
    totalPoints
  };
}

export function calculatePlayerScore(player: Player): PlayerScoreSummary {
  const playerTeams = teams.filter(t => t.owner === player);
  const breakdowns = playerTeams.map(t => calculateTeamScore(t.id));

  // Sort teams so the highest point earners appear at the top
  breakdowns.sort((a, b) => b.totalPoints - a.totalPoints);

  const totalPoints = breakdowns.reduce((sum, b) => sum + b.totalPoints, 0);

  return {
    player,
    totalPoints,
    teamBreakdowns: breakdowns
  };
}
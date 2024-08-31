const players = ["mumu", "soe", "poe", "kai", "mine"];
const calling = ["kai", "kai", "mine", "mine"];
function solution(players, callings) {
  const newPlayers = {};
  players.forEach((element, index) => {
    newPlayers[element] = index;
  });

  callings.forEach((callingElement) => {
    const findKey = newPlayers[callingElement];
    const prevPlayers = players[findKey - 1];
    players[findKey - 1] = callingElement;
    players[findKey] = prevPlayers;
    newPlayers[callingElement] = findKey - 1;
    newPlayers[prevPlayers] = findKey;
  });
  return players;
}

console.log(solution(players, calling));

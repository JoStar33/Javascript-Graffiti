function solution(bandage, health, attacks) {
  const healthSnapshot = health;
  if (attacks.length === 0) return health;
  const attacksLastTime = attacks[attacks.length - 1][0];
  let attackCounter = 0;
  let healthBonusCounter = 0;
  for (let currentCount = 1; currentCount <= attacksLastTime; currentCount++) {
    if (currentCount === attacks[attackCounter][0]) {
      health -= attacks[attackCounter][1];
      attackCounter++;
      healthBonusCounter = 0;
      if (health <= 0) return -1;
    } else {
      health = health + bandage[1];
      healthBonusCounter++;
      if (healthBonusCounter === bandage[0]) {
        health = health + bandage[2];
        healthBonusCounter = 0;
      }
      if (healthSnapshot < health) {
        health = healthSnapshot;
      }
    }
  }
  const answer = health <= 0 ? -1 : health;
  return answer;
}
console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
);

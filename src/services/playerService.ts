const PLAYER_URL = "http://localhost:3007/players";

// GET all players
export async function getAllPlayers() {
  const res = await fetch(PLAYER_URL);
  return await res.json();
}

// GET player by id
export async function getPlayerById(id: string) {
  const res = await fetch(`${PLAYER_URL}/${id}`);
  if (!res.ok) return null;
  return await res.json();
}

// ADD new player
export async function addPlayer(playerObj: any) {
  const res = await fetch(PLAYER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(playerObj),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to add player");
  }
  return await res.json();
}

// UPDATE player's best time
export async function updatePlayerTime(id: string, time: number) {
  const res = await fetch(`${PLAYER_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ best_time: time }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to update player time");
  }
  return await res.json();
}

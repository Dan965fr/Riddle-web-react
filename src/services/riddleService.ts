const BASE_URL = "http://localhost:3007/riddles";

// GET all riddles
export async function getAllRiddles() {
  const res = await fetch(BASE_URL);
  return await res.json();
}

// GET riddle by id
export async function getRiddleById(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return await res.json();
}

// ADD a riddle
export async function addRiddle(riddleObj: any) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(riddleObj),
  });
  return await res.json();
}

// UPDATE a riddle
export async function updateRiddle(riddleObj: any) {
  const res = await fetch(`${BASE_URL}/${riddleObj.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(riddleObj),
  });
  return await res.json();
}

// DELETE a riddle
export async function deleteRiddle(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  return res.ok;
}

// Task 2: listUsers()
import { getServerURL } from "./task1.js";

export async function listUsers() {
  const response = await fetch(`${getServerURL()}/users`);
  const data = await response.json();
  console.log(data);
}

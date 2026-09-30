import { getServerURL } from "./task1.js";

// Task 3: addUser(first_name, last_name, email)
export async function addUser(first_name, last_name, email) {
  // 1. Obtener los usuarios actuales
  const response = await fetch(`${getServerURL()}/users`);
  const users = await response.json();

  // 2. Calcular el nuevo id (el más alto + 1)
  const maxId = users.reduce((max, user) => Math.max(max, Number(user.id)), 0);
  const newId = maxId + 1;

  // 3. Crear un usuario nuevo
  const newUser = {
    id: newId,
    first_name,
    last_name,
    email,
  };

  // 4. Enviarlo al servidor
  const postResponse = await fetch(`${getServerURL()}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });

  const created = await postResponse.json();
  console.log(created);
}

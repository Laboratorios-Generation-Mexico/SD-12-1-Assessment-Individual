import { getServerURL } from "./task1.js";

// Task 4: delUser(number)
export async function delUser(id) {
  const response = await fetch(`${getServerURL()}/users/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    console.log(`Usuario ${id} eliminado`);
  } else {
    console.log(`No se pudo eliminar el usuario ${id} (status ${response.status})`);
  }
}


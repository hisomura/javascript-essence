async function fetchUsers() {
  const response = await fetch("users.json");
  console.log(response);
  console.log(response.json());
}

fetchUsers()
console.log("global end");

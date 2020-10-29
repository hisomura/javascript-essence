async function myFetch(fileName) {
  const response = await fetch(`./json/${fileName}`);
  const json = await response.json();
  return json;
}

async function main() {
  const bob = await myFetch("user1.json");
  const bobFriendsInfo = await myFetch(`friendsOf${bob.id}.json`);

  const friends = await Promise.all(
    bobFriendsInfo.friendIds.map((id) => myFetch(`user${id}.json`))
  );
  const messageUsers = [bob, ...friends].filter(user => user.latestMsgId);
  messageUsers.sort((a, b) => a.latestMsgId - b.latestMsgId)

  const messages = (await Promise.all(messageUsers.map(async user => {
    return myFetch(`message${user.latestMsgId}.json`).catch(e => {
      console.error(e)
      return null
    })
  }))).filter(message => message)

  messageUsers.forEach(user => {
    const message = messages.find(message => message.userId === user.id)
    if (message) {
      console.log(`${user.name}: ${message.message}`)
    }
  })
}

main();

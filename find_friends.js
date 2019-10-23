function findFirends(list, target){
  console.log('target: ', `${target}의 친구들`);
  const queue = [];
  const allFriend = new Set();
  queue.push(target);
  allFriend.add(target);
  
  while (queue.length !== 0){
    const temp = queue.shift();
    const friends = list[temp] ? list[temp] : [];
      for (let friend of friends){
        if(!allFriend.has(friend)){
        queue.push(friend);
        allFriend.add(friend);
      }}}
  return allFriend;
}

const friendsList = {
  'lee': ['kim', 'marry', 'jerry'],
  'kim': ['jung', 'song', 'kyu'],
  'terry': ['mike'],
}

const result = findFirends(friendsList, 'kim');
console.log('result: ', result);

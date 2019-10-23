function getIntimacy(list, target){
const queue = [];
const result = new Set();

queue.push({ name: target, value: 0});
result.add(target);

while(queue.length !== 0){
  const { name, value } = queue.shift();
  console.log('name, value: ', name, value);
  const friends = list[name];
  if(friends){
    for(let friend of friends){
      if(!result.has(friend)){
        queue.push({name: friend, value: value+1});
        result.add(friend);
      }
    }
  }
  }
  return result;
}

const friendsList = {
  'lee': ['kim', 'marry', 'jerry'],
  'kim': ['jung', 'song', 'kyu'],
  'terry': ['mike'], 
  'mike' : ['lee', 'terry', 'john'],
  'john': ['wang'],
  'wang': ['lee', 'kai', 'joe'],
}

const result = getIntimacy(friendsList, 'terry');
console.log('result: ', result);
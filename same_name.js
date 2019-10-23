function findSameNames(list){
  const dic = {};
  list.forEach(name => {
    if(dic[name]){
      dic[name] += 1;
    } else {
      dic[name] = 1;
    }
  });

  const resultSet = new Set()
  for(let name in dic){
    if(dic[name] >=2){
      resultSet.add(name);
    }
  }

  return resultSet;
}

const names = ['lee', 'park', 'kim', 'lee', 'song', 'john', 'marry', 'marry'];
console.log(findSameNames(names));


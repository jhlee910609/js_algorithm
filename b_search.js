function getRandomArray (max = 100)  {
  const list = [];
  for (let index = 0; index < max-1; index++) {
    const rand = Math.floor(Math.random() * (100)) + 1;
    list.push(rand);
  }
  list.push(20);
  return list;
}

function bSearch(list, target){
  let start = 0;
  let end = list.length -1;
  const newList = list.sort();
  
  while (start <= end){
    const mid = Math.floor((start + end ) / 2);
    
    if(target === newList[mid]){
      return mid;
    } else if (target > newList[mid]){
      start = mid + 1;
      
    } else {
      end = mid - 1;
      
    }
  }
  return -1;
}

const array = getRandomArray(20);
const result = bSearch(array, 20);


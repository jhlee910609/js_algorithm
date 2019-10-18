function getRandomArray ()  {
  const list = [];
  for (let index = 0; index < 100; index++) {
    const rand = Math.floor(Math.random()*100);
    list.push(rand);
  }
  return list;
}

// 삽입정렬 알고리즘
function insertSort(list){
  if(list.length === 0){
    console.log('배열 X');
    return;
  }
  for (let i = 1; i < list.length; i++) {
    const target = list[i];
    j = i -1;
    while(j >= 0 && list[j] > target){
      list[j+1] = list[j];
      j--;
    }
    list[j+1] = target;
  }
  return list;
}

const array = getRandomArray();
console.log('array: ', array);
const sortedArray = insertSort(array);
console.log('sortedArray: ', sortedArray);





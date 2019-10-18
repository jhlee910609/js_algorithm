function getRandomArray (max = 100)  {
  const list = [];
  for (let index = 0; index < max; index++) {
    const rand = Math.floor(Math.random() * (10000)) + 1;
    list.push(rand);
  }
  return list;
}

function swap(list, first, end){
  const temp = list[end];
  list[end]= list[first];
  list[first] = temp;
}

function quickSort(list, start, end){
  console.log('start, end: ', start, end);
  if(end-start <= 0){
    console.log('sorting 종료');
    return;
  }
  
  const pivot = list[end];
  let i = start;
  
  for(let j=i; j < end; j++){
    if(list[j] <= pivot){
      swap(list, i, j);
      i++;
    }
  }
  
  console.log('list: ', list);
  console.log('i: ', i);
  swap(list, i, end);

  quickSort(list, start, i-1);
  quickSort(list, i+1, end);

  return list;




}

const array = getRandomArray(5);
const result = quickSort(array, 0, array.length-1);
console.log('result: ', result);



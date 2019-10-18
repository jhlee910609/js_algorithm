function getRandomArray (max = 100)  {
  const list = [];
  for (let index = 0; index < max; index++) {
    const rand = Math.floor(Math.random() * (10000)) + 1;
    list.push(rand);
  }
  return list;
}

function mergeSort(list){
  if(list.length <=1){
    return;
  }
  const mid = list.length/2;
  const a = list.slice(0, mid);
  console.log('a: ', a);
  const b = list.slice(mid, list.length);
  console.log('b: ', b);

  mergeSort(a);
  mergeSort(b);

  let aIndex = 0;
  let bIndex = 0;
  let listIndex = 0;
  console.log('listIndex: ', listIndex);
  while(aIndex < a.length && bIndex < b.length){
    if(a[aIndex] < b[bIndex]){
      list[listIndex] = a[aIndex]
      aIndex++;
      listIndex++;
    } else {
      list[listIndex] = b[bIndex]
      bIndex++;
      listIndex++;
    }
  }

  while(aIndex < a.length){
    list[listIndex] = a[aIndex];
    listIndex++;
    aIndex++;
  }

  while(bIndex < b.length){
    list[listIndex] = b[bIndex];
    listIndex++;
    bIndex++;
  }
  return list;
}
const array = getRandomArray(10);
console.log('array: ', array);
const result = mergeSort(array);
console.log('result: ', result);
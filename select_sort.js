// 선택정렬 알고리즘 
function selectSort(list){
  for (let i = 0; i < list.length-1; i++) {
    let minIndex = i;
    
    for (let j = i+1; j < array.length; j++) {
      if(list[j] < list[i]){
        minIndex = j;
      }
    }
    const temp = list[i];
    list[i]= list[minIndex];
    list[minIndex]= temp;
  }
  return list;
}

const array = [1,5,234,5,6,12,4235,5,];
console.log('list => ', selectSort(array));

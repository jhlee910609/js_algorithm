function isSame(str){
  const queue = [...str];
  const stack = [...str];

  while (queue.length !== 0){
    const quPop = queue.shift();
    const stPop = stack.pop();
    if(quPop !== stPop){
      return false;
    }
  }
  return true;
}

const names = 'mom'


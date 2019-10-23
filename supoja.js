function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandom(count){
  const result = [];
  for (let index = 0; index < count; index++) {
    result[index] = getRandomArbitrary(1, 6); 
  }
  return result;
}

function getFirst(scores){
  const sortedScores = scores.sort((a,b) => {
    return a-b;
  });
  
  const maxScore = sortedScores[sortedScores.length -1];
  if(maxScore === 0){
    return [];
  }
  const result = [];
  for(let index in scores){
    const score = scores[index];
    if(score === maxScore){
      result.push(Number(index) +1);
    }
  }
  return result.sort((a,b) => a-b);
}

function solution(answers) {
    const result = [];
    const one = [1,2,3,4,5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let scores = [0,0,0];
    for (let i = 0; i < answers.length; i++) {
      const answer = answers[i];
      if(answer === one[i%one.length]){
        scores[0]++;
      }

      if(answer === two[i%two.length]){
        scores[1]++;
      }

      if(answer === three[i%three.length]){
       scores[2]++;
      } 
    }
    return getFirst(scores);
}

const answers = getRandom(50);




const a = 'hi';
console.log(a[1]);
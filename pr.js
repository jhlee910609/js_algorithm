

function solution(s) {
    const len = s.length;
    const  chars = [...s];
    if(len % 2==0){
        return s[len/2-1] + s[len/2];
    }else{
        return s[Math.floor(len/2)];
    };
}


// const test = "abcd";
const test = "abcde";
console.log(solution(test));

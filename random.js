export const getRandomArray = () => {
  const list = [];
  for (let index = 0; index < 100; index++) {
    const rand = Math.random();
    list.push(rand);
  }
  return list;
}
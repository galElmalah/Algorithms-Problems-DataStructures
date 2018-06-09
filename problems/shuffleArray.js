function shuffle(arr) {
  let tmp;
  let rand;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor((Math.random() * (arr.length - i) + i));
    tmp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = tmp;
  }
  return arr;
}
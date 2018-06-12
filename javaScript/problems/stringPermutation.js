function stringPermutation(str) {
  if (str.length < 2){
    return str
  }
  
  let arr = []
  
  for(let i = 0 ; i <str.length ; i++){
    let char = str[i]
    
    if (str.indexOf(char) !== i){
      continue
    }
    
    let remainingStr = str.slice(0,i) + str.slice(i+1, str.length)
    
    for(let sub of stringPermutation(remainingStr)){
      arr.push(char + sub)
    }
    
  }
  return arr
}

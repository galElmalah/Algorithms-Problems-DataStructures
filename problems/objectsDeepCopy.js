function objectDeepCopy(object){
  const newObject = {};
  const keys = Object.keys(object)
  for(let key of keys){
    if(typeof object[key] === "object"){
      newObject[key] = objDeepCopy(object[key])
    }else{
      newObject[key] = object[key]
    }
  }
  return newObject
}
function checkObj(obj, checkProp) {
    // Only change code below this line
  let a = obj.hasOwnProperty(checkProp)
  if(a){
    return obj[checkProp]
  }
  
  
    return "Not Found";
    // Only change code above this line
  }
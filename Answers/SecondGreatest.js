function secondGreatest(arr){
  let s = 0,
    g = arr[0]
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > g){
      s = g;
      g = arr[i]
    }else if(arr[i] > s){
      s = arr[i]
    }
  }
  return s
}

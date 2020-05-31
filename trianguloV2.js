function run(n) {
    let s = '', x ,y; 
    for(x = 1; x <= n; x++){
      for(y = 1; y <= x; y++){
        s += '#';
      }
      if(x<n){
      s += '\n';
    }
    }
    return s;
  }

console.log(run(3));
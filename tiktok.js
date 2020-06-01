function run(n) {
    let i, s = '';
    for(i=1; i <= n; i++){
      if(i % 3 === 0 && i % 5 !== 0){
        s+='Tok';
        if(i!==n){
          s+='\n';
        }
      }
      else if((i % 5 === 0) && (i % 3 !== 0)){
        s+= 'Tik';
        if(i!==n){
          s+='\n';
        }
      }
       if((i % 3 === 0) && (i % 5 === 0)){
        s+= 'TikTok';
        if(i!==n){
          s+='\n';
        }
      }
      if((i % 3 !== 0) && (i % 5 !== 0)){
        s+=i;
        if(i!==n){
        s+='\n';
      }
      }
    }
    return s;
    }

console.log(run(50));
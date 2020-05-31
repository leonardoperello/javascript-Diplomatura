    let n = 10;
    let t1='Tok', t2='Tik', i;
    for(i=1; i<=n; i++){
      if(i % 3 === 0){
        console.log(t1);
      }
      else if(i % 5 === 0 & i % 3 !== 0){
        console.log(t2);
      }
      else if(i % 5 === 0 % i % 3 === 0){
        console.log(t2, t1);
      }
    }
    document.write("a");
 
  
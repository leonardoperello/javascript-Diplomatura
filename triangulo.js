function run(n) {
    let s;
     for(let x = 1; x<=n; x++){
      s='';
       for(let y = 1; y<=x; y++){
       s+=+'#';
     }
     s+='\n';
    }
    return s;
   }
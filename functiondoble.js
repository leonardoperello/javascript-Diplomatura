const sum = () => {
  return function suma() {
    return "Por fin";
  };
};
sum.mensaje = "Hola mundo";

const enumerador = (x, y) => {
    return () => {
      let res = [];
      if(!y){
      for (let i = 0; i <= x; i++) {
        res[i] = x - i;
      }
    }else{
        for (let j = 0; j <= x-y; j++){
            res [j] = x-j; 
        }
    }
      return res;
    };
  };

console.log(enumerador(10, 7)());


/*const enumerador2 = () => {
    return (numero) => {
      let res = [];
      for (let i = 1; i <= numero; i++) {
        res[i - 1] = numero - i;
      }
      return res;
    }
  };

  console.log(enumerador2()(5));*/

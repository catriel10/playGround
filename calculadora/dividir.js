function dividir ([numero1,numero2]){

    if (numero1 & numero2 > 0){
       let divido = (numero1 , numero2) => numero1 / numero2;
        console.log (divido (numero1,numero2));
    } else {
       return console.log ("No se puede dividir por cero") 
    } 
    };
    
module.exports = dividir;
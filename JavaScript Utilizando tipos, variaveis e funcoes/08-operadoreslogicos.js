const notaFinal = 7;
const faltas = 3;
const advertencias = 0;


if(notaFinal < 7 || faltas > 4){
    console.log("reprovado!!!");
}
if(notaFinal>= 7 && faltas <= 4){
    console.log("Aprovado!!!");
}

if(faltas >=2 && !advertencias){
    console.log("Recebeu Bônus");
}else{
    console.log("Não recebeu bônus");
}
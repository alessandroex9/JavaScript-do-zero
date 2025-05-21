function maiorNumero(a, b, c){
    if(a > b && a > c){
        console.log("O primeiro número é maior");
    }else if(b > a && b > c){
        console.log("O segundo número é maior");
    }else if(c > a && c > b){
        console.log("O terceiro número é maior");
    }else{
        console.log("Nenhum número é maior");
    }
}

maiorNumero(1, 2, 3);
maiorNumero(5000, 8, 100);
maiorNumero(4, 100, 100);
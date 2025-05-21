const usuario = "Alessandro";
const logado = true;
const administrador = true;

console.log(`Olá ${usuario}`);

if (logado && administrador){
    console.log("Você tem permisão!");
}else{
    console.log("Você não tem permisão!");
}
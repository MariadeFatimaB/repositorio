function validarEmail(email) {
    if(email.includes("@")) // se tem @
        return console.log("O e-mail tem \"@\"");
    else                    // senão, então
        return console.log("insira @");
}
function validarTelefone(telefone){
   
   if(telefone.includes())
    // return ;}
    /*
    se (condicao){
        return console.log("mensagem");
    }
    senão{
        return console.log("mensagem se não for válido");
    }
    */
    // String(telefone).length === 11


function validarIdade(idade) {
    return idade >= 18;
}
module.exports = {
    validarEmail,
    validarTelefone,
    validarIdade
}

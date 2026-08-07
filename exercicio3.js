async function requisicao(){
    const dados = await new Promise( (resolve) => {
        setTimeout(() =>{
            resolve(
            {
                id:1,
                nome:"Maria",
                email:"Maria@123.com"
            });
        },2000);    
});
console.log("dados recebidos", dados);
return dados;
}
const dadosrecebidos = requisicao();
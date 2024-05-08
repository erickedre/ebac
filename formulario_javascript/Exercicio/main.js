const form = document.getElementById('form-deposito');

function validaNumero(CampoA,CampoB) {
    if (parseFloat(CampoA.value) < parseFloat(CampoB.value))
        return true;
    else
        return false;

}
form.addEventListener('submit', function(e){
    let verifique = false;
    e.preventDefault();
    const CampoA = document.getElementById('Campo-A');
    const CampoB = document.getElementById('Campo-B')
    const mensagemSucesso = `O número do Campo B: <b>${CampoB.value}</b>  do que o número do Campo A: <b>${CampoA.value}</b>.`;
    verifique = validaNumero(CampoA,CampoB);
    const mensagemErro = `O número do Campo A: <b>${CampoA.value}</b> é maior do que o número do Campo B: <b>${CampoB.value}</b>.`;
    if (verifique) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        CampoA.value='';
        CampoB.value='';
    }
    else{
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        CampoA.value='';
        CampoB.value='';
    }
})
console.log(form);
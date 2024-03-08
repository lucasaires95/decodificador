function exibirNaTela(tag,texto){
    let campo = document.querySelector(tag);
        campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirNaTela('p','Você não tem nenhuma Mensagem');
}

mensagemInicial();

function encriptar(){
    let frase = document.querySelector('input').value;
    let novaFrase = frase.replace(/[aeiou]/g, function(match) {
        switch (match) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
        }
    });

    if (novaFrase) {
        exibirNaTela('p', novaFrase);
        document.getElementById('desencriptar').removeAttribute('disabled');
    }
    
}

function desencriptar(){
    let frase = document.querySelector('input').value;
    let reverter = frase.replace(/(ai|enter|imes|ober|ufat)/g, function(match) {
        switch (match) {
            case 'ai': return 'a';
            case 'enter': return 'e';
            case 'imes': return 'i';
            case 'ober': return 'o';
            case 'ufat': return 'u';
        }
    });

    if (reverter) {
        exibirNaTela('p', reverter);
        document.getElementById('desencriptar').removeAttribute('disabled');
    }
    
}

function copiarTexto(){
   let texto = document.getElementById('textoEncriptado').innerText;
    navigator.clipboard.writeText(texto)
}

function gerarFraseAleatoria() {
    //let frases = $.get('http://localhost:3000/frases');
    const spinner = $('#spinner');
    spinner.show();
    $.get('http://localhost:3000/frases', data => {
        const rand = Math.floor(Math.random() * data.length);
        const frase = data[rand].texto;
        $('.frase').text(frase);
        $('#tempo-digitacao').text(data[rand].tempo);
        atualizaNumeroPalavras(frase);
    }).fail(()=> {
        $('#erro').show();
        const hideError =  setTimeout(()=>{
            $("#erro").hide();
            clearTimeout(hideError);
        },5000);
    }).always(()=>{
        spinner.hide();
    });
}


$('#atualiza-frase').stop().click(gerarFraseAleatoria);
function atualizaNumeroPalavras(palavra) {
    const qtTamanhoFrase= $('#tamanho-frase');
    qtTamanhoFrase.text(palavra.split(/\S+/).length-1);
}
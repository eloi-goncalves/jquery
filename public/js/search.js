const spinner = $('#spinner');

$("#busca-frase").click(()=>{
    const fraseBusca = $('#frase-id').val();
    if (fraseBusca) {
        const params = {id : fraseBusca};
        spinner.show();
        buscarFrase(params);
    } else {
        alert('Por favor informe um valor a ser buscado');
    }
});

function buscarFrase(params) {
    $.get('http://localhost:3000/frases', params,(data,textStatus) => {
        $('.frase').text(data.texto);
        $('#tempo-digitacao').text(data.tempo);
        atualizaNumeroPalavras(data.texto);
    }).fail(()=>{
        console.log('Não foi possível encontrar a frase desejada');
    }).always(()=>{
        spinner.hide();
    });
}

function atualizaNumeroPalavras(palavra) {
    const qtTamanhoFrase= $('#tamanho-frase');
    qtTamanhoFrase.text(palavra.split(/\S+/).length-1);
}



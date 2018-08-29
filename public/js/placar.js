function removerLinha() {
    event.preventDefault();
    const linha =     $(event.currentTarget).parent().parent();
    /*Primeiro vou dar um fadeOut*/
    linha.fadeOut();

    /*Remover em seguida*/
    const remover = setInterval(()=> {
        linha.remove();
        clearInterval(remover); 
    }, 3000);

    
}

function adicionarRegistro(usuario, qtPalavras) {
 //Inserir botão remover.
 const botaoRemoveStr = `<a href="#" class="remove-button"><i class="material-icons">delete</i></a>`;

 const linha = $('<tr>');
 const _usuario = $('<td>').text(usuario);
 const _qtPalavras = $('<td>').text(qtPalavras);
 //const _botaoRemover = $('td').html(botaoRemoveStr);
 const _botaoRemover = $('<td></td>');
 const link = $('<a>').addClass('remove-button').attr('href','#');
 const icone = $('<i>').addClass('material-icons').text('delete');

 link.prepend(icone);
 _botaoRemover.prepend(link);
 linha.prepend(_botaoRemover);
 linha.prepend(_qtPalavras);
 linha.prepend(_usuario);
 linha.find('.remove-button').click(removerLinha);
 return linha;

}


function inserePlacar() {
    const qtPalavras = $('.campo-digitacao').val().split(/\S+/).length -1;
    const tabela = $('.placar').find('#table-placar').find('tbody');
    const usuario = 'Maria';
    //Inserir botão remover.

    //const botaoRemover = `<a href="#" class="remove-button"><i class="material-icons">delete</i></a>`;
    const linha = adicionarRegistro(usuario,qtPalavras);
    tabela.append(linha[0]);
}


$('#mostrar-placar').click((event)=> {
    /*Usa-se o Stop em caso do usuário ficar apertando várias vezes o evento*/
    $('.placar').stop().slideToggle(200);
    /* Transição para baixo 
   $('.placar').slideDown(2000); */
   /* Display none ou block automaticamente
    $('.placar').toggle();*/
});
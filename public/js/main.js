const qtFrase = $('.frase').text().split(' ').length;
const tamanhoFrase = $('#tamanho-frase').text(qtFrase);
const buttonReiniciarJogo = $('#reiniciar-jogo');
var tempoDigitacao = $('#tempo-digitacao').text();
const tempoInicial = 30;
const textArea = $('.campo-digitacao');

$(document).ready(()=>{
    textArea.one('focus', ()=>{
        var timerEvent = setInterval(()=>{
            if (tempoDigitacao <= 0) {
                buttonReiniciarJogo.attr('disabled',false);
                textArea.attr('disabled',true);
                textArea.toggleClass('campo-digitacao-desabilitado');
                clearInterval(timerEvent);
            } else {
                tempoDigitacao -= 1;
                $('#tempo-digitacao').text(tempoDigitacao);
            }
        },1000)
    });
});

function verificaDigitacao() {
    const tamanhoDigitado = textArea.val().length;
    const frase = $('.frase').text().substring(0,tamanhoDigitado);
    
    if (textArea.val() === frase) {
        textArea.removeClass('campo-digitacao-errado');
        textArea.addClass('campo-digitacao-certo');
    } else {
        textArea.removeClass('campo-digitacao-certo');
        textArea.addClass('campo-digitacao-errado');
    }
}
    

textArea.on('input', () => { 
    const contFrase = textArea.val().split(/\S+/).length -1;
    const contCaracters = textArea.val().length;
    $('#contador-palavras').text(contFrase);
    $('#contador-caracteres').text(contCaracters);
    verificaDigitacao();
});

buttonReiniciarJogo.on('click', ()=>{
    inserePlacar();
    $('#tempo-digitacao').text(tempoInicial);
    textArea.attr('disabled',false);
    textArea.val('');
    buttonReiniciarJogo.attr('disabled',true);
    $('#contador-palavras').text('0');
    $('#contador-caracteres').text('0');
    textArea.toggleClass('campo-digitacao-desabilitado');
});


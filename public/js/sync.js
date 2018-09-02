$('#sync').on('click',register);

function register(){
    const placar =  []
    $('tbody>tr').each((index, element)=>{
        const user = $(element).find('td:nth-child(1)').text();
        const pts = $(element).find('td:nth-child(2)').text();
        var score = {usuario: user, pontos: pts};
        placar.push(score);
    });             

    const dados =  { placar: placar };
                         
    $.post('http://localhost:3000/placar', dados ,(response) => {
            console.log(response);
    }).fail(()=>{
        console.log('Falhou');
    })
}

$(document).ready(function() {
    $('#botao').click(function() {
        console.log('Botão clicado!')
        $('form').slideDown();
    });
    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefa = $('#input').val();
        if (tarefa.trim() !== '') {
            const novaTarefa = $('<li style="display:none"> </li>').text(tarefa);
            $('#lista').append(novaTarefa);
            novaTarefa.fadeIn();
            $('#input').val('');
            novaTarefa.on('click', function() {
                $(this).toggleClass('concluida');
            });
        }
    });
});

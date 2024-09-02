$(document).ready(function() {
    // Adicionar tarefa
    $('#form-tarefa').submit(function(event) {
        event.preventDefault();
        var tarefa = $('#nome_da_tarefa').val();
        if (tarefa !== '') {
            $('#lista-tarefas').append('<li>' + tarefa + '</li>');
            $('#nome_da_tarefa').val('');
        }
    });

    $('#botao-limpar').click(function() {
        $('#lista-tarefas').empty();
        $("h2").slideUp("slow");
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
    $("#adicionar").click(function(){
        $("h2").slideDown("slow");
    });

});
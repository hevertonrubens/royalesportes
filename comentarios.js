function enviarComentario() {
    alert('Função enviarComentario() chamada.');

    var nome = document.getElementById('inputNome').value;
    var sobrenome = document.getElementById('inputSobrenome').value;
    var comentario = document.getElementById('exampleFormControlTextarea1').value;

    alert('Nome: ' + nome + '\nSobrenome: ' + sobrenome + '\nComentário: ' + comentario);

    if (nome && sobrenome && comentario) {
        var listaComentarios = document.getElementById('listaComentarios');
        var novoComentario = document.createElement('li');
        novoComentario.textContent = nome + ' ' + sobrenome + ': ' + comentario;
        listaComentarios.appendChild(novoComentario);

        // Limpar campos após o envio
        document.getElementById('inputNome').value = '';
        document.getElementById('inputSobrenome').value = '';
        document.getElementById('exampleFormControlTextarea1').value = '';

        // Mostrar a aba de Comentários
        document.getElementById('comentariosAba').style.display = 'block';
    } else {
        alert('Preencha todos os campos obrigatórios.');
    }

    document.addEventListener('DOMContentLoaded', function () {
        var enviarBtn = document.getElementById('enviarBtn');
    
        if (enviarBtn) {
            enviarBtn.addEventListener('click', function (event) {
                event.preventDefault(); // Prevenir o comportamento padrão do formulário
                enviarComentario();
            });
        } else {
            alert('Botão de enviar não encontrado.');
        }
    });
}

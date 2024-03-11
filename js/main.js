$(document).ready(function() {

$('#campoTelefone').mask('(00) 00 0 0000-0000');

$('#campoCpf').mask('000.000.000-00');

$('#campoCep').mask('00000-000');

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        cpf: {
            required: true
        },
        email: {
            required: true
        },
        telefone: {
            required: true
        },
        endereço: {
            required: true
        },
        cep: {
            required: true
        }
    },
    messages: {
        nome: 'Por favor, insira seu NOME COMPLETO.',
        cpf: 'Por favor, digite seu CPF.',
        email: 'Por favor, insira um EMAIL.',
        telefone: 'Por favor, adicione um CONTATO.',
        endereço: 'Por favor, digite seu ENDEREÇO.',
        cep: 'Por favor, digite seu CEP.',
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposInvalidos = validador.numberOfInvalids();
        if (camposInvalidos) {
            alert(`Existem ${camposInvalidos} Campos não preenchidos.`)
        }
    }
})






})
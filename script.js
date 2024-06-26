document.getElementById('cta-button').addEventListener('click', function () {
    alert('Obrigado por seu interesse!');
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Agendamento concluído! Nós entraremos em contato para confirmar a consulta.');
});

const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    mensagem.textContent = `Olá, ${nome}! Seu formulário foi enviado com sucesso.`;
    mensagem.style.display = 'block';

   
    formulario.reset();

   
    mensagem.scrollIntoView({ behavior: 'smooth' });

   
    setTimeout(function() {
        mensagem.style.display = 'none';
    }, 3000); 
});
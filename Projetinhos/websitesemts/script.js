document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Aqui você pode implementar a lógica para enviar os dados para o servidor

        // Exibe uma mensagem de confirmação
        alert(`Obrigado pelo seu contato, ${nome}! \nNós entraremos em contato em breve.`);
        
        // Limpa o formulário
        form.reset();
    });
});
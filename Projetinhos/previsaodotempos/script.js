const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; // Insira sua chave API do OpenWeatherMap
const buscarButton = document.getElementById('buscar');
const cidadeInput = document.getElementById('cidade');
const resultadoDiv = document.getElementById('resultado');

buscarButton.addEventListener('click', () => {
    const cidade = cidadeInput.value;
    if (cidade) {
        buscarPrevisao(cidade);
    } else {
        alert('Por favor, insira o nome de uma cidade.');
    }
});

async function buscarPrevisao(cidade) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error('Cidade não encontrada');
        }
        const dados = await resposta.json();
        exibirResultado(dados);
    } catch (error) {
        resultadoDiv.innerHTML = `<p>${error.message}</p>`;
    }
}

function exibirResultado(dados) {
    const { main, weather, name } = dados;
    const resultadoHTML = `
        <h2>Previsão para ${name}</h2>
        <p>Temperatura: ${main.temp}°C</p>
        <p>Condição: ${weather[0].description}</p>
        <p>Umidade: ${main.humidity}%</p>
    `;
    resultadoDiv.innerHTML = resultadoHTML;
}
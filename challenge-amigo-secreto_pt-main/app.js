// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Validar a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Adicionar o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpar o campo de entrada
    inputAmigo.value = '';

    // Atualizar a lista visível
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    // Obter o elemento da lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpar a lista existente para evitar duplicados
    listaAmigos.innerHTML = '';

    // Percorrer o array e adicionar cada amigo como um elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        listaAmigos.appendChild(itemLista);
    }

    // Limpar o resultado anterior quando a lista é atualizada
    document.getElementById('resultado').innerHTML = '';
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}

// Adicionar funcionalidade de pressionar Enter para adicionar amigo
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});

let postIndex = 0;
const postagens = [
    {
        titulo: "Postagem 1",
        conteudo: "Conteúdo da postagem 1.",
        categorias: ["Categoria 1"],
        tags: ["Tag1", "Tag2"]
    },
    {
        titulo: "Postagem 2",
        conteudo: "Conteúdo da postagem 2.",
        categorias: ["Categoria 2"],
        tags: ["Tag3"]
    },
    {
        titulo: "Postagem 3",
        conteudo: "Conteúdo da postagem 3.",
        categorias: ["Categoria 1", "Categoria 2"],
        tags: ["Tag1"]
    },
    {
        titulo: "Postagem 4",
        conteudo: "Conteúdo da postagem 4.",
        categorias: ["Categoria 3"],
        tags: ["Tag2", "Tag3"]
    },
    {
        titulo: "Postagem 5",
        conteudo: "Conteúdo da postagem 5.",
        categorias: ["Categoria 1"],
        tags: ["Tag1", "Tag2"]
    }
];

function carregarPostagens() {
    const main = document.getElementById('postagens');
    for (let i = 0; i < 2; i++) {
        if (postIndex < postagens.length) {
            const postagem = postagens[postIndex];
            const div = document.createElement('div');
            div.className = 'postagem';
            div.innerHTML = `
                <h2>${postagem.titulo}</h2>
                <p>${postagem.conteudo}</p>
                <div class="tags">Categorias: ${postagem.categorias.join(', ')} | Tags: ${postagem.tags.join(', ')}</div>
            `;
            main.appendChild(div);
            postIndex++;
        }
    }
    if (postIndex >= postagens.length) {
        document.getElementById('carregarMais').style.display = 'none';
    }
}

document.getElementById('carregarMais')
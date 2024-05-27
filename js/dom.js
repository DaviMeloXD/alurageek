import { deleteProduct } from './api.js';

export function appendProduct(produto) {
    const produtosFundo = document.querySelector('.produtos__fundo');
    
    const itemDiv = document.createElement('div');
    itemDiv.className = 'itens';
    itemDiv.innerHTML = `
        <img class="img__img" src="${produto.imagem}" alt="${produto.nome}">
        <p>${produto.nome}</p>
        <div class="trash">
            <p>R$ ${produto.preco}</p>
            <img src="./trash.svg" alt="Excluir">
        </div>
    `;

    itemDiv.querySelector('.trash img').addEventListener('click', () => {
        deleteProduct(produto.id)
            .then(() => itemDiv.remove())
            .catch(error => console.error('Error deleting product:', error));
    });

    produtosFundo.appendChild(itemDiv);
}

export function clearForm() {
    document.querySelector('[data-nome]').value = '';
    document.querySelector('[data-valor]').value = '';
    document.querySelector('[data-imagem]').value = '';
}

import { addProduct } from './api.js';
import { appendProduct, clearForm } from './dom.js';

export function setupFormHandlers() {
    document.querySelector('.button__a').addEventListener('click', (event) => {
        event.preventDefault();

        const nome = document.querySelector('[data-nome]').value;
        const preco = document.querySelector('[data-valor]').value;
        const imagem = document.querySelector('[data-imagem]').value;

        addProduct({ nome, preco, imagem })
            .then(produto => {
                appendProduct(produto);
                clearForm();
            })
            .catch(error => console.error('Error adding product:', error));
    });

    document.querySelector('.button__b').addEventListener('click', clearForm);
}

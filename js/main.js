import { fetchProducts } from './api.js';
import { appendProduct } from './dom.js';
import { setupFormHandlers } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts()
        .then(products => products.forEach(appendProduct))
        .catch(error => console.error('Error fetching products:', error));

    setupFormHandlers();
});

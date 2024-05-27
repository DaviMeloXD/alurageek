const API_URL = 'http://localhost:3000/produtos';

export function fetchProducts() {
    return fetch(API_URL)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}

export function addProduct(product) {
    return fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error adding product:', error);
        throw error;
    });
}

export function deleteProduct(id) {
    return fetch(`${API_URL}/${id}`, { method: 'DELETE' })
        .then(response => {
            if (!response.ok) throw new Error('Error deleting product');
        })
        .catch(error => {
            console.error('Error deleting product:', error);
            throw error;
        });
}

export const getProducts = (req, res) => {
    res.send('obteniendo productos');
}

export const getOneProduct = (req, res) => {
    res.send('obteniendo un solo producto');
}

export const createProduct = (req, res) => {
    res.send('creando un producto');
}

export const updateProduct = (req, res) => {
    res.send('actualizando un producto');
}

export const deleteProduct = (req, res) => {
    res.send('eliminando un producto');
}
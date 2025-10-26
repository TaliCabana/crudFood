const productosBackend = import.meta.env.VITE_API_PRODUCTOS

console.log(productosBackend)

export const listarProductos = async () => {
    try{
        const respuesta = await fetch(productosBackend)
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.error(error)
        return null // si retorna nulo es xq algo falló
    }
}

export const obtenerProductosPorID = async (id) => {
    try{
        const respuesta = await fetch (`${productosBackend}/${id}`)
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.error(error)
        return null // si retorna nulo es xq algo falló
    }
}

export const crearProducto = async (producto) => {
    try{
        const respuesta = await fetch (productosBackend, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(producto)
        })
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.error(error)
        return null // si retorna nulo es xq algo falló
    }
}

export const editarProductoAPI = async (id, producto) => {
    try{
        const respuesta = await fetch (productosBackend+'/'+id, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(producto)
        })
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.error(error)
        return null // si retorna nulo es xq algo falló
    }
}
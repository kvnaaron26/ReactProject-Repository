import './styles.css';
import React from 'react'


function ItemList () {

    const [producto, setProducto] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const users = await data.json()
        setProducto(users)
    }

    return (
        <div>
            <h1>Catalogo</h1>
                {
                    producto.map(item => (
                        <li key={item.id}>
                        {item.name} - {item.email}
                        </li>
                    ))
                }
        </div>
    )
}
export default ItemList;
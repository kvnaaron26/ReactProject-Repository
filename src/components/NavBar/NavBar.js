import "./NavBar.css";
import CartWidget from "./CartWidget";

function NavBar () {
    return <>
        <div>
            <nav className="Navigation">
                <ul>
                    <li>Home</li>
                    <li>Productos</li>
                    <li>Informacion</li>
                    <li>Contacto</li>
                    <li> 
                        <CartWidget />
                        <ItemListContainer />
                    </li>
                </ul>
            </nav>
        </div>
    </>
};

export default NavBar;

function ItemListContainer () {
    return (
        <p>5 Items</p>
    )
};


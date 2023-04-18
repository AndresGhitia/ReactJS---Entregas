import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h1>GUMO EFECTOS</h1>
            <div>
                <button>Distorsiones</button>
                <button>Modulaciones</button>
                <button>Delays</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
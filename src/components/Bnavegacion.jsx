
import { Link } from "react-router-dom";
import "./Bnavegacion.css"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/logo-elite.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";




function Bnavegacion() {
    // Estado del carrito
    const {cart, setCart, addToCart} = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);

    // Función para agregar un producto al carrito
    const agregarProducto = (producto) => {
        addToCart(producto);
    };

    // Función para abrir y cerrar el modal del carrito
    const toggleCart = () => setShowCart(!showCart);





    const sumarProducto = (index) => {
        setCart(cart.map((producto, i) =>
            i === index ? { ...producto, cantidad: producto.cantidad + 1 } : producto
    ));
    };

    const restarProducto = (index) => {
        setCart(cart.map((producto, i) =>
            i === index && producto.cantidad > 1 ? { ...producto, cantidad: producto.cantidad - 1 }
                : producto
        ));
    };

    const eliminarProducto = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    const borrarPedidos = () => {
        setCart([]);
    };

    const ordenarPedidos = () => {
        console.log('Ordenar pedidos', cart);
    };




    //*const [isOpen, setIsOpen] = useState(false);

    //*const toggleMenu = () => {
       //* setIsOpen(!isOpen);
    //*};


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Navbar
                collapseOnSelect
                expand=""
                className="navbar-dark bg-dark fixed-top"
                style={{ paddingLeft: "15px", paddingRight: "15px" }}
                id="Bnavegacion"
            >
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        width="150"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                {/*<div className="pedido" onClick={toggleCart}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M22.312,19.519l-5.002,4.481H1s1.114-4.273,1.153-4.375c.612-2.131,2.551-3.625,4.79-3.625h5.776c1.06,0,1.922,.862,1.922,1.922,0,.95-.709,1.769-1.65,1.902l-4.798,.686,.283,1.98,4.798-.686c1.392-.199,2.526-1.135,3.05-2.371l3.333-2.934c.838-.73,2.109-.641,2.838,.197h0c.723,.832,.642,2.091-.182,2.822Zm.282-7.519c-.748-4.568-4.37-8.157-8.951-8.863,0,0,0,0,0,0,.224-.323,.357-.714,.357-1.137,0-1.105-.895-2-2-2s-2,.895-2,2c0,.423,.133,.814,.357,1.137h0C5.776,3.843,2.154,7.432,1.406,12H0v2H24v-2h-1.406Z"
                            fill="#E8E8E8"
                        />
                    </svg>

                    {cart.length > 0 && (
                        <span className="contador">{cart.length}</span>
                    )}
                </div>*/}

                <input
                    type="checkbox"
                    id="checkbox"
                    checked={isOpen}
                    onChange={toggleMenu}
                />
                <label htmlFor="checkbox" className="toggle">
                    <div class="bars" id="bar1"></div>
                    <div class="bars" id="bar2"></div>
                    <div class="bars" id="bar3"></div>
                </label>

                <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to="/cervezas"
                            onClick={handleNavLinkClick}
                        >
                            Cervezas
                        </Nav.Link>
                        {/*<Nav.Link
                            as={Link}
                            to="/bebidas_calientes"
                            onClick={handleNavLinkClick}
                        >
                            Bebidas Calientes
                        </Nav.Link>*/}
                        <Nav.Link
                            as={Link}
                            to="/bebidas_sin_alcohol"
                            onClick={handleNavLinkClick}
                        >
                            Bebidas Sin Alcohol
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/snacks"
                            onClick={handleNavLinkClick}
                        >
                            Snacks
                        </Nav.Link>
                        {/*<Nav.Link
                            as={Link}
                            to="/shots"
                            onClick={handleNavLinkClick}
                        >
                            Shots
                        </Nav.Link>*/}
                        <Nav.Link
                            as={Link}
                            to="/licores"
                            onClick={handleNavLinkClick}
                        >
                            Licores y Aperitivos
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="https://tally.so/r/3Njg2j"
                            onClick={handleNavLinkClick}
                        >
                            Pide tu Canción
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Modal
                show={showCart}
                onHide={toggleCart}
                centered
                className="modal_pedido"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tu pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cart.length === 0 ? (
                        <p>No tienes pedidos.</p>
                    ) : (
                        <ul>
                            {cart.map((producto, index) => (
                                <li key={index}>
                                    <img
                                        src={producto.img}
                                        alt={producto.titulo}
                                    />
                                    <div className="text_contend">
                                        <h5>{producto.titulo}</h5>
                                        <p>{producto.precio}</p>
                                        <div className="btn_sr">
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() =>
                                                    restarProducto(index)
                                                }
                                            >
                                                -
                                            </Button>
                                            <span>{producto.cantidad}</span>
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() =>
                                                    sumarProducto(index)
                                                }
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="eliminarP">
                                        <Button
                                            size="sm"
                                            onClick={() =>
                                                eliminarProducto(index)
                                            }
                                        >
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="45px"
                                                    height="45px"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        fill-rule="evenodd"
                                                        d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-5-8h10v-2H7z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={borrarPedidos}>
                        Borrar
                    </Button>
                    <Button variant="primary" onClick={ordenarPedidos}>
                        Ordenar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Bnavegacion
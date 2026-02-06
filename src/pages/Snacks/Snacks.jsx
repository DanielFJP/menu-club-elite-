import React, { useContext } from "react";
import "./Snacks.css";
import MobileContent from "../../components/MobileContent";
import Navbar from "../../components/Bnavegacion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../components/CartContext";
import Footer from "../../components/footer";

import todorico from "../../img/snacks/todo_rico.webp";
import detodito from "../../img/snacks/de_todito.webp";
import todoriconatural from "../../img/snacks/todo_rico_natural.png"
import todorico45g from "../../img/snacks/todo_rico_45g.png";
import todorico150g from "../../img/snacks/todo_rico_150g.png";


const snacks = [
    
    {
        id: 1,
        img: todorico45g,
        titulo: "Todo Rico 45g",
        precio: "$4.500",
        disponible: true,
    },
    {
        id: 2,
        img: todorico150g,
        titulo: "Todo Rico 150g",
        precio: "$12.000",
        disponible: true,
    },
];

export default function () {

const { addToCart } = useContext(CartContext);

    return (
        <div>
            <MobileContent />
            <Navbar />

            <div className="contenido-snacks">
                <Row xs={1} md={2} className="g-4 m-1">
                    {snacks.map((producto) => (
                        <Col key={producto.id}>
                            <Card>
                                <div className="cardd_snacks">
                                    {!producto.disponible && (
                                        <div className="no-disponible">
                                            No Disponible
                                        </div>
                                    )}
                                    <div className="image_snacks">
                                        <img
                                            src={producto.img}
                                            alt={producto.titulo}
                                            style={{
                                                filter: producto.disponible
                                                    ? "none"
                                                    : "grayscale(100%)",
                                            }}
                                        />
                                    </div>
                                    <div className="text_snacks">
                                        <span>{producto.titulo}</span>
                                        <p>{producto.precio}</p>
                                    </div>
                                    {/*<button
                                        className="ordenar-btn"
                                        onClick={() => addToCart(producto)}
                                    >
                                        Ordenar
                                    </button>*/}
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

             <Footer/>
        </div>
    );
}

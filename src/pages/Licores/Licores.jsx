import React, { useContext } from "react";
import "./Licores.css";
import MobileContent from "../../components/MobileContent";
import Navbar from "../../components/Bnavegacion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../components/CartContext";

import cuates from "../../img/licores/cuates.png";


const licores = [
    {
        id: 1,
        img: cuates,
        titulo: "Los Cuates x269ml",
        descripcion: "Aperitivo Los Cuates Con Tequila, 4% v/v.",
        precio: "$8.000",
        disponible: true,
    },
];

export default function () {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <MobileContent />
            <Navbar />

            <div className="contenido-licores">
                <Row xs={1} md={2} className="g-4 m-1">
                    {licores.map((producto) => (
                        <Col key={producto.id}>
                            <Card>
                                <div className="cardd_licores">
                                    {!producto.disponible && (
                                        <div className="no-disponible">
                                            No Disponible
                                        </div>
                                    )}
                                    <div className="image_licores">
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
                                    <div className="text_licores">
                                        <span>{producto.titulo}</span>
                                        <p>{producto.descripcion}</p>
                                        <span>{producto.precio}</span>
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
        </div>
    );
}

import React, { useContext } from "react";
import "./Bcalientes.css";
import MobileContent from "../../components/MobileContent";
import Navbar from "../../components/Bnavegacion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../components/CartContext";

import tinto from "../../img/bebidas-calientes/tinto.webp";
import latte_6onz from "../../img/bebidas-calientes/latte_6onz.webp";
import latte_9onz from "../../img/bebidas-calientes/latte_9onz.webp";
import capuchino from "../../img/bebidas-calientes/capuchino.webp";

import aromatica_6onz from "../../img/bebidas-calientes/aromatica_6onz.webp";
import aromatica_9onz from "../../img/bebidas-calientes/aromatica_9onz.webp";

import capuchino_con_licor from "../../img/bebidas-calientes/capuchino_con_licor.webp";
import vino_caliente from "../../img/bebidas-calientes/vino_caliente.png";

const cafes = [
    {
        id: 1,
        img: tinto,
        titulo: "Americano 6onz",
        descripcion: "Café negro suave, perfecto para cualquier momento",
        precio: "$2.000",
        disponible: true,
    },
    {
        id: 2,
        img: latte_6onz,
        titulo: "Latte 6onz",
        descripcion: "Café espresso con leche vaporizada, cremoso y balanceado",
        precio: "3.500",
        disponible: true,
    },
    {
        id: 3,
        img: latte_9onz,
        titulo: "Latte 9onz",
        descripcion: "Café espresso con leche vaporizada, cremoso y balanceado",
        precio: "4.500",
        disponible: true,
    },
    {
        id: 4,
        img: capuchino,
        titulo: "Capuchino",
        descripcion: "Espresso, leche vaporizada y espuma de leche, tricolor.",
        precio: "$6.000",
        disponible: true,
    },
    {
        id: 5,
        img: capuchino,
        titulo: "Capuchino 12onz",
        descripcion: "Espresso, leche vaporizada y espuma de leche, tricolor.",
        precio: "$7.000",
        disponible: true,
    }
];

const aromaticas = [
    {
        id: 1,
        img: aromatica_6onz,
        titulo: "Aromatica 6onz",
        descripcion:
            "Bebida caliente de frutas o hierbas naturales, reconfortante y refrescante.",
        precio: "$2.000",
        disponible: true,
    },
    {
        id: 2,
        img: aromatica_9onz,
        titulo: "Aromatica 9onz",
        descripcion:
            "Bebida caliente de frutas o hierbas naturales, reconfortante y refrescante.",
        precio: "$3.500",
        disponible: true,
    },
];

const con_alcohol = [
    {
        id: 1,
        img: capuchino_con_licor,
        titulo: "Capuchino Con Licor",
        descripcion:
            "Capuchino clásico con un toque de brandy para calentar el alma, 3% v/v.",
        precio: "$10.000",
        disponible: true,
    },
    {
        id: 2,
        img: vino_caliente,
        titulo: "Vino Caliente",
        descripcion:
            "Vino tinto especiado con canela, clavos y cítricos, ideal para noches frías, 15.5% v/v.",
        precio: "$10.000",
        disponible: true,
    },
];

export default function () {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <MobileContent />
            <Navbar />

            <div className="contenido-Bcalientes">
                <Tabs
                    defaultActiveKey="cafes"
                    transition={true}
                    id="noanim-tab-example"
                    className="mb-1 d-flex justify-content-center bg-dark tabs"
                >
                    <Tab eventKey="cafes" title="Cafes">
                        <Row xs={2} md={2} className="g-4 m-1">
                            {cafes.map((producto) => (
                                <Col key={producto.id}>
                                    <Card>
                                        <div className="cardd_cafes">
                                            {!producto.disponible && (
                                                <div className="no-disponible">
                                                    No Disponible
                                                </div>
                                            )}
                                            <div className="image_cafes">
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
                                            <div className="text_cafes">
                                                <span>{producto.titulo}</span>
                                                <p>{producto.descripcion}</p>
                                                <span>{producto.precio}</span>
                                            </div>
                                            {/*<button
                                                className="ordenar-btn"
                                                onClick={() =>
                                                    addToCart(producto)
                                                }
                                            >
                                                Ordenar
                                            </button>*/}
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Tab>
                    <Tab eventKey="aromaticas" title="Aromaticas">
                        <Row xs={1} md={2} className="g-4 m-1">
                            {aromaticas.map((producto) => (
                                <Col key={producto.id}>
                                    <Card>
                                        <div class="cardd_arm">
                                            {!producto.disponible && (
                                                <div className="no-disponible">
                                                    No Disponible
                                                </div>
                                            )}
                                            <div className="image_arm">
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
                                            <div className="text_arm">
                                                <span>{producto.titulo}</span>
                                                <p>{producto.descripcion}</p>
                                                <span>{producto.precio}</span>
                                            </div>
                                            {/*<button
                                                className="ordenar-btn"
                                                onClick={() =>
                                                    addToCart(producto)
                                                }
                                            >
                                                Ordenar
                                            </button>*/}
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Tab>
                    <Tab eventKey="con_alcohol" title="Con Alcohol">
                        <Row xs={1} md={2} className="g-4 m-1">
                            {con_alcohol.map((producto) => (
                                <Col key={producto.id}>
                                    <Card>
                                        <div class="cardd_alh">
                                            {!producto.disponible && (
                                                <div className="no-disponible">
                                                    No Disponible
                                                </div>
                                            )}
                                            <div className="image_alh">
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
                                            <div className="text_alh">
                                                <span>{producto.titulo}</span>
                                                <p>{producto.descripcion}</p>
                                                <span>{producto.precio}</span>
                                            </div>
                                            {/*<button
                                                className="ordenar-btn"
                                                onClick={() =>
                                                    addToCart(producto)
                                                }
                                            >
                                                Ordenar
                                            </button>*/}
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

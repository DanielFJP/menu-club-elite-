import React, { useContext } from "react";
import "./vinos.css";
import MobileContent from "../../components/MobileContent";
import Navbar from "../../components/Bnavegacion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../components/CartContext";
import Footer from "../../components/footer";

import cabernet from "../../img/vinos/cabernet.png";
import carmenere from "../../img/vinos/carmenere.png";
import malbec from "../../img/vinos/malbec.png";
import merlot from "../../img/vinos/merlot.png";
import copa_vino from "../../img/vinos/copa_de_vino.png";
import copa_vino_caliente from "../../img/vinos/copa_vino_caliente.png";
import botella_vino_caliente from "../../img/vinos/botella_vino_caliente.png";


const vinos = [
    {
        id: 1,
        img: copa_vino,
        titulo: "Copa de Vino",
        descripcion:
            "Copa de vino (Merlot, Malbec, Carmenere o Cabernet)",
        precio: "12.000",
        disponible: true,
    },
    {
        id: 2,
        img: cabernet,
        titulo: "Concha y Toro Reservado - Cabernet Sauvignon",
        descripcion:
            "El más fuerte y estructurado. Se siente más seco, con sabores más marcados a frutas oscuras y un final más intenso y duradero. Es el que más “presencia” tiene en boca.",
        precio: "60.000",
        disponible: true,
    },
    {
        id: 3,
        img: carmenere,
        titulo: "Concha y Toro Reservado - Carmenere",
        descripcion:
            "Equilibrado y elegante. Tiene notas de frutos rojos con un ligero toque especiado. No es tan fuerte como el Cabernet, pero tiene más estructura que el Merlot.",
        precio: "60.000",
        disponible: true,
    },
    {
        id: 4,
        img: malbec,
        titulo: "Concha y Toro Reservado - Malbec",
        descripcion:
            "Más intenso y jugoso. Se siente más profundo en boca, con sabor a mora, ciruela oscura y un toque ligeramente dulce. Tiene más cuerpo que el Merlot.",
        precio: "60.000",
        disponible: true,
    },
    {
        id: 5,
        img: merlot,
        titulo: "Concha y Toro Reservado - Merlot",
        descripcion:
            "Suave, ligero y muy fácil de tomar. Sabe a frutas rojas maduras como cereza y ciruela, con un final delicado y poco amargo. Ideal para quien quiere un vino amable y no muy fuerte.",
        precio: "60.000",
        disponible: true,
    },
];

const vino_caliente = [
    {
        id: 1,
        img: copa_vino_caliente,
        titulo: "Soda Italiana",
        descripcion:
            "Copa de vino caliente (Merlot, Malbec, Carmenere o Cabernet)",
        precio: "15.000",
        disponible: true,
    },
    {
        id: 2,
        img: botella_vino_caliente,
        titulo: "Botella de Vino Caliente",
        descripcion:
            "Botella de Vino Caliente preparado con la variedad de tu preferencia (Merlot, Malbec, Carmenere o Cabernet)",
        precio: "70.000",
        disponible: true,
    },
];

export default function () {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <MobileContent />
            <Navbar />

            <div className="contenido-vinos">
                <Tabs
                    defaultActiveKey="vinos"
                    transition={true}
                    id="noanim-tab-example"
                    className="mb-1 d-flex justify-content-center bg-dark tabs_cocteles"
                >
                    <Tab eventKey="vinos" title="Vinos">
                        <Row xs={1} md={2} className="g-4 m-1">
                            {vinos.map((producto) => (
                                <Col key={producto.id}>
                                    <Card>
                                        <div className="cardd_vinos">
                                            {!producto.disponible && (
                                                <div className="no-disponible">
                                                    No Disponible
                                                </div>
                                            )}
                                            <div className="image_vinos">
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
                                            <div className="text_vinos">
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
                    </Tab>

                    <Tab eventKey="vino_caliente" title="Vino Caliente">
                        <Row xs={1} md={2} className="g-4 m-1">
                            {vino_caliente.map((producto) => (
                                <Col key={producto.id}>
                                    <Card>
                                        <div className="cardd_vinos">
                                            {!producto.disponible && (
                                                <div className="no-disponible">
                                                    No Disponible
                                                </div>
                                            )}
                                            <div className="image_vinos">
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
                                            <div className="text_vinos">
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
                    </Tab>
                </Tabs>
            </div>

            <Footer />
        </div>
    );
}

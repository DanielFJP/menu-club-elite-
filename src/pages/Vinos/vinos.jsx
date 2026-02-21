import React, { useContext } from "react";
import "./cocteles.css";
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


const vinos = [
    {
        id: 1,
        img: cabernet,
        titulo: "Concha y Toro Reservado Cabernet Sauvignon",
        descripcion:
            "El más fuerte y estructurado. Se siente más seco, con sabores más marcados a frutas oscuras y un final más intenso y duradero. Es el que más “presencia” tiene en boca.",
        precio: "60.000",
        disponible: true,
    },
    {
        id: 2,
        img: carmenere,
        titulo: "Concha y Toro Reservado Carmenere",
        descripcion:
            "Equilibrado y elegante. Tiene notas de frutos rojos con un ligero toque especiado. No es tan fuerte como el Cabernet, pero tiene más estructura que el Merlot.",
        precio: "60.000",
        disponible: true,
    },
    {
        id: 3,
        img: malbec,
        titulo: "Concha y Toro Reservado Malbec",
        descripcion:
            "Más intenso y jugoso. Se siente más profundo en boca, con sabor a mora, ciruela oscura y un toque ligeramente dulce. Tiene más cuerpo que el Merlot.",
        precio: "60.000",
        disponible: true,
    },
    {
        id: 4,
        img: merlot,
        titulo: "Concha y Toro Reservado Merlot",
        descripcion:
            "Suave, ligero y muy fácil de tomar. Sabe a frutas rojas maduras como cereza y ciruela, con un final delicado y poco amargo. Ideal para quien quiere un vino amable y no muy fuerte.",
        precio: "60.000",
        disponible: true,
    },
    {
        id: 5,
        img: mojito,
        titulo: "Mojito",
        descripcion:
            "Refrescante y aromático. Ligero, chispeante y perfecto para toda la noche.",
        precio: "22.000",
        disponible: true,
    },
];

const vino_caliente = [
    {
        id: 1,
        img: sodas,
        titulo: "Soda Italiana",
        descripcion:
            "Burbujeante y ligera. Dulce fresca que invita a repetir, sabores a Cereza, Mango biche y Arándano",
        precio: "8.000",
        disponible: true,
    },
];

export default function () {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <MobileContent />
            <Navbar />

            <div className="contenido-cocteles">
                <Tabs
                    defaultActiveKey="cocteles"
                    transition={true}
                    id="noanim-tab-example"
                    className="mb-1 d-flex justify-content-center bg-dark tabs_cocteles"
                >
                    <Tab eventKey="cocteles" title="Cocteles">
                        <Row xs={1} md={2} className="g-4 m-1">
                            {cocteles.map((producto) => (
                                <Col key={producto.id}>
                                    <Card>
                                        <div className="cardd_cocteles">
                                            {!producto.disponible && (
                                                <div className="no-disponible">
                                                    No Disponible
                                                </div>
                                            )}
                                            <div className="image_cocteles">
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
                                            <div className="text_cocteles">
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

                    <Tab eventKey="sin_alcohol" title="Sin Alcohol">
                        <Row xs={1} md={2} className="g-4 m-1">
                            {sin_alcohol.map((producto) => (
                                <Col key={producto.id}>
                                    <Card>
                                        <div className="cardd_cocteles">
                                            {!producto.disponible && (
                                                <div className="no-disponible">
                                                    No Disponible
                                                </div>
                                            )}
                                            <div className="image_cocteles">
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
                                            <div className="text_cocteles">
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

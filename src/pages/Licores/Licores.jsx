import React, { useContext } from "react";
import "./Licores.css";
import MobileContent from "../../components/MobileContent";
import Navbar from "../../components/Bnavegacion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../components/CartContext";

import cuates from "../../img/licores/cuates.png";
import a_rojo_375 from "../../img/licores/aguardiente/antioqueño_rojo_375.png";
import a_rojo_750 from "../../img/licores/aguardiente/antioqueño_rojo_750.png";
import a_verde_375 from "../../img/licores/aguardiente/antioqueño_verde_375.png";
import a_verde_750 from "../../img/licores/aguardiente/antioqueño_verde_750.png";
import manzanares375 from "../../img/licores/aguardiente/manzanares_375.png";
import manzanares750 from "../../img/licores/aguardiente/manzanares_750.png";

import caldas_375 from "../../img/licores/ron/caldas_375.png";
import caldas_750 from "../../img/licores/ron/caldas_750.png";
import essencial_375 from "../../img/licores/ron/essencial_375.png";

import jose_cuervo_especial750 from "../../img/licores/tequila/jose_cuervo_especial_750.png";

import smirnoff_lulo375 from "../../img/licores/vodka/smirnoff_lulo_375.png";
import smirnoff_lulo750 from "../../img/licores/vodka/smirnoff_lulo_750.png";
import smirnoff_tamarindo from "../../img/licores/vodka/Smirnoff_Tamarindo.png";

import buchanans_deluxe375 from "../../img/licores/whisky/buchanans_deluxe375.png";
import buchanans_deluxe750 from "../../img/licores/whisky/buchanans_deluxe750.png";
import old_parr_750 from "../../img/licores/whisky/old_parr_750.png"

const aguardiente = [
    {
        id: 1,
        img: a_rojo_375,
        titulo: "Antioqueño Rojo 375ml",
        descripcion: "",
        precio: "48.000",
        disponible: true,
    },
    {
        id: 2,
        img: a_rojo_750,
        titulo: "Antioqueño Rojo 750ml",
        descripcion: "",
        precio: "85.000",
        disponible: true,
    },
    {
        id: 3,
        img: a_verde_375,
        titulo: "Antioqueño Verde 375ml",
        descripcion: "",
        precio: "48.000",
        disponible: true,
    },
    {
        id: 4,
        img: a_verde_750,
        titulo: "Antioqueño Verde 750ml",
        descripcion: "",
        precio: "85.000",
        disponible: true,
    },
    {
        id: 5,
        img: manzanares375,
        titulo: "Amarillo de Manzanares 375ml",
        descripcion: "",
        precio: "48.000",
        disponible: true,
    },
    {
        id: 6,
        img: manzanares750,
        titulo: "Amarillo de Manzanares 750ml",
        descripcion: "",
        precio: "85.000",
        disponible: true,
    },
];

const ron = [
    {
        id: 1,
        img: caldas_375,
        titulo: "Viejo de Caldas Tradicional 375ml",
        descripcion: "",
        precio: "50.000",
        disponible: true,
    },
    {
        id: 2,
        img: caldas_750,
        titulo: "Viejo de Caldas Tradicional 750ml",
        descripcion: "",
        precio: "90.000",
        disponible: true,
    },
    {
        id: 3,
        img: essencial_375,
        titulo: "Viejo de Caldas Essencial 375ml",
        descripcion: "",
        precio: "45.000",
        disponible: true,
    },
];

const vodka = [
    {
        id: 1,
        img: smirnoff_lulo375 ,
        titulo: "Smirnoff Lulo 375ml",
        descripcion: "",
        precio: "45.000",
        disponible: true,
    },
    {
        id:2 ,
        img:smirnoff_lulo750 ,
        titulo: "Smirnoff Lulo 750ml",
        descripcion: "",
        precio: "80.000",
        disponible: true,
    },
    {
        id: 3,
        img: smirnoff_tamarindo,
        titulo: "Smirnoff Tamarindo 750ml",
        descripcion: "",
        precio: "85.000",
        disponible: true,
    },
];

const tequila = [
    {
        id: 1,
        img: jose_cuervo_especial750,
        titulo: "Jose Cuervo Especial Reposado 750ml",
        descripcion: "",
        precio: "150.000",
        disponible: true,
    },
];

const whisky = [
    {
        id: 1,
        img: buchanans_deluxe375,
        titulo: "Buchanan's Deluxe 375ml",
        descripcion: "",
        precio: "139.000",
        disponible: true,
    },
    {
        id: 2,
        img: buchanans_deluxe750,
        titulo: "Buchanan's Deluxe 750ml",
        descripcion: "",
        precio: "239.000",
        disponible: false,
    },
    {
        id: 3,
        img: old_parr_750,
        titulo: "Old Parr 750ml",
        descripcion: "",
        precio: "229.000",
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
                <Tabs
                    defaultActiveKey="aguardiente"
                    transition={true}
                    id="noanim-tab-example"
                    className="mb-1 d-flex justify-content-center bg-dark tabs_licores"
                >
                    <Tab eventKey="aguardiente" title="Guaro">
                        <Row xs={2} md={2} className="g-4 m-1">
                            {aguardiente.map((producto) => (
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
                    </Tab>

                    <Tab eventKey="ron" title="Ron">
                        <Row xs={2} md={2} className="g-4 m-1">
                            {ron.map((producto) => (
                                <Col key={producto.id}>
                                    <Card>
                                        <div className="cardd_licores">
                                            {!producto.disponible && (
                                                <div className="no-disponible">
                                                    No Disponible
                                                </div>
                                            )}
                                            <div className="image_licores_ron">
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
                    </Tab>

                    <Tab eventKey="vodka" title="Vodka">
                        <Row xs={2} md={2} className="g-4 m-1">
                            {vodka.map((producto) => (
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
                    </Tab>

                    <Tab eventKey="tequila" title="Tequila">
                        <Row xs={1} md={2} className="g-4 m-1">
                            {tequila.map((producto) => (
                                <Col key={producto.id}>
                                    <Card>
                                        <div className="cardd_licores">
                                            {!producto.disponible && (
                                                <div className="no-disponible">
                                                    No Disponible
                                                </div>
                                            )}
                                            <div className="image_licores_tequila">
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
                    </Tab>

                    <Tab eventKey="whisky" title="Whisky">
                        <Row xs={1} md={2} className="g-4 m-1">
                            {whisky.map((producto) => (
                                <Col key={producto.id}>
                                    <Card>
                                        <div className="cardd_licores">
                                            {!producto.disponible && (
                                                <div className="no-disponible">
                                                    No Disponible
                                                </div>
                                            )}
                                            <div className="image_licores_whisky">
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
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

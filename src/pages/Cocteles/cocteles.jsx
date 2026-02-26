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

import amarillo_tropical from "../../img/cocteles/amarillo.png";
import pink_cherry from "../../img/cocteles/pink.png";
import cosmopolitan from "../../img/cocteles/cosmopolitan.png";
import margarita from "../../img/cocteles/margarita.png";
import mojito from "../../img/cocteles/mojito.png";
import sodas from "../../img/cocteles/sodas.png";


const cocteles = [
    {
        id: 1,
        img: amarillo_tropical,
        titulo: "Amarillo Tropical (De la Casa)",
        descripcion:
            "Aguardiente Amarillo jugo de mango y limón fresco. Exótico, vibrante y único en el pueblo. Nuestro cóctel insignia.",
        precio: "24.000",
        disponible: true,
    },
    {
        id: 2,
        img: pink_cherry,
        titulo: "Pink Sunset",
        descripcion:
            "Vodka suave con maracuyá tropical y un delicado degradado de granadina. Refrescante, dulce y perfecta para empezar la noche.",
        precio: "20.000",
        disponible: true,
    },
    {
        id: 3,
        img: cosmopolitan,
        titulo: "Cosmopolitan",
        descripcion:
            "Vodka premium con un toque vibrante de arándanos, limón fresco y triple sec. Equilibrado entre dulce y cítrico, elegante y sofisticado. El clásico moderno que nunca pasa de moda.",
        precio: "23.000",
        disponible: true,
    },
    {
        id: 4,
        img: margarita,
        titulo: "Margarita",
        descripcion:
            "Tequila premium, triple sec y limón fresco perfectamente balanceados. Fuerte, elegante y con el toque cítrico ideal. La favorita de los que saben.",
        precio: "26.000",
        disponible: true,
    },
    {
        id: 5,
        img: mojito,
        titulo: "Mojito",
        descripcion:
            "Ron blanco, hierbabuena fresca y limón natural con soda burbujeante. Refrescante, aromático y siempre buena elección.",
        precio: "22.000",
        disponible: true,
    },
];

const sin_alcohol = [
    {
        id: 1,
        img: sodas,
        titulo: "Soda Italiana",
        descripcion: "Burbujeante y ligera. Dulce fresca que invita a repetir, sabores a Cereza, Mango biche y Arándano",
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
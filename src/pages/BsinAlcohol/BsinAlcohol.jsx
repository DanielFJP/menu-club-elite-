import React, { useContext } from "react";
import "./BsinAlcohol.css";
import MobileContent from "../../components/MobileContent";
import Navbar from "../../components/Bnavegacion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../components/CartContext";
import Footer from "../../components/footer";

import Zalva from "../../img/bebidas-sin-alcohol/agua-zalva.webp";
import colombiana from "../../img/bebidas-sin-alcohol/colombiana.webp";
import hit_tropical from "../../img/bebidas-sin-alcohol/Hit-Frutas-tropicales.webp";
import hit_lulo from "../../img/bebidas-sin-alcohol/Hit-Lulo.webp";
import hit_mango from "../../img/bebidas-sin-alcohol/Hit-Mango.webp";
import hit_mora from "../../img/bebidas-sin-alcohol/Hit-Mora.webp";
import hit_naranja from "../../img/bebidas-sin-alcohol/Hit-Naranja-Piña.webp";
import gatorade_mandarina from "../../img/bebidas-sin-alcohol/gatorade-Mandarina.png"
import gatorade_maracuya from "../../img/bebidas-sin-alcohol/gatorade-Maracuya.png";

const SinAlcohol = [
    {
        id: 1,
        img: Zalva,
        titulo: "Agua 600ml",
        precio: "$3.000",
        disponible: true,
    },
    {
        id: 2,
        img: gatorade_mandarina,
        titulo: "Gatorade Mandarina 500ml",
        precio: "5.000",
        disponible: false,
    },
    {
        id: 3,
        img: gatorade_maracuya,
        titulo: "Gatorade Maracuya 500ml",
        precio: "5.000",
        disponible: false,
    },
    /*{
        id: 2,
        img: colombiana,
        titulo: "Colombiana",
        precio: "$3.500",
        disponible: true,
    },
    {
        id: 3,
        img: hit_tropical,
        titulo: "Jugo Hit Tropical",
        precio: "$3.500",
        disponible: true,
    },
    {
        id: 4,
        img: hit_lulo,
        titulo: "Jugo Hit Lulo",
        precio: "$3.500",
        disponible: true,
    },
    {
        id: 5,
        img: hit_mango,
        titulo: "Jugo Hit Mango",
        precio: "$3.500",
        disponible: true,
    },
    {
        id: 6,
        img: hit_mora,
        titulo: "Jugo Hit Mora",
        precio: "$3.500",
        disponible: true,
    },
    {
        id: 7,
        img: hit_naranja,
        titulo: "Jugo Hit Naranja Piña",
        precio: "$3.500",
        disponible: true,
    }*/
];

export default function () {

const { addToCart } = useContext(CartContext);

    return (
        <div>
            <MobileContent />
            <Navbar />

            <div className="contenido">
                <Row xs={2} md={2} className="g-4 m-1">
                    {SinAlcohol.map((producto) => (
                        <Col key={producto.id}>
                            <Card>
                                <div className="cardd">
                                    {!producto.disponible && (
                                        <div className="no-disponible">
                                            No Disponible
                                        </div>
                                    )}
                                    <div className="image-BsinAlcohol">
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
                                    <div className="text-BsinAlcohol">
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

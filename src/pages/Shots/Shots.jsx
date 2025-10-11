import React, { useContext } from "react";
import "./Shots.css";
import MobileContent from "../../components/MobileContent";
import Navbar from "../../components/Bnavegacion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../components/CartContext";

import shot_jack from "../../img/shots/shot_jack.webp";
import shot_fire from "../../img/shots/shot_fire.webp";
import shot_honey from "../../img/shots/shot_honey.webp";
import shot_apple from "../../img/shots/shot_apple.webp";
import shot_jager from "../../img/shots/shot_jager.webp";
import shot_ron from "../../img/shots/shot_ron.png";
import shot_jose_cuervo from "../../img/shots/shot_jose_cuervo.png";
import shot_old_pard from "../../img/shots/shot_old_pard.png";


const shots = [
    {
        id: 1,
        img: shot_ron,
        titulo: "Shot Ron Viejo de Caldas 1 oz",
        descripcion:
            "Ron colombiano suave. Notas de caña y vainilla, ideal para el shot, 35% v/v.",
        precio: "$8.000",
        disponible: true,
    },
    {
        id: 2,
        img: shot_jose_cuervo,
        titulo: "Shot Jose Cuervo Especial 1 oz",
        descripcion:
            "Tequila Reposado mexicano. Dorado, suave y equilibrado en barrica, 38% v/v.",
        precio: "$12.000",
        disponible: true,
    },
    {
        id: 3,
        img: shot_old_pard,
        titulo: "Shot Old Parr 1 oz",
        descripcion:
            "Whisky escocés de 12 años. Sabor profundo, toques afrutados y ahumados, 40% v/v.",
        precio: "$14.000",
        disponible: true,
    },
    /*{
        id: 1,
        img: shot_jack,
        titulo: "Shot Jack Daniel's Old N0.7 1 oz",
        descripcion:
            "El clásico whiskey de Tennessee, sabor robusto y notas de caramelo y roble, 40% v/v.",
        precio: "$12.000",
        disponible: true,
    },
    {
        id: 2,
        img: shot_fire,
        titulo: "Shot Jack Daniel's Fire 1 oz",
        descripcion:
            "Whiskey con un toque de canela picante, ardiente y dulce, 35% v/v.",
        precio: "$12.000",
        disponible: true,
    },
    {
        id: 3,
        img: shot_honey,
        titulo: "Shot Jack Daniel's Honey 1 oz",
        descripcion: "Mezcla suave de whiskey y miel, dulce y sedoso, 35% v/v.",
        precio: "$12.000",
        disponible: true,
    },
    {
        id: 4,
        img: shot_apple,
        titulo: "Shot Jack Daniel's Apple 1 oz",
        descripcion:
            "Whiskey infusionado con manzana verde, fresco y afrutado, 35% v/v.",
        precio: "$12.000",
        disponible: true,
    },
    {
        id: 5,
        img: shot_jager,
        titulo: "Shot Jägermeister 1 oz",
        descripcion:
            "Licor alemán de hierbas, con un sabor intenso y ligeramente dulce, 35% v/v.",
        precio: "$9.000",
        disponible: true,
    },*/
];

export default function () {

const { addToCart } = useContext(CartContext);

    return (
        <div>
            <MobileContent />
            <Navbar />

            <div className="contenido">
                <Row xs={2} md={2} className="g-4 m-1">
                    {shots.map((producto) => (
                        <Col key={producto.id}>
                            <Card>
                                <div className="cardd_shots">
                                    {!producto.disponible && (
                                        <div className="no-disponible">
                                            No Disponible
                                        </div>
                                    )}
                                    <div className="image_shots">
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
                                    <div className="text_shots">
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

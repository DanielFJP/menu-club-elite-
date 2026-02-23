import React, { useContext } from 'react';
import "./cervezas.css"
import MobileContent from '../../components/MobileContent';
import Navbar from "../../components/Bnavegacion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from '../../components/CartContext';
import Footer from "../../components/footer";

import aguila from '../../img/cervezas/cervezas-nacionales/aguila.png';
import aguila_light from "../../img/cervezas/cervezas-nacionales/aguila-light.png";
import poker from "../../img/cervezas/cervezas-nacionales/poker.png";
import costeña from "../../img/cervezas/cervezas-nacionales/costeña.png";
import club_dorada from "../../img/cervezas/cervezas-nacionales/dorada.webp";
import club_roja from "../../img/cervezas/cervezas-nacionales/club_roja.webp";
import club_negra from "../../img/cervezas/cervezas-nacionales/club_negra.webp";
import club_trigo from "../../img/cervezas/cervezas-nacionales/club_trigo.webp";
import club_grande from "../../img/cervezas/cervezas-nacionales/club_grande.webp";

import bbc_cajica from "../../img/cervezas/cervezas-artesanales/bbc-cajica.webp";
import bbc_monserrate from "../../img/cervezas/cervezas-artesanales/bbc-monserrate.webp";
import bbc_chapinero from "../../img/cervezas/cervezas-artesanales/bbc-chapinero.webp";
import bbc_bacata from "../../img/cervezas/cervezas-artesanales/bbc-bacata.webp";
import bbc_rose from "../../img/cervezas/cervezas-artesanales/bbc-rose.webp";
import bbc_lager from "../../img/cervezas/cervezas-artesanales/bbc-lager.webp";
import bbc_macondo from "../../img/cervezas/cervezas-artesanales/bbc-macondo.webp";
import rosada from "../../img/cervezas/cervezas-artesanales/3c_rosada.webp";
import negra from "../../img/cervezas/cervezas-artesanales/3c_negra.webp";
import mulata from "../../img/cervezas/cervezas-artesanales/3c_mulata.webp";
import mona from "../../img/cervezas/cervezas-artesanales/3c_mona.webp";
import mestiza from "../../img/cervezas/cervezas-artesanales/3c_mestiza.webp";
import blanca from "../../img/cervezas/cervezas-artesanales/3c_blanca.webp";

import corona from "../../img/cervezas/cervezas-importadas/corona.png";
import coronita from "../../img/cervezas/cervezas-importadas/coronita.png";
import stella from "../../img/cervezas/cervezas-importadas/stella.png";
import buweiser from "../../img/cervezas/cervezas-importadas/buweiser330.png"

const nacionales = [
    {
        id: 1,
        img: aguila,
        titulo: "Aguila Original 330ml",
        precio: "$4.500",
        descripcion: "Viernes y Sabados $5.000",
        disponible: true,
    },
    {
        id: 2,
        img: aguila_light,
        titulo: "Aguila Light 330ml",
        precio: "$5.000",
        descripcion: "",
        disponible: true,
    },
    {
        id: 3,
        img: poker,
        titulo: "Poker 330ml",
        descripcion: "Viernes y Sabados $5.000",
        precio: "$4.500",
        disponible: true,
    },
    ,
    {
        id: 4,
        img: costeña,
        titulo: "Costeña 330ml",
        descripcion: "",
        precio: "$4.000",
        disponible: true,
    },
    {
        id: 5,
        img: club_dorada,
        titulo: "Club Colombia Dorada 330ml",
        descripcion: "",
        precio: "$6.000",
        disponible: false,
    },
    {
        id: 6,
        img: club_roja,
        titulo: "Club Colombia Roja 330ml",
        descripcion: "",
        precio: "$6.000",
        disponible: true,
    },
    {
        id: 7,
        img: club_negra,
        titulo: "Club Colombia Negra 330ml",
        descripcion: "",
        precio: "$6.000",
        disponible: false,
    },
    {
        id: 8,
        img: club_trigo,
        titulo: "Club Colombia Trigo 330ml",
        descripcion: "Cerveza de temporada, fresca y afrutada, 5% v/v.",
        precio: "$7.000",
        disponible: true,
    },
    /*{
        id: 9,
        img: club_grande,
        titulo: "Club Colombia Dorada 500ml",
        descripcion: "Versión grande de la dorada, 4.7% v/v.",
        precio: "$10.000",
        disponible: true,
    },*/
];


const artesanales = [
    {
        id: 1,
        img: bbc_cajica,
        titulo: "BBC Cajica 330ml",
        descripcion:
            "Cerveza rubia dulce y refrescante con miel de abejas, 5% v/v. ",
        precio: "$10.000",
        disponible: true,
    },
    {
        id: 2,
        img: bbc_monserrate,
        titulo: "BBC Monserrate 330ml",
        descripcion:
            "Cerveza roja de pura malta, con un sabor afrutado, 5% v/v.",
        precio: "$10.000",
        disponible: true,
    },
    {
        id: 3,
        img: bbc_chapinero,
        titulo: "BBC Chapinero 330ml",
        descripcion:
            "Cerveza negra de pura malta tostada, robusta y cremosa, 5% v/v.",
        precio: "$10.000",
        disponible: true,
    },
    {
        id: 4,
        img: bbc_bacata,
        titulo: "BBC Bacata 330ml",
        descripcion:
            "Cerveza blanca de trigo con cáscaras de naranja y coriandro, 4.1% v/v.",
        precio: "$10.000",
        disponible: true,
    },
    {
        id: 5,
        img: bbc_rose,
        titulo: "BBC Rose 330ml",
        descripcion:
            "Cerveza rosada con sabor y aroma dulce y a fresa, 3.6% v/v.",
        precio: "$10.000",
        disponible: true,
    },
    {
        id: 6,
        img: bbc_lager,
        titulo: "BBC Lager 330ml",
        descripcion: "Clásica, refrescante y equilibrada, 5% v/v.",
        precio: "$10.000",
        disponible: true,
    },
    {
        id: 7,
        img: bbc_macondo,
        titulo: "BBC Macondo 330ml",
        descripcion:
            "Cerveza negra con infusión de café Colombiano, tipo stout, 5% v/v.",
        precio: "$10.000",
        disponible: true,
    },
    {
        id: 8,
        img: rosada,
        titulo: "3 Cordilleras Rosada 330ml",
        descripcion:
            "Suave, balance perfecto entre dulzura y frutos rojos, 3.8 v/v.",
        precio: "$10.000",
        disponible: true,
    },
    {
        id: 9,
        img: negra,
        titulo: "3 Cordilleras Negra 330ml",
        descripcion: "fuerte, con aroma y sabor a chocolate y café, 6.4% v/v.",
        precio: "$10.000",
        disponible: true,
    },
    {
        id: 10,
        img: mulata,
        titulo: "3 Cordilleras Mulata 330ml",
        descripcion:
            "Maltosa, con toques acaramelados y ﬁnal amaderado, 5.2% v/v.",
        precio: "$10.000",
        disponible: true,
    },
    {
        id: 11,
        img: mona,
        titulo: "3 Cordilleras Mona 330ml",
        descripcion:
            " Refrescante y ligera, con suaves notas cítricas, 3.9% v/v.",
        precio: "$10.000",
        disponible: true,
    },
    {
        id: 12,
        img: mestiza,
        titulo: "3 Cordilleras Mestiza 330ml",
        descripcion:
            "Cítrica en aroma y sabor, amargo pronunciado y ﬁnal seco, 4.8% v/v.",
        precio: "$10.000",
        disponible: true,
    },
    {
        id: 13,
        img: blanca,
        titulo: "3 Cordilleras Blanca",
        descripcion:
            "Suave, fresca, notas ﬂorales tenues, sin sensación de amargo, 4.6% v/v.",
        precio: "$10.000",
        disponible: true,
    },
];

const importadas = [
    {
        id: 1,
        img: corona,
        titulo: "Corona Extra 355ml",
        descripcion: "",
        precio: "$9.000",
        disponible: true,
    },
    {
        id: 2,
        img: coronita,
        titulo: "Coronita 210ml",
        descripcion: "",
        precio: "$6.000",
        disponible: false,
    },
    {
        id: 3,
        img: buweiser,
        titulo: "Budweiser 330ml",
        descripcion: "",
        precio: "$5.000",
        disponible: false,
    },
    {
        id: 4,
        img: stella,
        titulo: "Stella Artois 330ml",
        descripcion: "",
        precio: "$9.000",
        disponible: false,
    },
];



export default function () {

    const { addToCart } = useContext(CartContext);

  return (
      <div>
          <MobileContent />
          <Navbar />

          <div className="contenido-cervezas">
              <Tabs
                  defaultActiveKey="nacionales"
                  transition={true}
                  id="noanim-tab-example"
                  className="mb-1 d-flex justify-content-center bg-dark tabs"
              >
                  <Tab eventKey="nacionales" title="Nacionales">
                      <Row xs={2} md={2} className="g-4 m-1">
                          {nacionales.map((producto) => (
                              <Col key={producto.id}>
                                  <Card>
                                      <div className="cardd">
                                          {!producto.disponible && (
                                              <div className="no-disponible">
                                                  No Disponible
                                              </div>
                                          )}
                                          <div className="image-cervezas">
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
                                          <div className="text-cervezas">
                                              <span>{producto.titulo}</span>
                                              <p>{producto.descripcion}</p>
                                              <span>
                                                  {producto.precio}
                                              </span>
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
                  {/*<Tab eventKey="artesanales" title="Artesanales">
                      <Row xs={2} md={2} className="g-4 m-1">
                          {artesanales.map((producto) => (
                              <Col key={producto.id}>
                                  <Card>
                                      <div className="cardd">
                                          {!producto.disponible && (
                                              <div className="no-disponible">
                                                  No Disponible
                                              </div>
                                          )}
                                          <div className="image_art">
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
                                          <div className="text-cervezas">
                                              <span>{producto.titulo}</span>
                                              <p>{producto.descripcion}</p>
                                              <span>{producto.precio}</span>
                                          </div>
                                          <button
                                              className="ordenar-btn"
                                              onClick={() =>
                                                  addToCart(producto)
                                              }
                                          >
                                              Ordenar
                                          </button>
                                      </div>
                                  </Card>
                              </Col>
                          ))}
                      </Row>
                  </Tab>
                  */}
                  <Tab eventKey="importadas" title="Importadas">
                      <Row xs={2} md={2} className="g-4 m-1">
                          {importadas.map((producto) => (
                              <Col key={producto.id}>
                                  <Card>
                                      <div className="cardd">
                                          {!producto.disponible && (
                                              <div className="no-disponible">
                                                  No Disponible
                                              </div>
                                          )}
                                          <div className="image-cervezas">
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
                                          <div className="text-cervezas">
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

           <Footer/>
      </div>
  );
}

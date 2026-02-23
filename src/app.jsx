import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Inicio from "./pages/Inicio/Inicio";
import Cervezas from "./pages/Cervezas/Cervezas";
import Bcalientes from "./pages/Bcalientes/Bcalientes";
import BsinAlcohol from "./pages/BsinAlcohol/BsinAlcohol";
import Snacks from "./pages/Snacks/Snacks";
import Shots from "./pages/Shots/Shots";
import Administracion from "./pages/Administracion/Administracion";
import Licores from "./pages/Licores/Licores";
import Cocteles from "./pages/Cocteles/cocteles";
import Vinos from "./pages/Vinos/vinos";

import Navbar from "./components/Bnavegacion";
import MobileContent from "./components/MobileContent";

  
  
export function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/navbar" element={<Navbar />} />
                    <Route path="/mobile_content" element={<MobileContent />} />

                    <Route index path="/" element={<Inicio />} />
                    <Route path="/cervezas" element={<Cervezas />} />
                    <Route path="/bebidas_calientes" element={<Bcalientes />} />
                    <Route
                        path="/bebidas_sin_alcohol"
                        element={<BsinAlcohol />}
                    />
                    <Route path="/snacks" element={<Snacks />} />
                    <Route path="/shots" element={<Shots />} />
                    <Route path="/licores" element={<Licores />} />
                    <Route path="/cocteles" element={<Cocteles />} />
                    <Route path="/vinos" element={<Vinos />} />
                    <Route
                        path="/administracion"
                        element={<Administracion />}
                    />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}
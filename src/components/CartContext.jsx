import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (producto) => {
        setCart((prevCart) => {
            const existe = prevCart.find((item) => item.id === producto.id);
            if (existe) {
                return prevCart.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...producto, cantidad: 1 }];
            }
        });

        const vibracionPedido = document.querySelector('.pedido');
        if (vibracionPedido) {
            vibracionPedido.classList.add('vibracion');
            setTimeout(() => {
                vibracionPedido.classList.remove('vibracion');
            }, 300);
        }
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
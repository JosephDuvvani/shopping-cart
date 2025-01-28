import { createContext, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom"
import styled from "styled-components";

const body = document.getElementsByTagName("body");
body[0].style.margin = 0;

const HeaderMain = styled.div`
    display: grid;
    grid-template-rows: min-content 1fr;
    min-height: 100svh;
`;
const Header = styled.header`
    padding: 1rem 2rem;
    color: #fff;
    background-color: hsl(49, 20%, 50%);
`;

const Main = styled.main`
    overflow: clip;
    background-color: hsl(240, 40%, 98%);
`;

const StyledNav = styled.nav`
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    align-items: center;
    gap: 2rem;
`;

const NavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-family: "Playfair Display", Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
    justify-self: end;
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    justify-items: center;
    align-content: center;
    gap: 1em
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    padding: .5em;
    display: block;
    position: relative;
    transition: all 150ms ease-in-out;

    &:hover::after {
        content: "^";
        font-size: 1.2rem;
        position: absolute;
        left: 0;
        right: 0;
        top: -.5rem;
        height: 0;
        text-align: center;
        background-color: red;
    }
`;

const Logo = styled(Link)`
    font-size: 2rem;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    text-decoration: none;
    color: inherit;
`;

const CartLink = styled(Link)`
    display: grid;
    place-items: center;
    position: relative;
    text-decoration: none;
    color: inherit;
`;

const CartIcon = styled.svg`
    width: 1.5rem;
    fill: #fff;
    pointer-events: none;
`;
const CartNumber = styled.div`
    position: absolute;
    top: -50%;
    right: -50%;
    min-width: 1.3rem;
    min-height: 1.3rem;
    color: hsl(130, 90%, 95%);
    background-color: hsl(130, 50%, 50%);
    border-radius: 100vh;
    display: grid;
    place-items: center;
`;

export const ProductContext = createContext(null);
export const CartContext = createContext(null);

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=15')
            .then(res => res.json())
            .then(res => setProducts(res));
    }, []);

    return (
        <>
        <ProductContext.Provider value={{products, setProducts}}>
        <CartContext.Provider value={{cart, setCart}}>
            <HeaderMain>
                <Header>
                    <StyledNav>
                        <div>
                            <Logo to="/" aria-label="Homepage">
                                Alchr
                            </Logo>
                        </div>
                        <NavList>
                            <li>
                                <StyledLink to="/">Home</StyledLink>
                            </li>
                            <li>
                                <StyledLink to="/products">Shop</StyledLink>
                            </li>
                        </NavList>
                        <div>
                            <CartLink to="/cart" title="Shopping Cart">
                                <CartIcon aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                                </CartIcon>
                                <CartNumber>
                                    {cart.length}
                                </CartNumber>
                            </CartLink>
                        </div>
                    </StyledNav>
                </Header>
                <Main>
                    <Outlet />
                </Main>
            </HeaderMain>
        </CartContext.Provider>
        </ProductContext.Provider>
        </>
    )
};

export default App;
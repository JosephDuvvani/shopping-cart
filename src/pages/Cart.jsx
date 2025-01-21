import styled from "styled-components";
import CartItems from "../components/CartItems";
import { useContext, useState } from "react";
import { CartContext } from "../App";
import CheckoutMessage from "../components/CheckoutMessage";

const Wrapper = styled.div`
    max-width: 70rem;
    height: 100%;
    margin: auto;
    padding: 2rem;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
`;
const Line = styled.div`
    height: 1px;
    background-color: hsl(0, 0%, 80%);
    margin-inline: .5em;
`;
const Title = styled.h1`
    margin-top: 0;
`;
const Checkout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2em;
    padding: .5rem;
`;
const Cost = styled.span`
    color: hsl(150, 90%, 40%);
    margin-left: .2em;
`;
const CheckoutButton = styled.button`
    font-size: .8em;
    color: hsl(0, 0%, 100%);
    background-color: hsl(20, 70%, 50%);
    padding: .5em 1.5em;
    border: 0;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
    background-color: hsl(20, 70%, 60%);
    }
`;

const Cart = () => {
    const {cart, setCart} = useContext(CartContext);
    const [checkout, setCheckout] = useState(false);

    const handleCheckout = () => {
        setCart([]);
        setCheckout(true);
    }
    return (
        <Wrapper>
            <Title>Shopping Cart</Title>
            <Line />
            {cart.length > 0 &&
                <Checkout>
                    <div>
                        Total:
                        <Cost>
                            ${
                                [...cart].map(prod => 
                                    prod.item.price * prod.quantity
                                ).reduce((total, price) => total + price)
                            }
                        </Cost>
                    </div>
                    <CheckoutButton onClick={handleCheckout}>
                        Buy Now
                    </CheckoutButton>
                </Checkout>
            }
            {checkout ?
                <CheckoutMessage /> :
                <CartItems />
            }
        </Wrapper>
    )
}

export default Cart;
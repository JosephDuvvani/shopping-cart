import styled from "styled-components";
import CartItems from "../components/CartItems";

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

const Cart = () => {
    return (
        <Wrapper>
            <Title>Shopping Cart</Title>
            <Line />
            <CartItems />
        </Wrapper>
    )
}

export default Cart;
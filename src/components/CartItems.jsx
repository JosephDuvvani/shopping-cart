import { useContext } from "react"
import { CartContext } from "../App";
import styled from "styled-components";
import Item from "./Item";

const Wrapper = styled.div`
    
`;
const List = styled.ul`
    list-style: none;
    display: grid;
    gap: 2rem;
    padding: 0;
`;

const CartItems = () => {
    const {cart, setCart} = useContext(CartContext);

    return (
        <Wrapper>
            <List>
                {
                    cart.length > 0 ?
                        cart.map(product => (
                            <li key={product.id}>
                                <Item product={product} setProduct={setCart} />
                            </li>
                        )) :
                        <div>Cart Is Empty</div>
                }
            </List>
        </Wrapper>
    );
};

export default CartItems;
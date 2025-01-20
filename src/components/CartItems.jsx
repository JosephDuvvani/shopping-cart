import { useContext } from "react"
import { CartContext } from "../App";
import styled from "styled-components";
import Item from "./Item";

const List = styled.ul`
    list-style: none;
    display: grid;
    gap: .5rem;
    padding: 0;
`;

const CartItems = () => {
    const {cart} = useContext(CartContext);

    return (
        <div>
            <List>
                {
                    cart.length > 0 ?
                        cart.map(product => (
                            <li key={product.id}>
                                <Item product={product} />
                            </li>
                        )) :
                        <div>Cart Is Empty</div>
                }
            </List>
        </div>
    );
};

export default CartItems;
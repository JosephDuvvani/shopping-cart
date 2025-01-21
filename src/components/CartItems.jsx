import { useContext } from "react"
import { CartContext } from "../App";
import styled from "styled-components";
import Item from "./Item";
import EmptyCart from "./EmptyCart";

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
                        <EmptyCart />
                }
            </List>
        </div>
    );
};

export default CartItems;
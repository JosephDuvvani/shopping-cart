import styled from "styled-components";
import { CartContext } from "../App";
import { useContext } from "react";

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 16rem);
    gap: 3rem 2rem;
    list-style: none;
    color: hsl(0, 0%, 30%);
    padding: 0;
`;
const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    align-items: center;
`;
const ImageFrame = styled.div`
    display: grid;
    place-content: center;
    width: 16rem;
    height: 16rem;
    grid-column: 1/-1;
    background-color: hsl(250, 70%, 90%);
    border-radius: 1rem;
    overflow: hidden;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const Name = styled.h2`
    font-size: 1.2em;
    font-weight: 700;
    grid-column: 1/-1;
    margin-block: 1rem .5rem;
`;
const Price = styled.div`
    font-weight: 700;
`;
const CartButton = styled.button`
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: hsl(20, 70%, 50%);
    border: 0;
    border-radius: .5rem;
    cursor: pointer;
    transition: background 150ms ease-in-out;

    &:hover {
    background-color: hsl(20, 70%, 60%);
    }
`;
const CartIcon = styled.svg`
    width: 80%;
    fill: white;
    pointer-events: none;
`;

const ProductCards = ({products}) => {
    const {cart, setCart} = useContext(CartContext);

    const AddToCart = (product) => {
        if (cart.length === 0) {
            setCart([{id: product.id, item: product, quantity: 1}]);
            return;
        }
        let inCart = false;
        const newCart = [...cart].map(prod => {
            if (prod.id === product.id) {
                const item = {...prod, quantity: (prod.quantity + 1)};
                inCart = true;
                return item;
            }
            return prod;
        });     
        if (inCart) {
            setCart(newCart);
            return;
        }
        setCart([...cart, {id: product.id, item: product, quantity: 1}]);
    }

    return (
        <div>
            <List>
                {products.map((item) => (
                    <li key={item.id}>  
                        <Card>
                            <ImageFrame>
                                <Image src={item.image} />
                            </ImageFrame>
                            <Name>{item.name}</Name>
                            <Price>${item.price}</Price>
                            <CartButton 
                                title="Add to Cart"
                                onClick={() => AddToCart(item)}
                            >
                                <CartIcon aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                                </CartIcon>
                            </CartButton>
                        </Card>
                    </li>
                ))}
            </List>
        </div>
    );
}

export default ProductCards;
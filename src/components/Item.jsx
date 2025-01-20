import { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../App";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: repeat(3, min-content);
    place-items: center start;
    gap: 1rem; 
    padding: 0;
`;
const ImageFrame = styled.div`
    display: grid;
    place-content: center;
    width: 10rem;
    height: 10rem;
    background-color: hsl(250, 70%, 90%);
    border-radius: 1rem;
    overflow: hidden;
    grid-row: 1/4;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const Name = styled.h3`
    margin-block: .5rem;
`;
const Price = styled.div`
    grid-column: 2;
    place-self: center start;
`;
const Quantity = styled.div`
    --clr-border: hsl(250, 30%, 90%);
    --clr-font: hsl(250, 30%, 40%);
    grid-row: 1;
    grid-column: 3;
    font-size: 1.2em;
    display: grid;
    grid-template-columns: 1.3em 2px 1.3em 2px 1.3em;
    grid-template-rows: 1.5em;
    border: 2px solid var(--clr-border);
    border-radius: 6px;
    position: relative;
`;
const MinusButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 0;
    display: grid;
    place-items: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
`;
const PlusButton = styled(MinusButton)`

`;
const ButtonIcon = styled.svg`
    width: 70%;
    fill: var(--clr-font);
    pointer-events: none;
`;
const QuantValue = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    font-size: .8em;
`;
const Line = styled.div`
    width: 2px;
    background-color: var(--clr-border);
`;
const RemoveButton = styled.button`
    place-self: start;
    width: 100%;
    padding: .5em 1em;
    border: 0;
    border-radius: .5em;
    color: white;
    background-color: hsl(200, 79.70%, 30%);
    cursor: pointer;
`;

const Item = ({product}) => {
    const {cart, setCart} = useContext(CartContext);

    const handleQuantity = (e) => {
        if (e.target.name !== 'plus' && e.target.name !== 'minus') 
            throw new Error("e.target.name does not match 'plus' or 'minus'");
        
        const newProduct = e.target.name === 'plus' ?
            {...product, quantity: (product.quantity + 1)} :
            {...product, quantity: (product.quantity - 1)};

        const newCart = [...cart].
            map(prod => 
                prod.id === product.id ? 
                    prod = newProduct :
                    prod 
            ).filter(prod => prod.quantity > 0);

        setCart(newCart);
    };

    const handleRemove = () => 
        setCart([...cart].filter(prod => 
            prod.id !== product.id
        ));

    return (
        <Wrapper>
            <ImageFrame>
                <Image src={product.item.image} />
            </ImageFrame>
            <Name>{product.item.name}</Name>
            <Price>Price: ${product.item.price}</Price>
            <Quantity>
                <MinusButton name="minus" onClick={handleQuantity}>
                    {product.quantity === 1 ?
                        <ButtonIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                        </ButtonIcon> :
                        <ButtonIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19,13H5V11H19V13Z" />
                        </ButtonIcon>
                    }
                </MinusButton>
                <Line />
                <QuantValue>{product.quantity}</QuantValue>            
                <Line />
                <PlusButton name="plus" onClick={handleQuantity}>
                    <ButtonIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </ButtonIcon>
                </PlusButton>
            </Quantity>
            <RemoveButton onClick={handleRemove}>
                Remove
            </RemoveButton>
        </Wrapper>
    );
};

export default Item;
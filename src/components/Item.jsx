import styled from "styled-components";

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
    grid-template-rows: 1.3em;
    border: 2px solid var(--clr-border);
    border-radius: 6px;
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
const Input = styled.input`
    width: 100%;
    text-align: center;
    color: var(--clr-font);
    outline: none;
    border: 0;
    box-sizing: border-box;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type=number] {
        -moz-appearance: textfield;
    }
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

const Item = ({product, setProduct}) => {
    return (
        <Wrapper>
            <ImageFrame>
                <Image src={product.item.image} />
            </ImageFrame>
            <Name>{product.item.name}</Name>
            <Price>Price: ${product.item.price}</Price>
            <Quantity>
                <MinusButton>
                    <ButtonIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19,13H5V11H19V13Z" />
                    </ButtonIcon>
                </MinusButton>
                <Line />
                <Input type="number" value={product.quantity} />
                <Line />
                <PlusButton>
                    <ButtonIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </ButtonIcon>
                </PlusButton>
            </Quantity>
            <RemoveButton>Remove</RemoveButton>
        </Wrapper>
    );
};

export default Item;
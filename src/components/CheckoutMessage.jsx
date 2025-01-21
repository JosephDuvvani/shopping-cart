import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const flipIn = keyframes`
    0% {
        transform: rotateX(90deg) scale(.8);
    }
    100% {
        transform: rotateX(0) scale(1);
    }
`;

const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    box-shadow: 0 0 8px 1px hsl(0, 0%, 0%, .2);
    justify-self: center;
    margin-top: 2rem;
    padding: 0rem 2rem 0;
    border: .5rem solid hsl(200, 70%, 50%);
    border-radius: 16px;
    transform: rotateX(90deg) scale(.8);
    animation: ${flipIn} 300ms ease-in forwards;
`;
const Heading = styled.h1`
    text-align: center;
`;
const Para = styled.p`
    font-weight: 600;
    text-align: center;
    color: hsl(0, 0%, 30%);
`;
const ButtonLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    color: hsl(0, 0%, 100%);
    background-color: hsl(200, 70%, 50%);
    padding: 1em 2em;
    margin-top: 1em;
    border-radius: 6px 6px 0 0;
    cursor: pointer;
    position: relative;
    bottom: -0.5rem;
`;

const CheckoutMessage = () => {
    return (
        <Wrapper>
            <Heading>Purchase Successful!</Heading>
            <Para>
                Thank You For Shopping With Us. 
            </Para>
            <ButtonLink to="/products">
                Buy More
            </ButtonLink>
        </Wrapper>
    );
};

export default CheckoutMessage;
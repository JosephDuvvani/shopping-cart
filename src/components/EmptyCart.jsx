import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const pop = keyframes`
    0% {
        transform: scale(.9);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

const Wrapper = styled.div`
    display: grid;
    margin: 3rem 2rem 2rem;
    padding: 0 2rem 2rem;
    background-color: hsl(220, 50%, 40%);
    border-radius: 1rem;
    position: relative;
    isolation: isolate;
    animation: ${pop} 150ms ease-out forwards;

    &::before {
        content: '';
        position: absolute;
        inset: .7rem;
        border: 2px solid hsl(240, 40%, 98%);
        z-index: -1;
    }
`;
const Heading = styled.h2`
    text-align: center;
    color: hsl(220, 50%, 40%);
    background-color: hsl(240, 40%, 98%);
    margin: 0;
    padding: 1rem 2rem;
    border: 2px solid hsl(220, 50%, 40%);
    border-radius: .2em .2em 5rem 5rem;
    box-shadow: 0 .5px 0 4px hsl(240, 40%, 98%);
    position: relative;
    top: -40%;
`;
const Para = styled.p`
    font-size: 1.2em;
    font-weight: 600;
    text-align: center;
    color: hsl(0, 0%, 100%);
    margin-block: 0 1.5em;
`;
const StyledLink = styled(Link)`
    
    text-decoration: none;
    text-align: center;
    color: hsl(0, 0%, 100%);
    cursor: pointer;
    justify-self: center;

    &:hover {
        text-decoration: underline;
    }
`;

const EmptyCart = () => {
    return (
        <Wrapper>
            <Heading>Your Shopping Cart is empty</Heading>
            <Para>
                Fill the space with all your desires 
            </Para>
            <StyledLink to="/products">
                Shop today's deals
            </StyledLink>
        </Wrapper>
    );
};

export default EmptyCart;
import { Outlet, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ImageSpread from "../components/ImageSpread";

const slideRight = keyframes`
    0% {
        left: -100%;
    }
    100% {
        left: 0;
    }
`;
const slideDown = keyframes`
    0% {
        top: -2.5em;
    }
    100% {
        top: 0;
    }
`;
const slideUp = keyframes`
    0% {
        top: 100%;
        opacity: 0;
    }
    80% {
        opacity: .6;
    }
    100% {
        top: 0;
        opacity: 1;
    }
`;

const Wrapper = styled.div`
    max-width: 62.5rem;
    height: 100%;
    margin: auto;
    padding: 3rem 2rem;
    display: grid;
    grid-template-rows: repeat(2, min-content) 1fr;
`;
const Title = styled.h1`
    font-size: 5em;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-weight: 900;
    margin: 0;
    overflow: hidden;
`;
const Text = styled.span`
    position: relative;
    left: -100%;
    animation: ${slideRight} 500ms ease-out forwards;
`;
const Subtitle = styled(Title)`
    display: block;
    font-size: 3.5em;
    font-family: "Playfair Display", Arial, Helvetica, sans-serif;
    color: hsl(253, 80.40%, 60.00%);
    overflow: hidden;
`;
const SubText = styled.span`
    position: relative;
    top: -2.5em;
    animation: ${slideDown} 500ms ease-out forwards 500ms;
`;
const Buttons = styled.div`
    display: grid;
    justify-items: center;
    align-content: start;
    position: relative;
`;
const ShopButton = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-size: 1.1em;
    font-weight: 500;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    background-color: hsl(207, 80.40%, 80.00%);
    padding: .7em 2em;
    border-radius: 50vh;
    cursor: pointer;
    margin-top: 3em;
    display: inline-block;
    position: absolute;
    top: 100%;
    animation: ${slideUp} 1s ease-in-out forwards 500ms;
    transition: background 150ms ease-in-out;

    &:hover {
    background-color: hsl(207, 80.40%, 70.00%);
    }
`;

const Homepage = () => {
    return (
        <Wrapper>
            <div>
                <Title>
                    <Text>Elevate Your Style</Text>                 
                </Title>
                <Subtitle>
                    <SubText>Shop the Best in Tech, Fashion, and More.</SubText>
                </Subtitle>
            </div>
            <div>
                <ImageSpread />
            </div>
            <Buttons>
                <ShopButton to='/products'>Go Shopping</ShopButton>
            </Buttons>
        </Wrapper>
    )
}

export default Homepage;
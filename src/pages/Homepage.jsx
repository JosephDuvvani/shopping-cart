import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ImageSpread from "../components/ImageSpread";
import { useEffect, useState } from "react";

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
        top: -50vh;
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
    color: hsl(49, 20%, 50%);
    margin: 0;
    overflow: hidden;
`;
const Text = styled.span`
    &.initial {
        position: relative;
        left: -100%;
    }
    &.animate {
        position: relative;
        left: -100%;
        animation: ${slideRight} 500ms ease-out forwards;
    }
`;
const Subtitle = styled(Title)`
    display: block;
    font-size: 3.5em;
    font-family: "Playfair Display", Arial, Helvetica, sans-serif;
    color: hsl(190, 20%, 50%);
    overflow: hidden;
`;
const SubText = styled.div`
    &.initial {
        position: relative;
        top: -50vh;
    }
    &.animate {
        position: relative;
        top: -50vh;
        animation: ${slideDown} 500ms ease-out forwards 500ms;
    }
`;
const Buttons = styled.div`
    display: grid;
    justify-items: center;
    align-content: start;
    position: relative;
`;
const ShopButton = styled(Link)`
    width: 40%;
    text-align: center;
    text-decoration: none;
    color: #fff;
    font-size: 1.5em;
    font-weight: 500;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    background-color: hsl(190, 20%, 50%);
    padding: 1em 2em;
    border-radius: 50vh;
    cursor: pointer;
    margin-top: 3em;
    display: inline-block;

    &.initial {
        position: relative;
        opacity: 0;
        top: 100%;
    }
    &.animate {
        position: absolute;
        top: 100%;
        animation: ${slideUp} 1s ease-in-out forwards 500ms;
        transition: background 150ms ease-in-out;
    }
    &:hover {
        background-color: hsl(190, 20%, 45%);
        box-shadow: 0 0 1rem .2rem hsl(190, 0%, 80%);
    }
`;

const Homepage = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('firstMount') === null) {
            setAnimate(true);
            setTimeout(() =>
                sessionStorage.setItem('firstMount', 1)
            ,3000)
        } else setAnimate(false); 
          
    }, []);

    const getClass = () => {
        if (sessionStorage.getItem('firstMount') === null) return "initial";
        return "still";
    }

    return (
        <Wrapper>
            <div>
                <Title>
                    <Text className={animate ? "animate" : getClass()}>
                        Elevate Your Style
                    </Text>                 
                </Title>
                <Subtitle>
                    <SubText
                        className={animate ? "animate" : getClass()}
                    >
                        Shop the Best in Tech, Fashion, and More.                
                    </SubText>
                </Subtitle>
            </div>
            <div>
                <ImageSpread animate={animate} getClass={getClass} />
            </div>
            <Buttons>
                <ShopButton
                    to='/products'
                    className={animate ? "animate" : getClass()}
                >
                    Go Shopping
                </ShopButton>
            </Buttons>
        </Wrapper>
    )
}

export default Homepage;
import styled, { keyframes } from 'styled-components';
import watchImage from '../images/imageSpread/watch.jpg';
import denimImage from '../images/imageSpread/denim.jpg';
import { useEffect, useState } from 'react';

const spread = (angle, shift, distance) => {
    return keyframes`
        0% {
            left: 0;
            top: 200%;
            transform: rotateZ(-20deg) scale(1.2);
        }
        40% {
            left: 0;
            top: 10%;
            transform: rotateZ(-5deg) scale(.9) translateY(0);
        }
        100% {
            left: ${distance};
            top: 0;
            transform: rotateZ(${angle}deg) translateY(${shift}%);
        }
    `;
};

const blurry = keyframes`
    from {
        filter: blur(.5rem);
        opacity: 1;
    }
    to {
        filter: none;
        opacity: 1;
    }
`;

const still = (angle, shift, distance) => {
    return `
        left: ${distance};
        top: 0;
        transform: rotateZ(${angle}deg) translateY(${shift}%);
    `;
};

const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    margin-block: 3em;
`;
const Images = styled.div`
    width: 12em;
    height: 12em;
    position: relative;
    
`;
const ImageFrame = styled.div`
    --clr-text: hsl(190, 20%, 50%);
    width: 100%;
    height: 100%;
    font-size: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: transparent;
    background-color: hsl(240, 40%, 98%);
    text-shadow: 0 0 .5rem var(--clr-text);
    border: .5rem solid hsl(49, 20%, 50%);
    border-radius: 1rem;
    box-sizing: border-box;
    overflow: hidden;
    position: absolute;

    &:nth-child(2n) {
        --clr-text: hsl(49, 20%, 50%);
        border: .5rem solid hsl(190, 20%, 50%);
    }
    &.initial {top: 200%;}

    &:nth-child(1) {
        background: hsl(20, 50%, 40%);
        border: 0;
        padding: .1rem;

        &.animate {
            animation: ${spread(-5, 5, '-180%')} 1.5s ease-out forwards;
        }
        &.still {${still(-5, 5, '-180%')}}  
    }
    &:nth-child(2) {
        &.animate {
            animation: ${spread(-5, -10, '-120%')} 1.5s ease-out forwards;
        }
        &.still {${still(-5, -10, '-120%')}} 
    }
    &:nth-child(3) {
        &.animate {
            animation: ${spread(-4, -1, '-60%')} 1.5s ease-out forwards;
        }
        &.still {${still(-4, -1, '-60%')}}  
    }
    &:nth-child(4) {
        &.animate {
            animation: ${spread(0, 0, 0)} 1.5s ease-out forwards;
        }
        &.still {${still(0, 0, 0)}} 
    }
    &:nth-child(5) {
        &.animate {
            animation: ${spread(5, -1, '60%')} 1.5s ease-out forwards;
        }
        &.still {${still(5, -1, '60%')}}
    }
    &:nth-child(6) {
        &.animate {
            animation: ${spread(5, 3, '120%')} 1.5s ease-out forwards;
        }
        &.still {${still(5, 3, '120%')}}
    }
    &:nth-child(7) {
        background: hsl(167, 50%, 30%);
        border: 0;
        padding: .1rem;

        &.animate {
            animation: ${spread(8, -2, '180%')} 1.5s ease-out forwards;
        }
        &.still {${still(8, -2, '180%')}} 
    }
`;
const Vignette = styled.div`
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 1rem 1rem ${props => props.$front ? 'hsl(167, 50%, 30%)' : 'hsl(20, 50%, 40%)'};
`;
const Image = styled.img`
    width: 100%;
    opacity: 0;
    &.animate {
        animation: ${blurry} 1.5s ease-out forwards;
    }
    &.still {
        opacity: 1;
    }    
`;

const ImageSpread = ({ animate, getClass }) => {

    return (
        <Wrapper>
            <Images>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    <Image
                        src={watchImage}
                        className={animate ? "animate" : getClass()}
                    />
                    <Vignette />
                </ImageFrame>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    A
                </ImageFrame>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    L
                </ImageFrame>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    C
                </ImageFrame>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    H
                </ImageFrame>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    R
                </ImageFrame>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    <Image
                        src={denimImage}
                        className={animate ? "animate" : getClass()}
                    />
                    <Vignette $front />
                </ImageFrame>       
            </Images>
        </Wrapper>
    );
}

export default ImageSpread;
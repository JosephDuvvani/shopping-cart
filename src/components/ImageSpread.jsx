import styled, { keyframes } from 'styled-components';
import painting from '../images/imageSpread/painting.jpeg';
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
    width: 100%;
    height: 100%;
    background-color: black;
    border-radius: 1em;
    overflow: hidden;
    position: absolute;

    &:nth-child(2n) {
        background-color: purple;
    }
    &.initial {top: 200%;}

    &:nth-child(1) {
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
        &.animate {
            animation: ${spread(8, -2, '180%')} 1.5s ease-out forwards;
        }
        &.still {${still(8, -2, '180%')}} 
    }
`;
const Image = styled.img`
    width: 100%;
`;

const ImageSpread = () => {
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        if (sessionStorage.getItem('firstMount') === null) {
            setAnimate(true);
            setTimeout(() =>
                sessionStorage.setItem('firstMount', 1)
            ,1000)
        } else setAnimate(false);
    }, []);

    const getClass = () => {
        if (sessionStorage.getItem('firstMount') === null) return "initial";
        return "still";
    }

    return (
        <Wrapper>
            <Images>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    <Image src={painting} />
                </ImageFrame>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    
                </ImageFrame>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    <Image src={painting} />
                </ImageFrame>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    
                </ImageFrame>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    <Image src={painting} />
                </ImageFrame>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    
                </ImageFrame>
                <ImageFrame className={animate ? "animate" : getClass()}>
                    <Image src={painting} />
                </ImageFrame>       
            </Images>
        </Wrapper>
    );
}

export default ImageSpread;
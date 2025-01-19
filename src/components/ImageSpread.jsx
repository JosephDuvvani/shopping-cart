import styled, { keyframes } from 'styled-components';
import painting from '../images/imageSpread/painting.jpeg';

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

    &:nth-child(1) {
        animation: ${spread(-5, 5, '-180%')} 1.5s ease-out forwards;       
    }
    &:nth-child(2) {
        animation: ${spread(-5, -10, '-120%')} 1.5s ease-out forwards;     
    }
    &:nth-child(3) {
        animation: ${spread(-4, -1, '-60%')} 1.5s ease-out forwards;   
    }
    &:nth-child(4) {
        animation: ${spread(0, 0, 0)} 1.5s ease-out forwards;   
    }
    &:nth-child(5) {
        animation: ${spread(5, -1, '60%')} 1.5s ease-out forwards;   
    }
    &:nth-child(6) {
        animation: ${spread(5, 3, '120%')} 1.5s ease-out forwards;   
    }
    &:nth-child(7) {
        animation: ${spread(8, -2, '180%')} 1.5s ease-out forwards;  
    }
`;
const Image = styled.img`
    width: 100%;
`;

const ImageSpread = () => {
    return (
        <Wrapper>
            <Images>
                <ImageFrame>
                    <Image src={painting} />
                </ImageFrame>
                <ImageFrame>
                    
                </ImageFrame>
                <ImageFrame>
                    <Image src={painting} />
                </ImageFrame>
                <ImageFrame>
                    
                </ImageFrame>
                <ImageFrame>
                    <Image src={painting} />
                </ImageFrame>
                <ImageFrame>
                    
                </ImageFrame>
                <ImageFrame>
                    <Image src={painting} />
                </ImageFrame>       
            </Images>
        </Wrapper>
    );
}

export default ImageSpread;
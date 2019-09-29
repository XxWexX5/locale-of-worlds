import styled from 'styled-components';

import coolImages from 'cool-images';

export const Container = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${ coolImages.one(2048, 1080, true) });
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Box = styled.main`
    width: 100%;
    max-width: 560px;
    background-color: #FFFFFF;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    border-radius: 3px;
    padding: 35px 20px;
    margin: 20px;
    opacity: 0;
    animation: 1s animation-show forwards;
    position: relative;

    .container-back {
        position: absolute;
        top: 15px;
        right: 15px;

        a {
            color: #0269A4;
            text-decoration: none;

            &:hover {
                opacity: .7;
            }
        }
    }

    h1 {
        text-align: center;
        font-size: 28px;
    }

    @keyframes animation-show {
        0% {
            opacity: 0;
            transform: translate3d(0, -50px, 0);
        }    
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
`;
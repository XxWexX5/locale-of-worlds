import styled from 'styled-components';

import coolImages from 'cool-images';

export const StyledDefault = styled.div`
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

export const Container = styled.main`
    width: 100%;
    max-width: 560px;
    background-color: #FFFFFF;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    border-radius: 3px;
    padding: 35px 20px;
    margin: 20px;

    h1 {
        text-align: center;
        font-size: 28px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    min-height: 130px;

    input[type='text'] {
        font-family: 'Lato', sans-serif; 
        margin: 15px 0;
        padding: 10px 15px;
        font-size: 16px;
        color: #333333;
    }

    button {
        padding: 10px 0;
        font-family: 'Lato', sans-serif; 
        font-weight: bold;
        letter-spacing: .1em;
        text-transform: uppercase;
        border: 0;
        background-color: #333;
        border-bottom: 10px solid #222;
        color: #FFF;
        font-size: 16px;

        &:hover {
            opacity: .9;
        }

        &:active {
            transform: translatey(12px);
            border: 0;
            margin-bottom: 12px;
        }
    }
`;
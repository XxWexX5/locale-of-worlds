import styled from 'styled-components';

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
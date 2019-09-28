import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Squada+One&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    height, body, #root {
        min-height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Lato', sans-serif;
        color: #333333;
    }

    .title {
        font-family: 'Squada One', cursive;  
        text-transform: uppercase;
    }
`;
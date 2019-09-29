import styled from 'styled-components';

export const StyledResult = styled.div`
    .general {
        align-items: baseline; 
        background-repeat: repeat;
        min-height: 100vh;
        height: 100%;   
    }
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 420px;
    margin: 35px auto 10px;

    a {
        text-decoration: none
    }

    li {
        display: flex;
        justify-content: space-between;
        border: 1px double #333333;
        border-bottom: 0;
        padding: 10px;
        color: #333333;

        &:last-child {
            border: 1px double #333333
        }

        &:hover {
            opacity: .65;

            .icon-arrow {
                animation: .5s animation-right forwards;

                @keyframes animation-right {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(5px, 0, 0);    
                    }
                }
            }
        }

        .container-initials {
            display: flex;
            align-items: center;

            .icon-arrow {
                display: inline-block;
                margin-left: 5px;
            }
        }
    }
`;
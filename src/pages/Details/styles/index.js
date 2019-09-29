import styled from 'styled-components';

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 480px;
    margin: 15px auto;
    line-height: 1.8em;

    li {
        display: flex;

        strong {
            margin-right: 5px;
        }
    }
`;

export const SeeMore = styled.div`
    max-width: 480px;
    margin: 15px auto 0;
    display: flex;
    align-items: center;

    a {
        color: #0269A4;

        &:hover {
            opacity: .8;
            animation: .4s move-right forwards;

            svg {
                @keyframes move-right {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }

                    100% {
                        transform: translate3d(-3px, 0, 0);
                    } 
                }
            }
        }
    }

    svg {
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 1px;
    }

    .link {
        display: inline-block;
        margin-left: 5px;
    }
`;
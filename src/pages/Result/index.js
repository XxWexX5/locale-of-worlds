import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Box } from '../../utilities/SharedStyles';
import { List } from './styles/';

import { FaChevronRight } from 'react-icons/fa';

const Result = () => (
    <Container>
        <Box>
            <h1 className="title">Resultados</h1>

            <List>
                <Link to="#">
                    <li>
                        <span>Gotham City</span>
                        <div className="container-initials">
                            US
                            <FaChevronRight className="icon-arrow" />
                        </div>
                    </li>
                </Link>
            </List>
        </Box>
    </Container>
);

export default Result;

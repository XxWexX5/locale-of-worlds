import React from 'react';

import { Link } from 'react-router-dom';

import { FaLink } from 'react-icons/fa';

import { Container, Box } from '../../utilities/SharedStyles';

import { List, SeeMore} from './styles';

const Details = () => (
    <Container>
        <Box>
            <div className="container-back">
                <Link to="resultados">
                    {`< Voltar`}
                </Link>
            </div>

            <h1 className="title">São Paulo</h1>

            <List>
                <li>
                    <strong>Country:</strong>
                    <p>Brazil</p>
                </li>
                <li>
                    <strong>Time Zone:</strong>
                    <p>America/São Paulo</p>
                </li>
                <li>
                    <strong>GMT OFFSET:</strong>
                    <p>-2</p>
                </li>
                <li>
                    <strong>Population:</strong>
                    <p>10021295</p>
                </li>
                <li>
                    <strong>Lat:</strong>
                    <p>-23.5475</p>
                </li>
                <li>
                    <strong>Lng:</strong>
                    <p>-46.63611</p>
                </li>
            </List>

            <hr />

            <SeeMore>
                <Link to="#">
                    <FaLink />
                    <span className="link">Wikipédia</span>
                </Link>
            </SeeMore>
        </Box>
    </Container>
);

export default Details;

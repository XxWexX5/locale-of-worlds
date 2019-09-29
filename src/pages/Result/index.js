import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import { Container, Box } from '../../utilities/SharedStyles';
import { List } from './styles/';

import { FaChevronRight } from 'react-icons/fa';

const Result = ({ history }) => (
    <Container>
        { console.log(history.location.state.data) }

        <Box>
            <div className="container-back">
                <Link to="/">
                    {`< Voltar`}
                </Link>
            </div>

            <h1 className="title">Resultados</h1>

            <List>
                {
                    history.location.state.data.geonames.map(geoname => (
                        <Fragment>
                            <Link to={{pathname: '/detalhes', state: { geonameId: geoname.geonameId }}}>                                <li key={geoname.geonameId}>
                                    <span>{ geoname.name }</span>
                                    <div className="container-initials">
                                        { geoname.countryCode }
                                        <FaChevronRight className="icon-arrow" />
                                    </div>
                                </li>
                            </Link>
                        </Fragment>
                    ))
                }
            </List>
        </Box>
    </Container>
);

export default Result;

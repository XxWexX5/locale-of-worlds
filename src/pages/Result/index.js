import React, { Component, Fragment } from 'react';

import axios from 'axios';
import { apiSearch } from '../../services/api';

import { toaster } from 'evergreen-ui';

import { Link } from 'react-router-dom';

import { Container, Box } from '../../utilities/SharedStyles';
import { StyledResult, List } from './styles/';

import { FaChevronRight } from 'react-icons/fa';

export default class Result extends Component {
    state = {
        geonames: '',
        valueLocale: '',
    }

    async componentDidMount() {
        if(localStorage.getItem('valueLocale')) {
            const response = await axios.get(`${apiSearch}&name=${localStorage.getItem('valueLocale')}`);

            return this.setState({
                geonames: response.data.geonames,
            })
        }

        if(!localStorage.getItem('valueLocale') && !this.props.history.location.state) {
            localStorage.setItem('error', 'not-found');
            return this.props.history.push('/', {error: 'not-found'});
        }

        return this.setState({
            geonames: this.props.history.location.state.data.geonames,
            valueLocale: this.props.history.location.state.valueLocale,   
        });
    }

    render() {
        return(
            <StyledResult>
                <Container className="general">
                    <Box>
                        <div className="container-back">
                            <Link to="/">
                                {`< Voltar`}
                            </Link>
                        </div>

                        <h1 className="title">Resultados</h1>
                        
                        <List>
                            {
                                this.state.geonames ? (
                                    this.state.geonames.map(geoname => (
                                        <Fragment key={geoname.geonameId}>
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
                                ) : <h2>Carregando!</h2>
                            }
                        </List>
                    </Box>
                </Container>
            </StyledResult>
        );
    }
}
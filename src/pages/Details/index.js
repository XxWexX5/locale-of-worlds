import React, { Component } from 'react';

import axios from 'axios';
import { apiGet } from '../../services/api';
import { formatNumber } from '../../utilities/FormatNumber';

import { Link } from 'react-router-dom';

import { FaLink } from 'react-icons/fa';

import { Container, Box } from '../../utilities/SharedStyles';
import { List, SeeMore} from './styles';

export default class Details extends Component {
    state = {
        geoname: ''
    };

    async componentDidMount() {
        if(!this.props.history.location.state) {
            localStorage.setItem('error', 'not-found');
            return this.props.history.push('/', {error: 'not-found'});
        }

        const geonameId = this.props.location.state.geonameId;

        const response = await axios.get(`${apiGet}&geonameId=${geonameId}`);
        return this.setState({
            geoname: response.data
        });
    }

    render() {
        return(
            <Container>
                { console.log(this.state.geoname) }

                <Box>
                    <div className="container-back">
                        <Link to="resultados">
                            {`< Voltar`}
                        </Link>
                    </div>
        
                    <h1 className="title">{ this.state.geoname.name }</h1>
        
                    <List>
                        <li>
                            <strong>Country:</strong>
                            <p>{this.state.geoname.countryName || '...'}</p>
                        </li>
                        <li>
                            <strong>Time Zone:</strong>
                            <p>{this.state.geoname.timezone ? this.state.geoname.timezone.timeZoneId : '...'}</p>
                        </li>
                        <li>
                            <strong>GMT OFFSET:</strong>
                            <p>{this.state.geoname.timezone ? this.state.geoname.timezone.gmtOffset : '...'}</p>
                        </li>
                        <li>
                            <strong>Population:</strong>
                            <p>{formatNumber(this.state.geoname.population || 0) || '0'}</p>
                        </li>
                        <li>
                            <strong>Lat:</strong>
                            <p>{this.state.geoname.lat || '...'}</p>
                        </li>
                        <li>
                            <strong>Lng:</strong>
                            <p>{this.state.geoname.lng || '...'}</p>
                        </li>
                    </List>
        
                    <hr />
        
                    <SeeMore>
                        <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">
                            <FaLink />
                            <span className="link">Wikipédia</span>
                        </a>
                    </SeeMore>
                </Box>
            </Container>
        );
    }
}

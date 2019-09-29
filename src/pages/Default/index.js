import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import axios from 'axios';

import { apiSearch } from '../../services/api';

import { Container, Box } from '../../utilities/SharedStyles';
import { Form } from './style/StyledDefault';

export default class Default extends Component {
    state = {
        valueLocale: '',
        loader: false,
    };

    handleSubmitSearch = async (e) => {
        e.preventDefault();

        const { valueLocale } = this.state;

        this.setState({
            valueLocale: '',
            loader: true,
        });

        const response = await axios.get(`${apiSearch}&name=${valueLocale}`);
        
        return response ? 
            this.props.history.push('/resultados', { data: response.data }) :
            this.setState({ loader: false });
    };

    render() {
        return(
            <Container>
                <Box>
                    <h1 className="title">Busca de local</h1>
                    <Form onSubmit={this.handleSubmitSearch}>
                        <input 
                            type="text" 
                            placeholder="Cidade, Estado ou País" 
                            onChange={e => this.setState({ valueLocale: e.target.value })} 
                            value={this.state.valueLocale}
                        />
                        <button type="submit">{this.state.loader ? 'Carregando...' : 'Enviar'}</button>
                    </Form>    
                </Box>
            </Container>
        );
    }
}

import React, { Component } from 'react';

import axios from 'axios';

import { toaster } from 'evergreen-ui';

import { apiSearch } from '../../services/api';

import { Container, Box } from '../../utilities/SharedStyles';
import { Form } from './style/StyledDefault';

export default class Default extends Component {
    state = {
        valueLocale: '',
        loader: false,
    };

    componentDidMount() {
        if(localStorage.getItem('error')) {
            localStorage.removeItem('error');
            return toaster.danger(
                'Ops, ocorreu um erro! Digite novamente o local desejado.'
            )    
        }
    }

    handleSubmitSearch = async (e) => {
        e.preventDefault();

        const { valueLocale } = this.state;
        localStorage.setItem('valueLocale', valueLocale);

        if(!valueLocale) {
            return toaster.danger(
                'Por favor! Digite novamente o local desejado.'
            )    
        }

        this.setState({
            valueLocale: '',
            loader: true,
        });

        const response = await axios.get(`${apiSearch}&name=${valueLocale}`);
        
        return response ? 
            this.props.history.push('/resultados', { data: response.data, valueLocale: valueLocale }) :
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

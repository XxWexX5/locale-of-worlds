import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Container, Box } from '../../utilities/SharedStyles';
import { Form } from './style/StyledDefault';

export default class Default extends Component {
    handleSubmitSearch = () => {

    };

    render() {
        return(
            <Container>
                <Box>
                    <h1 className="title">Busca de local</h1>
                    <Form>
                        <input type="text" placeholder="Cidade, Estado ou País" />
                        <button onClick={this.handleSubmitSearch}>Enviar</button>
                    </Form>    
                </Box>
            </Container>
        );
    }
}

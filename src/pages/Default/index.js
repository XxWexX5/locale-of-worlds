import React from 'react';

import { StyledDefault, Container, Form } from './style/StyledDefault';

const Default = () => (
    <StyledDefault>
        <Container>
            <h1 className="title">Busca de local</h1>
            <Form>
                <input type="text" />
                <button>Enviar</button>
            </Form>    
        </Container>
    </StyledDefault>
);

export default Default;

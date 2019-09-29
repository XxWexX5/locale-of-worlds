import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Default from './pages/Default';
import Result from './pages/Result';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Default} />
            <Route path="/resultados" component={Result} />
        </Switch>
    </BrowserRouter>
);

export default Router;

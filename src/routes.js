import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Default from './pages/Default';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="" component={Default}/>
        </Switch>
    </BrowserRouter>
);

export default Router;

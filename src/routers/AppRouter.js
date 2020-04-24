import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import BasePage from '../components/pages/BasePage';
import LoopsPage from '../components/pages/LoopsPage';
import AboutPage from '../components/pages/AboutPage';
import NotFoundPage from '../components/pages/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={BasePage} exact={true}/>
                <Route path="/loops" component={LoopsPage} exact={true}/>
                <Route path="/about" component={AboutPage} exact={true}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
</BrowserRouter>
);

export default AppRouter;
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import BasePage from '../components/BasePage';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={BasePage} exact={true}/>
                <Route path="/about" component={AboutPage} exact={true}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
</BrowserRouter>
);

export default AppRouter;
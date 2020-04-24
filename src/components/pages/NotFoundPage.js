import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="container">
        <div className="notfound">
            404 - <Link to="/">Go home</Link>
        </div>
    </div>
);

export default NotFoundPage;
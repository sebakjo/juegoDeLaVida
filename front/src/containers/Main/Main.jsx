import React from 'react';
import Tablero from '../Tablero';
import { Route } from 'react-router-dom';

export default () => {
    return (
        <div id='Main'>
            <Route path='/' component={Tablero} />
        </div>
    )
}
import React from 'react'
import UseAuth from './UseAuth'
import { Container } from 'react-bootstrap';

export default function MainPage( {code} ) {
    const access_token = UseAuth( code );
    return <Container>Donkey</Container>
}
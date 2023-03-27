import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Header, Grid, Icon } from 'semantic-ui-react'
import HeadingPage from './HeadingPage'

const AppHeading = ({setPage, setIsVisible}) => {

    function setHeadingPage (page) {
        setPage(page)
        setIsVisible(true)
    }

    return (
        <Grid centered verticalAlign='middle'>
            <Grid.Column width={4} textAlign='center'>
                <Icon link circular name='setting' onClick={() => setHeadingPage('setting')}/>
                <Icon link circular name='help' onClick={() => setHeadingPage('help')}/>
            </Grid.Column>
            <Grid.Column width={8} textAlign='center'>
                <Header size='huge' textAlign='center'>Health App</Header>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
                <Icon link circular name='trophy' onClick={() => setHeadingPage('trophy')}/>
                <Icon link circular name='user' onClick={() => setHeadingPage('user')}/>
            </Grid.Column>
        </Grid>
    )
}

export default AppHeading;
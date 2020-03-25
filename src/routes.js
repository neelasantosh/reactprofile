import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Footer from './components/footer';
import ContactUs from './components/contactus';
import {ContainerDiv} from './components/header';


const Main = () => (
    <main>
        <Header />
        <ContainerDiv>
        <Switch>
            <Route exact path='/reactprofile/' component={About} />
            <Route exact path='/reactprofile/about' component={About} />
            <Route exact path='/reactprofile/skills' component={Skills} />
            <Route exact path='/reactprofile/contact' component={ContactUs} />
            <Route path='/reactprofile/*' component={About} />    
            <Route path='*' component={About} />    
        </Switch>
        </ContainerDiv>
        <Footer />
    </main>
)

export default Main;
import React from 'react';
import { CenteredHeader, Centered, Content } from './header';

function About(){
    return(
        <div>
            <CenteredHeader>About</CenteredHeader>
            <div>
                <Centered>Hi! I'm Neela Santosh Kumar. I'm a Senior Associate Consultant at Infosys </Centered>
                <Content>
                    I have 4+ years of experience on React JS and 1 year experience on React Native, Node Js, Express and MongoDB.
                    I am self learner and motivated person. I can work on web related stuff alone or 
                    in a good team. 
                </Content>
            </div>
        </div>
    )    
}

export default About;
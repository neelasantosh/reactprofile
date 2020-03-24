import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './nav';

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  color: black;
`;

const ProfileImg = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

export const CenteredHeader = styled.h4`
  text-align: center;
  margin-bottom: 1.25em;
  font-weight: 500;
`

export const ContainerDiv = styled.div`
    margin: 1% 17% 3% 17%;
    flex: 1;
    font-family: 'Open Sans', sans-serif;
        @media (max-width: 600px)
        {
            text-align : center;
        }
`
export const Tags = styled.h5`
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
`
export const Centered= styled.div`
    text-align: center;
    margin-bottom: 1.25em;
    font-weight: 500;
    color: #648b98
`

export const TagName = styled.ul`
    font-size: 14px;
    font-weight: 400;
    color: #648b98;
    font-family: 'Open Sans', sans-serif;
`

export const Content = styled.div`
    text-align: center;
    font-weight: 500;
    color: #648b98
`


function Header() {

    return(
            <HeaderDiv>
                <Link to='/'>
                    <ProfileImg src={require("../assets/images/santu.jpeg")} alt="DP"/> 
                    <CenteredHeader>
                        Santosh Kumar
                    </CenteredHeader>
                </Link>
                <Nav />      
            </HeaderDiv>
    );
}

export default Header
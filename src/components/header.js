import React, { useState, useEffect, useRef } from 'react';
import Typing from 'react-typing-animation';
import styled from 'styled-components';
import CLOUDS from 'vanta/dist/vanta.clouds.min'
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
const Header = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(CLOUDS({
          el: myRef.current
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    return (<div  ref={myRef}>
            <HeaderDiv>
                <Link to='/'>
                    <ProfileImg src={require("../assets/images/santu.jpeg")} alt="DP"/> 
                    <CenteredHeader>
                    <Typing>
                        <div>
                            Hi! I am Neela Santosh Kumar, &nbsp;
                        <Typing.Delay count={1} loop ms={1000} />
                            React JS Developer    
                        </div>
                    </Typing>
                    </CenteredHeader>
                </Link>
                <Nav />      
            </HeaderDiv>
    </div>)
  }
  

// function Header() {

//     return(
//             <HeaderDiv>
//                 <Link to='/'>
//                     <ProfileImg src={require("../assets/images/santu.jpeg")} alt="DP"/> 
//                     <CenteredHeader>
//                         Santosh Kumar
//                     </CenteredHeader>
//                 </Link>
//                 <Nav />      
//             </HeaderDiv>
//     );
// }

export default Header
import React, { Component } from 'react';
import styled from 'styled-components';


const FooterDiv = styled.div`
  text-align: center;
  padding: 2% 0;
`;

const GroupIcons = styled.ul`
  list-style: none;
  padding: 0;
`;

const IconList = styled.li`
  display: inline;
`;

const FontAwesomeIcon = styled.i`
  &:hover {
    color: grey;    
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
            <div className="row" style={{ margin: 0 }}>
              <div className="col-lg-12">
                <GroupIcons>
                    <IconList title="Gmail"><a href="mailto:neela.santosh2405@gmail.com">
                        <FontAwesomeIcon className="fa fa-envelope fa-fw fa-2x" /></a>
                    </IconList>
                    <IconList title="Linkedin"><a href="https://www.linkedin.com/in/santoshneela/">
                        <FontAwesomeIcon className="fa fa-linkedin fa-fw fa-2x" /></a>
                    </IconList>
                    <IconList title="GitHub"><a href="https://github.com/neelasantosh">
                        <FontAwesomeIcon className="fa fa-github fa-fw fa-2x" /></a>
                    </IconList>
                    <IconList title="CodePen"><a href="https://codepen.io/SantoshNeela">
                        <FontAwesomeIcon className="fa fa-codepen fa-fw fa-2x" /></a>
                    </IconList>
                </GroupIcons>
                <p>Background - powered by Vanta js</p>
              </div>
            </div>            
      </FooterDiv>
        );
  }
}

export default Footer;
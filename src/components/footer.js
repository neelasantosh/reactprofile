import React, { Component } from 'react';
import styled from 'styled-components';


const FooterDiv = styled.div`
  background-color: #ebeaea;
  text-align: center;
  padding: 2% 0;
`;

const GroupIcons = styled.ul`
  list-style: none;
  padding: 0;
`;

const IconList = styled.li`
  display: inline;
  color: red;
`;

const FontAwesomeIcon = styled.i`
  &:hover {
    color: grey;
    transition: all .3s ease;
    transform: scale(1.1) translateY(-5px);
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
            <div className="row" style={{ margin: 0 }}>
              <div className="col-lg-12">
                <GroupIcons>
                    <IconList title="Gmail"><a href="mailto:neela.santosh2405@gmail.com" target="_blank">
                        <FontAwesomeIcon className="fa fa-envelope fa-fw fa-2x" /></a>
                    </IconList>
                    <IconList title="Linkedin"><a href="https://www.linkedin.com/in/santoshneela/" target="_blank">
                        <FontAwesomeIcon className="fa fa-linkedin fa-fw fa-2x" /></a>
                    </IconList>
                    <IconList title="GitHub"><a href="https://github.com/neelasantosh" target="_blank">
                        <FontAwesomeIcon className="fa fa-github fa-fw fa-2x" /></a>
                    </IconList>
                    <IconList title="CodePen"><a href="https://codepen.io/SantoshNeela" target="_blank">
                        <FontAwesomeIcon className="fa fa-codepen fa-fw fa-2x" /></a>
                    </IconList>
                </GroupIcons>
              </div>
            </div>            
      </FooterDiv>
        );
  }
}

export default Footer;
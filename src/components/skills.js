import React from 'react';
import { CenteredHeader, Tags,  TagName } from './header';

function Skills(){
    return(
        <div>
        <CenteredHeader>Skills</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <Tags>Front-end:</Tags>
              <TagName>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>JavaScript (ES6)</li>
                <li>CSS3</li>
                <li>AJAX</li>
                <li>jQuery</li>
              </TagName>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <Tags>Back-end:</Tags>
              <TagName>
                <li>Node.js</li>
                <li>Express</li>
              </TagName>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <Tags>Other:</Tags>
              <TagName>
                <li>Git</li>
                <li>Webpack</li>
                <li>JSON</li>
                <li>Agile development</li>
              </TagName>
            </div>
        </div>
        </div>
    )    
}

export default Skills;
import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './header.js'

const FormDiv = styled.div`
  margin: 0 auto;
  width: 50%;
`

const FormLabels = styled.label`
  display: block;
`

const FormInputs = styled.input`
  width: 100%;
`

const CommentInputs = styled.textarea`
  width: 100%;
  height: 6em;
`

const EmailToMe = styled.p`
  text-align: center;
  padding: 4%;
`

function ContactUs() {
    return (
      <div>
        <CenteredHeader>Get in touch!!</CenteredHeader>

        <FormDiv>
          <form action="https://formspree.io/neela.santosh2405@gmail.com" method="POST" id="contactform">
            <div>
              <FormLabels>Name:</FormLabels>
              <FormInputs type="text" name="name" />
            </div>
            <div>
              <FormLabels>Email:</FormLabels>
              <FormInputs type="text" name="replytome" />
            </div>
            <div>
              <FormLabels>Comment:</FormLabels>
              <CommentInputs name="comments" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </FormDiv>

        <EmailToMe title="email">Or, email me at <a href="mailto:neela.santosh2405@gmail.com" target="_blank"><strong>neela.santosh2405@gmail.com</strong></a>.</EmailToMe>

        
      </div>
    );
}

export default ContactUs;
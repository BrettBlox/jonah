import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import SEO from '../components/seo'

import useForm from '../hooks/use-form'
import { primary } from '../variants'

const Form = styled(motion.form)`
  width: 100%;
  padding: 4rem 8rem;
  border-radius: 0.5em;
  background: var(--card-bg);
  box-shadow: var(--card-shadow);

  display: grid;
  grid-template-areas:
    'heading heading'
    'person email'
    'message message'
    'button button';
  grid-gap: 2rem;

  h1 {
    grid-area: heading;
    text-align: center;
    margin-bottom: 3rem;
  }

  input,
  textarea {
    background-color: transparent !important;
    width: 100%;
    border: 0;
    border-bottom: 1px solid var(--beige);
    border-radius: 0;
    color: var(--white);
  }

  label {
    margin: 0 0 2rem;
    width: 100%;
    display: block;
  }

  label:first-of-type {
    grid-area: person;
  }

  label:nth-child(2) {
    grid-area: email;
  }

  label:last-of-type {
    grid-area: message;
    width: 100%;
  }

  button {
    grid-area: button;
    width: 100%;
    max-width: 436px;
    padding: 0.5rem;
    background: linear-gradient(180deg, var(--green-400), var(--green-900));
    border: none;
    border-radius: 5px;
    box-shadow: var(--card-shadow);
    color: var(--white);
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-out;

    :hover {
      box-shadow: var(--card-shadow-hover);
      transform: translateY(-3px) scale(1.01);
      background: linear-gradient(180deg, var(--green-400), var(--green-800));
    }
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
    display: block;
  }
`

const ContactPage = () => {
  const { handleSubmit, handleInputChange, state } = useForm()

  return (
    <>
      <SEO title='Contact' lang='en' />
      <motion.div
        initial='exit'
        animate='enter'
        exit='exit'
        css={`
          margin-top: -2.75rem;
          padding-top: 4em;

          @media screen and (max-width: 600px) {
            margin-top: -4.3rem;
          }
        `}
      >
        <Form
          action='/thanks'
          name='contact'
          method='POST'
          data-netlify='true'
          netlify-honeypot='bot-field'
          variants={primary}
          onSubmit={handleSubmit}
        >
          <h1>Send me a Message</h1>
          <input type='hidden' name='bot-field' onChange={handleInputChange} />
          <input type='hidden' name='form-name' value='contact' />
          <label htmlFor='name'>
            Name
            <input
              id='name'
              name='name'
              type='text'
              value={state.name}
              onChange={handleInputChange}
              autoComplete='off'
              autoCapitalize='words'
              autoCorrect='off'
              required
            />
          </label>
          <label htmlFor='email'>
            Email
            <input
              id='email'
              name='email'
              type='email'
              value={state.email}
              onChange={handleInputChange}
              autoComplete='off'
              autoCapitalize='none'
              autoCorrect='off'
              required
            />
          </label>
          <label htmlFor='message'>
            Message
            <textarea
              id='message'
              name='message'
              type='text'
              value={state.message}
              onChange={handleInputChange}
              autoComplete='off'
              autoCapitalize='on'
              autoCorrect='off'
              required
            />
          </label>
          <button type='submit'>Send</button>
        </Form>
      </motion.div>
    </>
  )
}

export default ContactPage

import React, { useReducer } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import SEO from '../components/seo'

import useForm from '../hooks/use-form'
import { primary, secondary } from '../variants'

const Form = styled(motion.form)`
  width: 100%;
  padding: 4rem 8rem;
  border-radius: 0.5em;
  background: linear-gradient(180deg, rgba(82, 107, 45, 0.06), rgba(82, 107, 45, 0.06)),
    linear-gradient(180deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7));
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);

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
  }

  input,
  textarea {
    background-color: transparent;
    width: 100%;
    border: 0;
    border-bottom: 1px solid var(--beige);
    border-radius: 0;
  }

  div {
    margin: 0 0 2rem;
    width: 100%;
  }

  div:first-of-type {
    grid-area: person;
  }

  div:nth-child(2) {
    grid-area: email;
  }

  div:last-of-type {
    grid-area: message;
    width: 100%;
  }

  button {
    grid-area: button;
    width: 50%;
    margin: 0;
    padding: 0.5rem;
    background: linear-gradient(180deg, var(--green-400), var(--green-900));
    border: none;
    border-radius: 5px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
      0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    color: var(--white);
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-out;

    :hover {
      box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
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
      <SEO title='Contact' />
      <motion.div
        initial='exit'
        animate='enter'
        exit='exit'
        css={`
          margin-top: -2.75rem;
          padding-top: 4em;
        `}
      >
        <Form
          action='/thanks'
          name='contact'
          method='POST'
          data-netlify='true'
          variants={primary}
          onSubmit={handleSubmit}
        >
          <h1>Send me a Message</h1>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <button type='submit'>Send</button>
        </Form>
      </motion.div>
    </>
  )
}

export default ContactPage

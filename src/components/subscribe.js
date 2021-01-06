/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import useForm from '../hooks/use-form'
import { primary } from '../variants'

const Form = styled(motion.form)`
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: left;

  label {
    color: var(--light);
    font-weight: bold;
    font-size: 0.875rem;
  }

  input[type],
  button {
    border: none;
    margin: 0;
    font: inherit;
    line-height: 1;
    padding: 0.8rem;
    outline-offset: -1px;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }

  input {
    background: var(--light);
    border-radius: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    flex: auto;
  }

  button {
    min-width: 4rem;
    background: linear-gradient(180deg, var(--green-400), var(--green-900));
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: var(--card-shadow);
    color: var(--light);
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1;
    transition: all 0.3s ease-out;
    padding: 0.8rem;
    outline-offset: -1px;
    cursor: pointer;

    :hover {
      box-shadow: var(--card-shadow-hover);
      filter: brightness(1.5);
    }
  }

  *:focus {
    outline: none;
    box-shadow: 0 13px 27px -5px var(--green-100),
      0 8px 16px -8px var(--green-100), 0 -6px 16px -6px var(--green-100);
  }
`

const Subscribe = () => {
  const { handleInputChange, state, setState } = useForm()
  const [buttonText, setButtonText] = useState('Subscribe')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [response, setResponse] = useState({})
  const [subscribeText, setSubscribeText] = useState(
    'Sign up to receive my latest musings'
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonText('Subscribing...')
    setState({})
    setIsSubscribing(true)
    const result = await addToMailchimp(state.email)
    setResponse(result)

    setTimeout(() => {
      if (result.result === 'success')
        setSubscribeText('Thank you for subscribing!')
      if (result.result === 'error')
        setSubscribeText(
          'Thanks, but it looks like you are already subscribed!'
        )
      setButtonText('Subscribe')
      setIsSubscribing(false)
    }, 1000)
  }

  return (
    <div
      css={`
        width: 25rem;
        max-width: 90vw;
        margin: 0 auto 5rem !important;
      `}
    >
      <h2
        css={`
          color: var(--light);
          text-align: left;
          margin-bottom: 2rem;
        `}
      >
        {subscribeText}
      </h2>
      <Form
        name='newsletter'
        variants={primary}
        initial='exit'
        animate='enter'
        exit='exit'
        onSubmit={handleSubmit}
      >
        <label htmlFor='email'>Email Address</label>
        <div
          css={`
            display: flex;
          `}
        >
          <input
            id='email'
            name='email'
            type='email'
            value={state.email || ''}
            onChange={handleInputChange}
            autoCapitalize='none'
            autoCorrect='off'
            required
            pattern='[^@]+@[^\.]+\..+'
          />
          <button disabled={isSubscribing} type='submit'>
            {buttonText}
          </button>
        </div>
      </Form>
    </div>
  )
}

export default Subscribe

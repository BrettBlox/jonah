import React, { useReducer } from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import SEO from '../components/seo'

// form status variables
const IDLE = 'IDLE'
const PENDING = 'PENDING'
const SUCCESS = 'SUCCESS'
const ERROR = 'ERROR'

// initial state values
const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  message: '',
  status: IDLE,
}

// action types
const UPDATE_FIELD_VALUE = 'UPDATE_FIELD_VALUE'
const UPDATE_STATUS = 'UPDATE_STATUS'
const RESET = 'RESET'

// 3rd parameter for lazy initialization
const init = initialState => initialState

// reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FIELD_VALUE:
      return { ...state, [action.payload.field]: action.payload.value }
    case UPDATE_STATUS:
      return { ...state, status: action.payload.status }
    case RESET:
      return init(INITIAL_STATE)
    default:
      return INITIAL_STATE
  }
}

const Form = styled(motion.form)`
  max-width: 80vw;
  display: grid;
  border-radius: 0.5em;
  background: linear-gradient(180deg, rgba(82, 107, 45, 0.06), rgba(82, 107, 45, 0.06)),
    linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
  padding: 8em;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  /* height: 300px; */

  grid-template-areas:
    'person email'
    'message message'
    'button button';
  grid-gap: 2rem;

  label {
    margin: 0;
  }

  input,
  textarea {
    background-color: transparent;
    width: 100%;
  }

  input {
    border: 0;
    border-bottom: 1px solid var(--green);
  }

  [for='name'] {
    grid-area: person;
  }

  [for='email'] {
    grid-area: email;
  }

  [for='message'] {
    grid-area: message;
  }

  [type='submit'] {
    grid-area: button;
    width: 50%;
    margin: 0;
    padding: 0.5rem;
    background: linear-gradient(180deg, var(--green), var(--grey-800));
    border: none;
    border-radius: 5px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
      0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    color: var(--grey-200);
    cursor: pointer;
    transition: all 0.15s ease-out;

    :hover {
      box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      transform: translateY(-3px) scale(1.01);
    }
    :disabled {
      background: var(--grey-400);
      color: var(--grey-800);
      box-shadow: none;
      transform: none;
      pointer-events: none;
    }
  }
`

// Form component
const ContactPage = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE, init)
  console.log(state)
  // action creators
  const updateFieldValue = (field, value) => {
    dispatch({
      type: UPDATE_FIELD_VALUE,
      payload: {
        field,
        value,
      },
    })
  }

  const updateStatus = status => {
    dispatch({
      type: UPDATE_STATUS,
      payload: {
        status,
      },
    })
  }

  const resetForm = () => {
    dispatch({ type: RESET })
  }

  // MOCK submit handler
  const handleSubmit = event => {
    event.preventDefault()
    updateStatus(PENDING)

    setTimeout(() => {
      updateStatus(SUCCESS)
    }, 2000)
  }

  // Success state UI
  if (state.status === SUCCESS) {
    return (
      <>
        <SEO title='Contact' />
        <p>Your message was sent successfully.</p>
        <button type='button' onClick={resetForm}>
          Send Another Message
        </button>
      </>
    )
  }

  // Error state UI
  if (state.status === ERROR) {
    return (
      <>
        <SEO title='Contact' />
        <p>Something went wrong...</p>
        <button type='button' onClick={resetForm}>
          Try Again
        </button>
      </>
    )
  }

  // Default state UI
  return (
    <>
      <SEO title='Contact' />
      <h1>Send a Message</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Name
          <input
            id='name'
            name='name'
            type='text'
            value={state.name}
            onChange={e => updateFieldValue(e.target.name, e.target.value)}
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
            onChange={e => updateFieldValue(e.target.name, e.target.value)}
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
            onChange={e => updateFieldValue(e.target.name, e.target.value)}
            required
          />
        </label>
        <button type='submit' disabled={state.status === PENDING}>
          {state.status !== PENDING ? 'Send' : 'Sending...'}
        </button>
      </Form>
    </>
  )
}

export default ContactPage

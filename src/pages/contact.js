import React, { useReducer } from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import SEO from '../components/seo'

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

// form status variables
const IDLE = 'IDLE'
const PENDING = 'PENDING'
const SUCCESS = 'SUCCESS'
const ERROR = 'ERROR'

// initial state values
const INITIAL_STATE = {
  bot: '',
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
  padding: 4rem 8rem;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);

  grid-template-areas:
    'person email'
    'message message'
    'button button';
  grid-gap: 2rem;

  input,
  textarea {
    background-color: transparent;
    width: 100%;
    border: 0;
    border-bottom: 1px solid var(--green);
    position: absolute;
    top: 0;
    left: 0;
  }

  div {
    margin: 0 0 2rem;
    position: relative;
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

const ContactPage = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE, init)

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

    const form = event.target

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => updateStatus(SUCCESS))
      .catch(error => {
        console.error(error)
        updateStatus(ERROR)
      })
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
      <Form onSubmit={handleSubmit} name='contact' method='POST' data-netlify='true' netlify-honeypot='bot'>
        <input type='hidden' name='form-name' value='contact' />
        <p className='visually-hidden'>
          <label htmlFor='bot'>
            Don't fill this out if you are human...
            <input
              id='bot'
              name='bot'
              value={state.bot}
              onChange={e => updateFieldValue(e.target.name, e.target.value)}
            />
          </label>
        </p>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <button type='submit' disabled={state.status === PENDING}>
          {state.status !== PENDING ? 'Send' : 'Sending...'}
        </button>
      </Form>
    </>
  )
}

export default ContactPage

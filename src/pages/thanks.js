import React from 'react'
import { motion } from 'framer-motion'
// import styled from 'styled-components'

import SEO from '../components/seo'
import ReadLink from '../components/read-link'

import { primary, secondary } from '../variants'

const Thanks = () => (
  <>
    <SEO title='Thanks!' lang='en' />
    <motion.div initial='exit' animate='enter' exit='exit'>
      <motion.section variants={primary}>
        <h1>Thanks for your message!</h1>
        <p>I am looking forward to reading it.</p>
      </motion.section>
      <motion.div variants={secondary}>
        <ReadLink to='/'>&larr; Back Home</ReadLink>
      </motion.div>
    </motion.div>
  </>
)

export default Thanks

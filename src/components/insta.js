import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

import useInstagram from '../hooks/use-instagram'

const InstaGrid = styled(motion.section)`
  img {
    margin: 0;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
    justify-content: center;
    padding-top: 1rem;

    a {
      box-shadow: var(--card-shadow);
      overflow: hidden;
      border-radius: 0.5em;
      transition: all 0.3s ease-out;
      max-width: 382px;

      :hover {
        box-shadow: var(--card-shadow-hover);
        transform: translateY(-3px) scale(1.01);
      }
    }
    @media screen and (max-width: 574px) {
      grid-template-columns: 1fr;
      a {
        max-width: none;
      }
    }
  }

  a.instalink {
    display: inline-block;
    text-transform: uppercase;
    color: var(--text-primary);
    margin-top: 2rem;
  }
`

const Insta = ({ variants }) => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]
  return (
    <InstaGrid variants={variants} aria-labelledby='instagram-posts'>
      <div>
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image alt='Humdrum Dandelion Instagram Image' fluid={photo.fluid} />
          </a>
        ))}
      </div>
      <a className='instalink' href={`https://instagram.com/${username}`}>
        See more on Instagram &rarr;
      </a>
    </InstaGrid>
  )
}

Insta.propTypes = {
  variants: PropTypes.object,
}

export default Insta

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
      box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
        0 -6px 16px -6px rgba(0, 0, 0, 0.025);
      overflow: hidden;
      border-radius: 0.5em;
      transition: all 0.3s ease-out;
      max-width: 382px;

      :hover {
        box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
          0 -12px 36px -8px rgba(0, 0, 0, 0.025);
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
    color: var(--green-900);
    margin-top: 4rem;
    @media screen and (max-width: 500px) {
      margin-top: 3rem;
    }
  }
`

const Insta = ({ variants }) => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]
  return (
    <InstaGrid variants={variants} aria-labelledby='instagram-posts'>
      <h2 id='instagram-posts'>Instagram posts from {username}</h2>
      <div>
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image alt={photo.caption} fluid={photo.fluid} />
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

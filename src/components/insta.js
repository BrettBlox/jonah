import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

import useInstagram from '../hooks/use-instagram'

const InstaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 261px);
  grid-gap: 2rem;
  margin-bottom: 2rem;
  justify-content: space-between;

  a {
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
      0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    overflow: hidden;
    border-radius: 0.5em;
    transition: all 0.15s ease-out;

    :hover {
      box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      transform: translateY(-3px) scale(1.01);
    }
  }
`

const Insta = () => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]
  const pickles = 'pickles'
  return (
    <>
      <h2>Instagram posts from {username}</h2>
      <InstaGrid>
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image alt={photo.caption} fluid={photo.fluid} />
          </a>
        ))}
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image alt={photo.caption} fluid={photo.fluid} />
          </a>
        ))}
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image alt={photo.caption} fluid={photo.fluid} />
          </a>
        ))}
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image alt={photo.caption} fluid={photo.fluid} />
          </a>
        ))}
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image alt={photo.caption} fluid={photo.fluid} />
          </a>
        ))}
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image alt={photo.caption} fluid={photo.fluid} />
          </a>
        ))}
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image alt={photo.caption} fluid={photo.fluid} />
          </a>
        ))}
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image alt={photo.caption} fluid={photo.fluid} />
          </a>
        ))}
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image alt={photo.caption} fluid={photo.fluid} />
          </a>
        ))}
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image alt={photo.caption} fluid={photo.fluid} />
          </a>
        ))}
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image alt={photo.caption} fluid={photo.fluid} />
          </a>
        ))}
      </InstaGrid>
      <a href={`https://instagram.com/${username}`}>See more on Instagram &rarr;</a>
    </>
  )
}

export default Insta

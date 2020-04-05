import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { motion } from 'framer-motion'

import { primary, secondary } from '../variants'

import ReadLink from '../components/read-link'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query JonahPortraitQuery {
      file(relativePath: { eq: "jonah-portrait.jpeg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <motion.div initial='exit' animate='enter' exit='exit'>
      <motion.div variants={primary}>
        <Image
          css={`
            width: 400px;
            max-width: 70vw;
            border-radius: 50%;
            margin: 0 auto;
          `}
          fluid={data.file.sharp.fluid}
        />
      </motion.div>
      <motion.section variants={secondary}>
        <h1>About Jonah</h1>
        <p>
          Tacos iceland stumptown meggings, chambray master cleanse cold-pressed. Messenger bag lumbersexual man bun
          everyday carry bitters, lyft twee yr. Neutra craft beer kitsch palo santo. Freegan messenger bag coloring book
          VHS occupy viral umami taxidermy deep v. Ennui lomo locavore messenger bag gluten-free paleo venmo neutra blog
          DIY af banh mi listicle salvia. Jean shorts iPhone yr dreamcatcher.{' '}
        </p>
        <p>
          Brunch pug VHS organic prism activated charcoal celiac bicycle rights food truck tousled pitchfork occupy
          chia. Kogi chambray cornhole knausgaard PBR&B subway tile snackwave ugh. Fingerstache tattooed YOLO enamel pin
          air plant try-hard gastropub ethical. Forage pinterest VHS hell of stumptown schlitz. Etsy disrupt twee cronut
          authentic whatever beard. Jianbing slow-carb polaroid, poutine post-ironic woke sartorial synth.{' '}
        </p>
        <p>
          La croix affogato forage, fashion axe jean shorts meh blue bottle normcore stumptown put a bird on it crucifix
          polaroid bushwick synth. Ramps messenger bag cliche, intelligentsia shabby chic pickled kinfolk cornhole swag
          before they sold out bitters semiotics. Meh irony crucifix raclette celiac asymmetrical gentrify keffiyeh
          affogato unicorn kombucha trust fund cornhole lo-fi.
        </p>
      </motion.section>
      <motion.div variants={secondary}>
        <ReadLink to='/'>&larr; Back Home</ReadLink>
      </motion.div>
    </motion.div>
  )
}

export default AboutPage

import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-catamaran'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Gulshan Saini`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Personal blog by{' '}
          <a href="https://twitter.com/gulshansainis">Gulshan Saini</a>.{' '}
          For&nbsp;developer, by developer.
        </p>
      </div>
    )
  }
}

export default Bio

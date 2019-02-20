import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  a: {
    color: '#3f3b80',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'p code': {
    fontSize: '1.1rem',
  },
  'h1,h2,h3,h4,h5,h6': {
    fontFamily: ['Catamaran', 'sans-serif'].join(','),
    // fontWeight: 600,
    letterSpacing: '2px',
  },
  h1: {
    borderBottom: '1px dotted #d6d9e0',
  },
  body: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

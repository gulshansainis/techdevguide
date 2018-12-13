import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

injectGlobal`
  ${styledNormalize}
  
  @import url("https://fonts.googleapis.com/css?family=Droid+Serif:400,700|Catamaran:100,400,700");
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-family: Droid Serif,serif;
    font-size: 90%;
    line-height: 1.6;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    background: #f9fafc;
    font-family: Catamaran, 'Open Sans', sans-serif; 
    line-height: 1.5;
    padding: 50px 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: 2.4414rem
  }

  h1,h2 {
      line-height: 2.7rem;
      margin-bottom: 1.53rem
  }

  h2 {
      font-size: 1.9531rem
  }

  h3 {
      font-size: 1.5625rem
  }

  h3,h4 {
      line-height: 1.8rem;
      margin-bottom: 1.53rem
  }

  h4 {
      font-size: 1.25rem
  }

  h5,h6 {
      font-size: 1rem;
      line-height: 1.8rem;
      margin-bottom: 1.53rem
  }

  h1,h2,h3,h4,h5,h6 {
      font-family: Catamaran,sans-serif;
      font-weight: 400
  }

  img {
    max-width: 100%;
  }

  .gatsby-highlight {
    border-bottom: 1px solid #e0e6ed;
    border-top: 1px solid #e0e6ed;
    margin: 15px -100px;
    padding: 0;

    pre[class*="language-"] {
      margin: 0;
      padding: 25px 100px;
    }
  }

  pre[class*="language-"] {
    background: rgba(245, 245, 245, 1);
    color: rgb(65, 76, 94);  }

  @media only screen and (max-width: 870px) {
    .gatsby-highlight {
      margin: 15px -15px;

      pre[class*="language-"] {
        padding: 25px;
      }
    }
  }
`;

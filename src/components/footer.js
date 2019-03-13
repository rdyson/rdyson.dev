import React from 'react'
import footerStyles from './footer.module.css'
import github from '../../static/icons/github.svg'
import twitter from '../../static/icons/twitter.svg'
import dribbble from '../../static/icons/dribbble.svg'
import linkedin from '../../static/icons/linkedin.svg'

export default ({ scrollTop, title }) => (
  <footer>
    <nav>
      <ul>
        <li>
          <a href="//github.com/rdyson" title="GitHub" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="//twitter.com/rdyson" title="Twitter" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="//dribbble.com/rdyson" title="Dribbble" target="_blank" rel="noopener noreferrer">
            <img src={dribbble} alt="Dribbble" />
          </a>
        </li>
        <li>
          <a href="//linkedin.com/in/rdyson" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </nav>
    {/* <span>
      &copy; {new Date().getFullYear()} {title}
    </span> */}
  </footer>
)

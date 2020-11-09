import PropTypes from "prop-types"
import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

const Header = ({ siteTitle }) => {
  const { languages, changeLanguage } = useI18next()

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        color:"#ffffff"
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        {console.log(languages,'languages')}
        <h3>Select Language</h3>
        <ul className="languages">
          {languages.map(lng => (
            <li key={lng}>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault()
                  changeLanguage(lng)
                }}
              >
                {lng}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

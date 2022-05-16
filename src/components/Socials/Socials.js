import React from 'react'
import { SocialsAnchor, SocialsSection, SocialsText } from './Styled.Socials'
import weekday from '../../helpers/Days'

function Socials() {
  return (
    <SocialsSection>
      <SocialsAnchor href="https://github.com/thibaudbrault" target="_blank" rel="noopener noreferrer"
        initial={{ y: 50 }}
        transition={{ duration: 2.5 }}
        animate={{ y: 0 }}
      >
        Github
      </SocialsAnchor>
      <SocialsText
        initial={{ y: 50 }}
        transition={{ duration: 2 }}
        animate={{ y: 0 }}
      >
        Bon <span>{weekday()}</span>
      </SocialsText>
      <SocialsAnchor href="https://www.linkedin.com/in/thibaud-brault/" target="_blank" rel="noopener noreferrer"
        initial={{ y: 50 }}
        transition={{ duration: 2.5 }}
        animate={{ y: 0 }}
      >
        Linkedin
      </SocialsAnchor>
    </SocialsSection>
  )
}

export default Socials
import { FC } from 'react'
import { LINKS } from '@/constants/links'

const Hero: FC = () => {
  return (
    <div className="home_hero_section">
      <div className="container_pp">
        <div className="hero_box_home">
          <div className="headline_hero">
            <h1 className="h1_head">
              Get the best security experts for your <strong>blockchain company</strong>
            </h1>
          </div>
          <div className="home_hero_button">
            <a href={LINKS.ACTIONS.CONTACT} className="btn btn_secondary">Contact</a>
            <a 
              href={LINKS.ACTIONS.REQUEST_AUDIT} 
              target="_blank"
              className="btn btn_primary"
            >
              Request Audit
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 
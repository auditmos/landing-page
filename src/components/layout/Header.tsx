import { FC } from 'react'
import { LogoSVG, TwitterSVG, MenuButtonSVG } from '../shared/Icons'
import { LINKS } from '@/constants/links'

interface HeaderProps {
  onMenuToggle: () => void
}

const Header: FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="sticky_header">
      <div className="container_pp_menu">
        <div className="header_top">
          <div className="logo_top">
            <a href="/">
              <LogoSVG />
            </a>
          </div>
          
          <nav className="menu_top_pp">
            <ul className="menu_list">
              <li className="menu_item"><a href="/">Home</a></li>
              <li className="menu_item"><a href="/#services">Services</a></li>
              <li className="menu_item"><a href="/#audits">Audits</a></li>
              <li className="menu_item"><a href="/#resources">Resources</a></li>
            </ul>
          </nav>

          <div className="second_col_header">
            <button className="button_mobile" onClick={onMenuToggle}>
              <MenuButtonSVG />
            </button>
            
            <span className="right_header_menu">
              <a 
                href={LINKS.SOCIAL.TWITTER}
                target="_blank" 
                rel="nofollow"
                className="social_svg_white twitter_social header_social"
              >
                <TwitterSVG />
              </a>
              <a 
                href={LINKS.ACTIONS.REQUEST_AUDIT}
                target="_blank"
                className="btn btn_primary"
              >
                Request Audit
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 
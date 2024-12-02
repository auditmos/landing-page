import { FC } from 'react'
import { TwitterSVG, CloseSVG } from './Icons'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`primary_menu_mobile ${isOpen ? 'show_mobile_menu' : ''}`}>
      <div>
        <button className="close_mobile_menu" onClick={onClose}>
          <CloseSVG />
        </button>
        <nav>
          <ul className="menu_list">
            <li className="menu_item"><a href="/" onClick={onClose}>Home</a></li>
            <li className="menu_item"><a href="/#services" onClick={onClose}>Services</a></li>
            <li className="menu_item"><a href="/#audits" onClick={onClose}>Audits</a></li>
            <li className="menu_item"><a href="/#resources" onClick={onClose}>Resources</a></li>
          </ul>
        </nav>
      </div>
      <div className="mobile_menu_sm">
        <a 
          href="https://twitter.com/auditmos/" 
          target="_blank" 
          rel="nofollow" 
          className="social_svg_white twitter_social"
        >
          <TwitterSVG />
        </a>
      </div>
    </div>
  )
}

export default MobileMenu 
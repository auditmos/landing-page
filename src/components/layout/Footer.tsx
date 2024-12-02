import { FC } from 'react'
import { TwitterSVG } from '../shared/Icons'

const Footer: FC = () => {
  return (
    <footer className="background_primary">
      <div className="container_pp">
        <div className="section_5_bottom">
          <div className="copyright_bottom color_white">
            © <a 
              href="https://ariregister.rik.ee/eng/company/17025406/Auditmos-O%C3%9C?lang=en&" 
              target="_blank" 
              rel="nofollow"
            >
              Auditmos
            </a>. All Rights Reserved.
          </div>
          <div className="social_media_bottom">
            <a 
              href="https://twitter.com/auditmos/" 
              target="_blank" 
              rel="nofollow" 
              className="social_svg_white"
            >
              <TwitterSVG />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
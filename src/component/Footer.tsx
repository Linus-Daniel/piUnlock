import { Link } from "react-router"
import pisign from "../assets/pisign.webp";

import { footerLinks } from "../constants"

function Footer() {
  return (
    <footer className="w-full my-10">
  {footerLinks.map((section, index) => (
    <ul key={index} className={`text-[16px] my-6 ${section.section}`}>
      {section.links.map((link, idx) => (
        <Link
          key={idx}
          className="text-[16px] my-3 text-white"
          to={link.url}
        >
          {link.label}
        </Link>
      ))}
    </ul>
  ))}
  <div className="w-1/2">
    <img src={pisign} alt="Pi Sign" className="w-full object-cover" />
  </div>
</footer>
  )
}

export default Footer

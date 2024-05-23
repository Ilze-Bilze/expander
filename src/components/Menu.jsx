import json from '../../data.json'
import { HashLink } from 'react-router-hash-link'

function Menu() {
  return (
    <nav className="absolute z-10 w-screen bg-black">
      <div className="relative container">
        <ul className="py-14">
          {json.menu.map((element, key) => (
            <li key={key} className="text-white hover:text-primary font-semibold uppercase">
              <HashLink className="menu-item flex items-center no-underline py-5" smooth to={element.link}>{element.title}</HashLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Menu
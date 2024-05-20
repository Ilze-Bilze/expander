import json from '../../data.json'
import { TfiNewWindow } from 'react-icons/tfi'

function SocialLink() {
  return (
    <div className="flex flex-row gap-14 justify-between md:self-end self-center md:order-1 order-last">
      {json.socialLinks.map((element, key) => (
        <a key={key} href={element.link} className="flex font-semibold text-xl uppercase text-black hover:text-main-darker" target="_blank" rel="noreferrer"><span className="mr-2">{element.title}</span> <TfiNewWindow /></a>
      ))}
    </div>
  )
}

export default SocialLink
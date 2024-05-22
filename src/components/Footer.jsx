import { useEffect, useState } from 'react'

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="relative w-screen bg-black text-white">
      <div className="relative flex flex-col container lg:pt-[40px] pt-10 lg:pb-[72px] pb-10">
        <div className="w-full text-center">
          <p className="text-sm">{`© ${year} Ilze Spruge - All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
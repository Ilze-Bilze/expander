function Testimonial(props) {
  const { authore } = props

  const firstLetter = 'Spencer Perry'
  const letter = firstLetter.substring(0,1)

  return (
    <div className="rounded-xl bg-white p-5 text-left ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center shadow-md">
      <p>Been skating for almost 17 years now and without a doubt these mini logo boards are the best !!!! And then the price too like dude you can not beat it, they stand up to anything for any type of skater definitely the best thing on the market.</p>
      <h5 className="mt-5">
        <span className='inline-flex justify-center bg-main rounded-full text-white w-[30px] h-[30px]'>
          {letter}
        </span> Spencer Perry
      </h5>
    </div>
  )
}

export default Testimonial
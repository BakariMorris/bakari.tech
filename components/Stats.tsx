'use client';
import ContUp from 'react-countup';


interface Istats {
  val: number,
  description: string
}

const stats: Array<Istats> = [
  {
    val: 7,
    description: 'Years of experience'
  },
  {
    val: 50,
    description: 'Projects completed'
  },
  {
    val: 8,
    description: 'Technologies mastered'
  }
]

const Stats = () => {
  return (
    <section className='pt-4 pb-12  xl:pb-0'>
      <div className="container w-full mx-auto sm:px-[68px] md:px-0">
        <div className="flex flex-col md:flex-row flex-wrap gap-6 md:max-w-[80vw] xl:max-w-none">
          {stats.map((item, index) => (
            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
              <ContUp
                end={item.val}
                duration={5}
                delay={2}
                className='text-4xl xl:text-6xl font-extrabold'
              />
              <p className={`${item.description.length < 15 ? 'max-w-[100px]' : 'max-w-[150px] pl-3'} leading-snug text-white/80`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats;
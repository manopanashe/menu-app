import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 my-0 bg-gray-50 text-white">
      <div className='bg-[#B4C2D2] min-h-screen p-0 m-0'>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex  pb-4 m-4">
       <div className='text-white bg-[#345872] p-4 rounded-md'>
          <p className=" font-extrabold  static left-0 top-0 flex w-full justify-center border-8 border-white p-4   ">
            Jean's Kitchen
          </p>
          <p className='text-center'>Good Soul Foud</p>
       </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none m-4">
          <ul className="flex text-base">
            <li className='mr-4'>
                <a className="text-blue-500 hover:text-blue-800" href="#">Active</a>
            </li>
            <li className='mr-4'>
               <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
            <li className='mr-4'>
              <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative flex place-items-center pl-20">
        <h1 className='text-5xl'>Pokoteke Jean's Kitchen</h1>
      </div>

      <div className="mb-32  grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left lg:mt-20 m-4">
        <div className='max-w-sm rounded overflow-hidden shadow-lg hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
          <h1 className='text-4xl'> Sadza
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h1>
          <div className='px-6 py-9'>
            <div className='font-bold text-xl mb-2'>
              the coldest sunset
            </div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veritatis iusto ipsam unde dolores, sapiente impedit incidunt, adipisci ullam minus assumenda ducimus sit vitae aperiam tempore animi officia. Eveniet, id.
            </p>
          </div>
        </div>

        <div className='max-w-sm rounded overflow-hidden shadow-lg hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
          <h1 className='text-4xl'> Sadza
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h1>
          <div className='px-6 py-9'>
            <div className='font-bold text-xl mb-2'>
              the coldest sunset
            </div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veritatis iusto ipsam unde dolores, sapiente impedit incidunt, adipisci ullam minus assumenda ducimus sit vitae aperiam tempore animi officia. Eveniet, id.
            </p>
          </div>
        </div>

        <div className='max-w-sm rounded overflow-hidden shadow-lg hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
          <h1 className='text-4xl'> Sadza
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h1>
          <div className='px-6 py-9'>
            <div className='font-bold text-xl mb-2'>
              the coldest sunset
            </div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veritatis iusto ipsam unde dolores, sapiente impedit incidunt, adipisci ullam minus assumenda ducimus sit vitae aperiam tempore animi officia. Eveniet, id.
            </p>
          </div>
        </div>

        <div className='max-w-sm rounded overflow-hidden shadow-lg hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
          <h1 className='text-4xl'> Sadza
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h1>
          <div className='px-6 py-9'>
            <div className='font-bold text-xl mb-2'>
              the coldest sunset
            </div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veritatis iusto ipsam unde dolores, sapiente impedit incidunt, adipisci ullam minus assumenda ducimus sit vitae aperiam tempore animi officia. Eveniet, id.
            </p>
          </div>
        </div>

      
      </div>
      </div>
    </main>
  )
}

import Image from 'next/image'

const Card = ({ name, comics, describe, img }) => {
  const numberOfComics = comics.items.slice(0, 3)
  return (
    <>
      {comics.available !== 0
        &&
        <div
          className="m-6 p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 bg-main-100 dark:bg-main-800 transition-all transform duration-500 lg:w-2/6 w-full " >
          <Image src={img.path + '.' + img.extension}
                 width={50}
                 height={50}
                 sizes="100vw"
                 alt={name}
          />
          <div className="mt-2" >
            <h2
              className="text-2xl font-bold text-gray-800 dark:text-gray-100" >
              {name}
            </h2 >
            <div className="text-gray-800 dark:text-gray-200" >
              {'Nombre d\'apparition : ' + comics.available}
            </div >
            <div
              className="text-sm mt-2 text-gray-800 dark:text-gray-200 h-10 truncate hover:text-clip overflow-hidden" >
              {describe
                ? <div > {describe}</div >
                : <div > Pas de description </div >
              }
            </div >
            <div className="mt-3 space-x-4 flex text-gray-800 dark:text-gray-100 p-1" >
              <div
                className="px-6 pt-4 pb-2" >
                <div className='font-bold text-gray-800 dark:text-gray-100' >
                  {numberOfComics.length} premiers comics :
                </div >

                {numberOfComics.map((item) => {
                  return (
                    <span key={item.id}
                          className="inline-block text-sm mr-2 mb-2" >
                {'-> '} {item.name} <br />
                </span >
                  )
                })}
              </div >
            </div >
          </div >
        </div >
      }
    </>
  )
}

export default Card

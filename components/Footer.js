import { useRouter } from 'next/router'
import i18n from '../lib/i18n'
import { FaReact } from 'react-icons/fa'
import {SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const Footer = () => {
  const { locale } = useRouter()
  return (
    <footer className="w-full py-5 px-4" >
      <div className="flex flex-col md:flex-row items-center justify-between" >
        <div className="inline-flex items-center" >
          <div
            className="w-3 h-3 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-100 to-blue-700" />
          <h2
            className="block p-2 text-xl font-medium tracking-tighter text-main-700 dark:text-main-200 lg:text-x lg:mr-8"
          >
            {i18n.footer.title[locale]}
          </h2 >
        </div >
        <p
          className="inline-flex text-main-700 px-2 sm:text-base text-sm m-3 md:m-0 tracking-tighter	" >
          {i18n.footer.descriptionOne[locale]}
          <a href={'https://nextjs.org/'} target={'https://nextjs.org/'} >
            <SiNextdotjs
              className="text-main-700 dark:text-main-200 sm:text-2xl text-lg mx-1" />
          </a >
          {' , '}
          <a href={'https://fr.reactjs.org//'}
             target={'https://fr.reactjs.org//'} >
            <FaReact
              className="text-main-700 dark:text-main-200 sm:text-2xl text-lg mx-1" />
          </a >
          {i18n.footer.and[locale]}
          <a href={'https://tailwindcss.com/'}
             target={'https://tailwindcss.com/'} >
            <SiTailwindcss
              className="text-main-700 dark:text-main-200 sm:text-2xl text-lg mx-1" />
          </a >
          {' ' + i18n.footer.descriptionTwo[locale]}
        </p >
        <div className="footer_box" >
                    <span
                      className="inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start"
                    >
                        <a
                          href={'https://github.com/daviani/test-idzgl'}
                          className="text-main-700 dark:text-main-200 hover:font-bold mx-1"
                        >
                        GitHub
                        </a >
                    </span >
        </div >
      </div >
    </footer >
  )
}

export default Footer

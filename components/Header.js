import SwitchLanguage from './switchLanguage'
import i18n from '../lib/i18n'
import { useRouter } from 'next/router'
import SwitchTheme from './SwitchTheme'
import Image from 'next/image'
import marvel from '../public/images/logo/marvel.jpg'

const Header = () => {
  const { locale } = useRouter()
  return (
    <header className="mx-auto" >
      <div
        className="config_box" >
        <SwitchTheme />
        <SwitchLanguage />
      </div >
      <div className="flex flex-col text-left lg:text-center" >
        <div
          className="inline-flex items-center justify-center flex-shrink-0  mx-auto mb-3 mt-2.5 rounded-full" >
          <Image
            alt="marvel-logo"
            src={marvel}
            width={100}
            height={47}
          />
        </div >
        <h1
          className="mx-auto mb-4 text-4xl text-main-800 dark:text-blue-100  tracking-tighter transition duration-500 ease-in-out transform lg:w-1/2 lg:text-3xl"
        >
          {i18n.header.mainTitle[locale]}
        </h1 >
      </div >
    </header >
  )
}

export default Header

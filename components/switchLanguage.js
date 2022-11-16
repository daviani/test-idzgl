import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import fr from '../public/images/flags/fr.png'
import en from '../public/images/flags/en.png'
import { HiGlobeAlt } from 'react-icons/hi'

const SwitchLanguage = () => {
  const { locale, asPath } = useRouter()
  return (
    <>
      <div
        className="outline-none focus:outline-none text-main-700 dark:text-main-200 dropdown" >
        <button type="button" aria-haspopup="true" aria-expanded="true" >
          <HiGlobeAlt
            className="text-3xl cursor-pointer"
          />
        </button >

        <div
          className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95" >
          <div
            className=" px-4 py-3 text-main-700 dark:text-main-200 absolute right-0 mt-2 origin-top-right bg-blue-100 dark:bg-main-700 rounded-md shadow-lg outline-none"
            role="menu"
          >
            <Link
              href={asPath}
              locale={'fr'}
            >
              <button
                className={(
                  locale === 'fr'
                    ? 'text-base font-semibold cursor-not-allowed '
                    : 'text-sm')}
                disabled={locale === 'fr'}
              >
                Français
              </button >
            </Link >
            <Link
              href={asPath}
              locale={'en'}
            >
              <button
                className={(
                  locale === 'en'
                    ? 'text-base font-semibold cursor-not-allowed'
                    : 'text-sm')}
                disabled={locale === 'en'}
              >
                English
              </button >
            </Link >
          </div >
        </div >
      </div >
    </>
  )
}

export default SwitchLanguage

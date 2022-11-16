import Layout from '../components/Layout'
import React from 'react'
import Link from 'next/link'

export default function Home () {

  return (
    <div className="w-screen bg-main-100 dark:bg-main-700 " >
      <Layout >
        <div className="flex flex-col justify-center items-center mt-8" >
          <Link href="/characters" passHref >
            <button type="button"
                    className=" m-5 px-4 py-2 text-sm font-semibold leading-6 text-main-50 dark:text-main-50 bg-main-700 dark:bg-main-800 rounded-md"
            >
              Characters
            </button >
          </Link >
        </div >

      </Layout >
    </div >
  )
}

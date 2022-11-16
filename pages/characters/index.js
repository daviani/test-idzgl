import Layout from '../../components/Layout'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { getAllcharacters, getLoadMoreCharacters } from '../../lib/request'
import CardHeroes from '../../components/CardHeroes'
import { useState } from 'react'
import { Router } from 'next/router'
import Loader from '../../components/Loader'
import { ImSpinner9 } from 'react-icons/im'
import Button from '../../components/Button'

export async function getStaticProps () {
  try {
    const res = await getAllcharacters()
    return {
      props: { characters: res.data },
    }
  } catch (e) {
    console.log(e)
  }
}

export default function Characters ({ characters }) {
  const [offset, setOffset] = useState(20)
  const [loading, setLoading] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)

  const heroes = characters.data.results

  // Gestion du loader
  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  //Chargement d'item supplémentaire
  const loadMore = async () => {
    setButtonLoading(true)
    await getLoadMoreCharacters(offset).then((response) => {
      const moreHeroes = JSON.parse(
        JSON.stringify(response.data.data.results))
      moreHeroes.forEach((item) => {
        heroes.push(item)
      })
      setOffset(offset + 2)
    }).catch((e) => {
      console.log(e)
      setButtonLoading(false)
    }).finally(() => {
      setButtonLoading(false)
    })
  }

  return (
    <div className="w-screen bg-main-100 dark:bg-main-700 " >
      <Layout >
        <div className="flex flex-col justify-center items-center mt-8" >

          {loading
            ?
            <Loader />
            :
            <>
              <div className="flex flex-row flex-wrap justify-center w-10/12" >
                {
                  heroes.map((item) => (
                      <CardHeroes key={item.id}
                                  name={item.name}
                                  describe={item.description}
                                  img={item.thumbnail}
                                  comics={item.comics}
                      />
                    ),
                  )}
              </div >
            </>
          }

          {
            buttonLoading
              ?
              <Button >
                <ImSpinner9
                  className="w-5 h-5 mr-3 -ml-1 animate-spin text-main-50 dark:text-main-700 " />
                Loading...
              </Button >
              :
              <div  onClick={loadMore}>
                <Button >
                Show More
                </Button >
              </div>

          }
          <Link href="/" passHref >
            <button type="button"
                    className=" m-5 px-4 py-2 text-sm font-semibold leading-6 text-main-50 dark:text-main-50 bg-main-700 dark:bg-main-800 rounded-md"
            >
              Back To Home
            </button >
          </Link >
        </div >
      </Layout >
    </div >
  )
}

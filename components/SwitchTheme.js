import {HiMoon, HiSun} from 'react-icons/hi'
import useDarkMode from '../hook/useDarkMode'

const SwitchTheme = () => {
  const [colorTheme, setTheme] = useDarkMode()
  return(
    <>
      {colorTheme === 'light' ? (
        <HiSun
          onClick={() => setTheme('light')}
          className="text-sun-800 dark:text-sun-800 text-3xl cursor-pointer"
        />
      ) : (
        <HiMoon
          onClick={() => setTheme('dark')}
          className="text-main-700 dark:text-sun-800 text-3xl cursor-pointer mr-1"
        />
      )}
    </>
  )
}

export default SwitchTheme

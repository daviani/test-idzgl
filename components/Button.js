const LoaderButton = ({children}) => {
  return (
    <button type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-main-50 dark:text-main-50  transition duration-150 ease-in-out bg-main-700 dark:bg-main-800 rounded-md shadow"
          >
      {children}
    </button >
  )
}

export default LoaderButton

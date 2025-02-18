export const setToTop = () => {

  try {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } catch (error) {
    console.log(error)
  }
}
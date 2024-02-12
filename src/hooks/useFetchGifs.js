import { useEffect, useState } from "react"
import { getGifs } from "../../../04-gif-expert-app/src/helpers/getGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    const getImages = async() => {
    const newImages = await getGifs(category)
    setImages(newImages)
    setIsLoading(false);
  } 

  useEffect( ()=> {
    getImages()
  }, [])

  return {
    images, //Es igual a images: images
    isLoading
  }
}

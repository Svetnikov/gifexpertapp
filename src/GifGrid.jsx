import React, { useEffect, useState } from 'react'
//import { getGifs } from '../../04-gif-expert-app/src/helpers/getGifs'
import { GifItem } from './GifItem'
import { useFetchGifs } from './hooks/useFetchGifs'

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category)
    console.log(isLoading)
  return (
          <>
          <h3>{category}</h3>

          { isLoading && (<h2>Cargando...</h2>) }
            
          <div className='card-grid'>

            {
              images.map(( images ) => {
                return (
                  <GifItem key={images.id}
                  //Esparciendo las props, muy util!!! en caso que haya muchas props.
                  {...images}
                  />
                )
              })
            }
          </div>
          </>
          )
  }

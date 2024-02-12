import { useState } from "react"
import { AddCategory } from "./AddCategory"
import { GifGrid } from "./GifGrid"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])
  console.log(categories)

  const onAddCategory = (newCategory) => {
    console.log(newCategory)
    //Si la categoría nueva está dentro de categories, entonces no hagas nada
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories ])
    
    }
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
      //Se manda esto pal padre (osea este mismo jsx)
        onNewCategory={onAddCategory}
      ></AddCategory>
        {

          categories.map( ( category ) => 
            (
              <GifGrid 
                  key={category}
                  category={ category }
              />
            ))

        }
    
    
    </>

  )
}

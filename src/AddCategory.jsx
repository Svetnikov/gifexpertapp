import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

      const onInputChange = ({target}) => {
        setInputValue(target.value)
      }
    const onSubmit = event => {

      const trim = inputValue.trim()
        //Evitar que se quede lo escrito en el input al hacer enter
        event.preventDefault()
        //Evitar que se coloque más de un enter
        if (trim.length <= 1) return
        
        onNewCategory(trim)
        setInputValue('')
    }

  return (
    <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
        />
    </form>
  )
}

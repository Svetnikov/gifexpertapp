export const getGIfs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GmLXO7gl1Ne5VDp6ghDmzp8sCU2niQik&q=${category}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json() 
    //console.log(data)

    const gifs = data.map( ({id, title, images}) => ({
      id: id,
      title: title,
      url: images.downsized_medium.url
    }))
    console.log(gifs)
}


//Peticion a servicio
export const obtenerGift = async (categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=Qm5No3NgtLd5hUwteeq3TryA35qgEviG`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    // Extrayendo la informacion que necesitamos de data
    const gifs = data.map (img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    }
    )
     
    // setImages(gifs);
    console.log(gifs);
    
    return gifs;   

    // console.log('estoas son imgagenes = '+images[1].id);
}
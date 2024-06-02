import React from "react"
import {useState} from "react"
export default function Meme(){

  const [meme, setMeme] = useState({
    bottomText: "",
    topText: "",
    randomImage :"http://i.imgflip.com/1bij.jpg"
  })
  const [allMemes, setAllMemes] = useState([])

  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
    }
    getMemes()
}, [])

function getMemeImage() {
  const randomNumber = Math.floor(Math.random() * allMemes.length)
  const url = allMemes[randomNumber].url
  setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
  }))
}

function handleChange(event){
  const {name, value} = event.target
  setMeme(prevMeme =>{
    return {
      ...prevMeme,
      [name]: value
    }
  })
}
const styles = {
  textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000",
};

  return (
    <main className=" md:max-w-3xl mx-auto px-8 py-4 w-screen">
    <div
      className="grid grid-cols-2 gap-4"
    >   <label className="" >Top Text
          <input
              onChange={handleChange}
              id = "bottom-text" 
              type="text"
              name = "topText"
              value = {meme.topText}
              className="h-10 border mt-2 w-full border-gray-400 indent-1 font-karla rounded-lg"
          />
        </label>
        <label className="" >Bottom Text
          <input
              onChange={handleChange}
              id = "bottom-text" 
              type="text"
              name = "bottomText"
              value = {meme.bottomText}
              className="h-10 border mt-2 w-full border-gray-400 indent-1 font-karla rounded-lg"
          />
        </label>
        <button 
            className="
            border h-10 
            col-span-2 font-karla
            bg-gradient-to-r from-purple-900 to-purple-500 
            text-white
            rounded-lg
            "
            onClick={getMemeImage}
        >
            Get a new meme image 🖼
        </button>
    </div>
    <div className = "mx-auto mt-4 relative text-white">
        <img src={meme.randomImage} className="meme--image" />
        <h2 style = {styles} className="meme--text top absolute top-0 w-4/5 text-center left-/1/2 transform-translate-x-1/2 mt-4 mx-0 px-4 py-0 font-impact text-2xl uppercase tracking-wide">{meme.topText}</h2>
        <h2 style = {styles} className="meme--text bottom absolute bottom-0 w-4/5 text-center left-/1/2 transform-translate-x-1/2 mt-4 mx-0 px-4 py-0 font-impact text-2xl uppercase tracking-wide">{meme.bottomText}</h2>  
    </div>
</main>
  ) 
}
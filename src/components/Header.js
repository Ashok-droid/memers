import React from "react"
import troll from "../images/troll.png"
export default function Header(){
  return (
    <header className=" bg-gradient-to-r from-purple-900 to-purple-500 text-white
    font-karla px-8 py-2">
     <div className = "flex items-center md:max-w-3xl mx-auto">
        <img src = {troll} alt = "troll face"
          className="w-16 h-16"
        />
        <h2 className = "ml-2 mr-auto font-extrabold text-2xl">Meme Generator</h2>
        <a href ="#">By -Ashok Pal</a>
     </div>
    </header>
  )
}

// In React it is generally the best practice to import image instead of directly using the file path in the src
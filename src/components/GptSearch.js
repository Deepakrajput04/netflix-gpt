import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_image } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={BG_image}
          alt="logo"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions />
      
    </div>
  )
}

export default GptSearch
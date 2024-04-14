import React from 'react'
import "./SearchResult.css"
import { useNavigate } from 'react-router-dom'

const SearchResult = ({ result }) => {
  const navigate = useNavigate();

  const search = (title) => {
    navigate("/Recept/:title", {
      state: title,
    });
  }

  return (
    <div 
    className="search-result" 
    onClick={(e) => search(result)}
    >{result.title}</div>
  )
}

export default SearchResult
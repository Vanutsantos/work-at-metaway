import React, { useState } from 'react'
import './styles.scss'

interface SearchProps {
  onSubmit: (e:any) => void
}

const Search = ({ onSubmit }:SearchProps):JSX.Element => {
  const [value, setValue] = useState<string>('')
  
  const enterSub = (e:any) => {
    if (e.key === "Enter") {
      onSubmit(value);
    }
  }

  return(
    <div className="search-wrapper">
      <input 
        type="text" 
        value={value}
        placeholder="Pesquisar..."
        onKeyUp={e => enterSub(e)}
        onChange={(e) => setValue(e.target.value)}
      />
      <button 
        type='button'
        onClick={() => onSubmit(value)}
      >
        Buscar
      </button>
    </div>
  )
}

export default Search
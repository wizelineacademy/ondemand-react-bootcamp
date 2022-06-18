import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import Styled from './Searchbar.styles'

const Searchbar = () => {
  
  return (
    <Styled.Search>
      <IoSearchOutline />
      <form>
        <Styled.SearchInput
          type="search"
          placeholder="Search"
        />
      </form>
    </Styled.Search>
  )
}

export default Searchbar
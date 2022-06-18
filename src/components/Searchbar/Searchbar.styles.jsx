import styled from 'styled-components'

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  position: relative;
  svg {
    z-index: 1;
    position: absolute;
    left: 1.5rem;
  }
`

const SearchInput = styled.input`
  position: relative;
  padding: 0.5rem 0.5rem 0.5rem 5rem;
  margin-right: 2rem;
`

const Styled = { Search, SearchInput }
export default Styled
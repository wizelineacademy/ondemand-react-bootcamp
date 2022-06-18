import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #ddd;
`
const CardImage = styled.figure`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CardDescription = styled.div`
  padding: 1rem;
`

const CardName = styled.h3`
  font-size: 1.3rem;
`
const CardCategory = styled.p`
  font-size: 1.2rem;
  font-style: italic;
`
const CardPrice = styled.p`
  font-size: 1.2rem;
`

const Styled = { Card, CardImage, CardDescription, CardName, CardCategory, CardPrice }
export default Styled
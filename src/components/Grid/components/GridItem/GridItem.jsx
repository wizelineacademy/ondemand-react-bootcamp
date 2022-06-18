
import Styled from './GridItem.styles'
import PropTypes from 'prop-types'
const GridItem = ({ item }) => {
  const { main_image, category, name, price } = item.data
  return (
    <Styled.Card>
      <Styled.CardImage>
        <img src={main_image.url} alt={main_image.alt} />
      </Styled.CardImage>
      <Styled.CardDescription>
        <Styled.CardName>{ name }</Styled.CardName>
        <Styled.CardCategory>{ category.slug }</Styled.CardCategory>
        <Styled.CardPrice>${ price }</Styled.CardPrice>
      </Styled.CardDescription>
    </Styled.Card>
  )
}

GridItem.propTypes = {
  item: PropTypes.object
}


export default GridItem
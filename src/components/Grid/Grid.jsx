
import PropTypes from 'prop-types'
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/pagination/pagination.scss'
import GridItem from './components/GridItem/GridItem'
import Styled from './Grid.styles'

const Grid = ({ items }) => {
  return (
    <Styled.Grid>
      {items.map((item, index) => {
        return (
          <GridItem key={`grid-item-${index}`} item={item} />
        )
      })}       
    </Styled.Grid>
  )
}

Grid.propTypes = {
  items: PropTypes.array
}


export default Grid
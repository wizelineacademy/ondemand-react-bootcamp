
import PropTypes from 'prop-types'

const Slide = ({ slide }) => {
  const { url='', alt='' } = slide.data.main_image || {}
  return (
    <div>
      <img src={url} alt={alt} />
    </div>
  )
}

Slide.propTypes = {
  slide: PropTypes.object
}


export default Slide
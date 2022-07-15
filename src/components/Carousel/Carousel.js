import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styles from './Carrousel.module.scss'
import { useNavigate } from 'react-router-dom'

function CarouselElement({ className, count, carouselCurrentSlideIndex, src, alt, text, id, navigationLink }) {

    //console.log(navigationLink)
    let itemRef = React.createRef()
    const navigate = useNavigate();

    useEffect(() => {

        itemRef.current.style.display = (id === carouselCurrentSlideIndex) ? 'block' : 'none';
    }, [id, carouselCurrentSlideIndex, itemRef])


    return (
        <div ref={itemRef} className={styles.carrouselMainStyle} >
            <div className={`${styles.fade}`}>

                <img src={src}
                    alt={alt}
                    onClick={() => {
                      //  console.log(navigationLink);
                        if (navigationLink !== undefined) {
                            navigate(navigationLink);

                        }

                    }}
                    className={`${styles.styleCarrouselImage} ${className}`} />

                {text.map((element, index) => {
                    return <div key={`${text} ${index}`} className={styles.text} >{element} </div>
                })}

                <div className={styles.text}>  ({id}/{count})</div>

            </div>
        </div>);



}


export default class Carousel extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            carouselCurrentSlideIndex: props.carouselCurrentSlideIndex
        };
        this.prevClick = this.prevClick.bind(this);
        this.nextClick = this.nextClick.bind(this);
        this.dotClick = this.dotClick.bind(this);

    }


    static propTypes = {
        data: PropTypes.array.isRequired,
        carouselCurrentSlideIndex: PropTypes.number,
        carouselName: PropTypes.string.isRequired,
        carouselKeyIndex: PropTypes.number.isRequired
    }


    setIndex(nextIndex) {
        if (nextIndex > this.props.data.length) { this.setState({ carouselCurrentSlideIndex: 1 }) }
        else {
            if (nextIndex < 1) { this.setState({ carouselCurrentSlideIndex: this.props.data.length }) }
            else { this.setState({ carouselCurrentSlideIndex: nextIndex }); }
        }

    }

    prevClick() {
        this.setIndex(this.state.carouselCurrentSlideIndex - 1);
    }
    nextClick() {
        this.setIndex(this.state.carouselCurrentSlideIndex + 1);

    }

    dotClick(dot) {
        this.setIndex(dot);
    }


    render() {
        if (this.props.data === undefined || this.props.data?.length === 0) return (null);
        return (
            <div className={styles.styleCarrousel} >
                {this.props.data.map((item, index) => (<CarouselElement className={`${this.props.className}`} key={`${this.props.carouselName}-${this.props.carouselKeyIndex}-${index}-${item.id}`} count={this.props.data.length} carouselCurrentSlideIndex={this.state.carouselCurrentSlideIndex} {...item} />))}
                <div className={`${styles.styleCarrouselDot} ${this.props.className}`}>
                    <button className={styles.prev} onClick={this.prevClick} >❮</button>
                    {this.props.data.map((item, index) => (<span className={styles.dot} key={`${this.props.carouselName}-${this.props.carouselKeyIndex}-${index}-${item.id}-dot`} onClick={(() => this.dotClick(index + 1))}  ></span>))}
                    <button className={styles.next} onClick={this.nextClick} >❯</button>
                </div>
            </div >
        );

    };






}
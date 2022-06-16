import React from "react"
import PropTypes from "prop-types"
import styles from './Carrousel.module.scss'

class CarouselElement extends React.Component {
    constructor(props) {
        super(props)
        this.itemRef = React.createRef()
    }


    static propTypes = {
        id: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        slideIndex: PropTypes.number.isRequired
    }

    componentDidMount() {
        const state= (this.props.id === this.props.slideIndex)
         this.itemRef.current.style.display = state
            ? "block"
            : "none"
    }

    componentDidUpdate() {
        const state= (this.props.id === this.props.slideIndex)
        this.itemRef.current.style.display = state
            ? "block"
            : "none"
    }


    render() {
        return (
            <div className={styles.CarrouselElementStyle} ref={this.itemRef} >
                <div class="mySlides fade">
                    
                    <img src={this.props.src} alt={this.props.alt} />
                    <div class="numbertext">{this.props.id}/{this.props.count}</div>
                    <div class="text">{this.props.text}</div>
                </div>
            </div>);

    }

};


export default class Carousel extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            slideIndex: props.slideIndex
        }
        this.prevClick = this.prevClick.bind(this)
        this.nextClick = this.nextClick.bind(this)
        console.log("slideIndex:" + props.slideIndex)
    }


    static propTypes = {
        elements: PropTypes.array.isRequired,
        index: PropTypes.number.isRequired,
    }


    setIndex(nextIndex)
    {
        if (nextIndex> this.props.elements.length) { this.setState({ slideIndex: 1 }) }
        else {
            if (nextIndex < 1) { this.setState({ slideIndex: this.props.elements.length }) }
            else{  this.setState({ slideIndex: nextIndex });}
        }

    }

    prevClick() {
        this.setIndex(this.state.slideIndex-1);
    }
    nextClick() {
        this.setIndex(this.state.slideIndex+1);     

    }
    

    render() {
        return (
            <div className={styles.styleCarrousel} >

                <div class="slideshow-container">
                    {this.props.elements.map((item) => (<CarouselElement key={item.id} slideIndex={this.state.slideIndex} {...item} />))}
                    <span class={styles.dot}></span>
                    <button class={styles.prev} onClick={this.prevClick} >❮</button>
                    <button class={styles.next} onClick={this.nextClick} >❯</button>
                </div>

            </div >
        );

    };






}
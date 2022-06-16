import React from "react"
import PropTypes from "prop-types"
import styles from './Carrousel.module.scss'

class SliderElement extends React.Component {
    constructor(props) {
        super(props)
        this.itemRef = React.createRef();
    }


    static propTypes = {
        id: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        rangeValue: PropTypes.number.isRequired
    }

    componentDidMount() {

        const state= (this.props.id === this.props.rangeValue)
         this.itemRef.current.style.display = state
            ? "block"
            : "none"
    }

    componentDidUpdate() {
        console.log(this.props.id )
            console.log( this.props.rangeValue)
        console.log(this.props.id === this.props.rangeValue)
        const state= (this.props.id === this.props.rangeValue)
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



export default class Slider extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            rangeValue: props.rangeValue
        }
        this.itemRef = React.createRef()
        this.onChange = this.onChange.bind(this)
        console.log(this.state.rangeValue)
    }


    static propTypes = {
        elements: PropTypes.array.isRequired,
        index: PropTypes.number.isRequired,
    }
    onChange(event)
    {
            console.log(event);
            console.log(this.itemRef.current.value);
            this.setState({ rangeValue: parseInt(this.itemRef.current.value) });
    }
    

    render() {
        return (
            <div className={styles.styleCarrousel} >

                <div class="slideshow-container">
                    {this.props.elements.map((item) => (<SliderElement key={item.id} rangeValue={this.state.rangeValue} {...item} />))}
                    <input type="range" min="1" max={this.props.elements.length} value={this.state.rangeValue} ref={this.itemRef} onChange={this.onChange} class="slider" />
                </div>

            </div >
        );

    };






}
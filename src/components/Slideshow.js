import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel, Image} from 'react-bootstrap';
import "../styles/slideshow.scss"

class Slideshow extends Component {
    render() {
        const images = this.props.data;

        return (
        <div className="slideshow">
            <Carousel fade="true" interval="50000">
            { Object.entries(images).map( (image) =>
                <Carousel.Item key={image[1].imageURL}>
                    <Image
                        key={image[1].imageURL}
                        src={image[1].imageURL}
                        alt={image[1].altText}
                        />
                </Carousel.Item>
            )}
            </Carousel>
        </div>
        );
    }
  }

  export default Slideshow;

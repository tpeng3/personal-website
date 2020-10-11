import React, {Component} from "react"
// import Img from "gatsby-image";
import {Row, Col, Image, Button} from 'react-bootstrap'

class Project extends Component {
    render() {
        const { name, date, description, built, imageURL, altText} = this.props.info;
        const addText = this.props.info.addText;
        const links = this.props.info.links;

        const linkStyle = {
            display: "flex",
            listStyle: "none",
            marginTop: "2em",
            marginBottom: "4em",
        };
          
        const btnStyle = {
            borderRadius: "10",
            marginRight: "1.2em",
        };
          
        return (
            <Row>
                <Col md={6}>
                    <div className="pb-3">
                        <Image src={imageURL} alt={altText} thumbnail width="600" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="px-2">
                        <h2>{name}</h2>
                        <h3>{date}</h3>
                        <p>{description}</p>
                        <p>{addText}</p>
                        <p>Made with: {built}</p>
                        { links ? (
                        <div style={linkStyle}>
                        { Object.entries(links).map( ([key, value]) =>
                            <Button key={key} href={value} style={btnStyle} className="d-flex align-items-center" variant="outline-info">{key}</Button>  )
                        }
                        </div> ) : ( <div></div>)
                        }
                    </div>
                </Col>
            </Row>
        );
    }
};

export default Project;
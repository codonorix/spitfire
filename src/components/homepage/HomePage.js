import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import './HomePage.css'

import awards from './images/Spitfire Awards Banner 2022 (2000 × 300 px) (3).png'
import marketing from './images/marketing.png'
import sales from './images/sales.png'
import training from './images/training.png'
import reviews from './images/reviews.png'
import spitfirewheel from './images/New Spitfire customer flywheel small.png'

export const HomePage = () => {
    return (
        <Container fluid>
            <Row id={'header-row'}>
                <div id={'welcome-text'}>
                    <h1>Are you looking for digital marketing that works?</h1>
                    <br/>
                    <p>Spitfire Inbound is an innovative inbound marketing & sales agency (and HubSpot Diamond Partner)
                        based in Johannesburg, South Africa.</p>
                    <br/>
                    <div>
                        <span className={'info-button'}>SUZUKI SOUTH AFRICA CASE STUDY</span>
                        <span className={'info-button'}>RENTOKIL-INITIAL CASE STUDY</span>
                    </div>
                </div>
            </Row>
            <Row id={'awards'}>
                <img src={awards} alt={'Spit fire awards list'}/>
            </Row>
            <Row className={'features-row'}>
                <h2>Deliver measurable, customer focused marketing and sales results through purpose-built, strategic
                    inbound marketing.</h2>
                <p>Spitfire Inbound offer a full range of inbound marketing and sales services including growth-driven
                    design, sales enablement, and inbound training and consulting.</p>
            </Row>
            <Row className={'features-row'}>
                <Col className={'features'}>
                    <img src={marketing} alt={'inbound marketing serivce'}/>
                    <h5>Inbound Marketing Service</h5>
                    Inbound Marketing Services
                    Create marketing that your customers will love, generating quality sales leads and shortening
                    the sales cycle.
                    <br/>
                    <br/>
                    <br/>
                    <button className={'more-info'}>More Info</button>
                </Col>
                <Col className={'features'}>
                    <img src={sales} alt={'inbound sales service'}/>
                    <h5>Inbound Sales Service</h5>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio fugiat hic in magnam
                    possimus quia quo sit soluta voluptate! Accusamus, aperiam aspernatur dicta dolor dolore dolorem
                    magni natus nobis?
                    <br/>
                    <button className={'more-info'}>More Info</button>
                </Col>
                <Col className={'features'}>
                    <img src={training} alt={'hubspot training and consulting'}/>
                    <h5>Hubspot Training & Consulting</h5>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur deleniti eos
                    inventore labore minima molestias tempore velit. Aliquam aperiam asperiores consequatur ea,
                    explicabo labore necessitatibus officiis praesentium quo quos.
                    <br/>
                    <button className={'more-info'}>More Info</button>
                </Col>
            </Row>
            <Row id={'client-info'}>
                <h2>See what our clients have to say about us!</h2>
                <img src={reviews} alt={'read reviews image'}/>
            </Row>
            <Row id={'customers'}>
                <h2>Putting customers at the centre of your business</h2>
                <Col md={'3'}>
                    <img src={spitfirewheel} alt={'spitfire wheel'}/>
                </Col>
                <Col>
                    <p>We believe in helping companies <strong>attract</strong> visitors, <strong>convert</strong> leads and <strong>open customers</strong>. Through our
                        unique, in-depth processes we generate insights from your data to close the gap between
                        marketing and sales. Our team of experts uses this data and their knowledge to develop
                        strategies that guarantee an improved closing ratio.</p>
                </Col>
            </Row>
        </Container>
    )
}
import { FC } from "react";
import { useParams } from "react-router-dom";

//

import { Row, Col, Container } from "react-bootstrap";

// components

import MoreNews from "./MoreNews";

// server

import newsCard from "../../../server/newsCard";




const NewsOpenCard = () => {

  const { id } = useParams();
  console.log(id);


  const currentCard = newsCard.find(card => card.id === id);
  console.log(currentCard);

  if (!currentCard) {
    return <h1>LOADING</h1>;
  }

  return (


    <Container>
    <Col md={12} xs={12} sm={12} className="mt-4" style={{ marginRight: "10px" }}>

      <Col md={12} sm={12} xs={12} style={{ fontSize: "25px", fontWeight: "600" }} className="mb-2">
        {currentCard.title}
      </Col>

      <Col md={12} sm={6} xs={6} className="d-flex mb-3">
        <Col md={1}>{currentCard.date}</Col>
        <Col md={3}>Автор: {currentCard.author}</Col>
      </Col>

      <Col md={12} sm={12} xs={12} className="mb-3">
        <img style={{ width: "100%" }} src={currentCard.imgTitle} alt="title-img" />
      </Col>

      <Col md={12} sm={12} xs={12} style={{ maxWidth: "793px", height: "max-content", fontSize: "16px" }} className="mb-3">{currentCard.textBlockOne}</Col>

      <Col md={12} sm={12} xs={12} style={{ height: "max-content", fontSize: "16px" }} className="mb-3">{currentCard.textBlockTwo}</Col>



      {/*  */}

      <Col md={12} sm={12} xs={12} style={{ height: "4px", backgroundColor: "#FEBC66" }} className="mt-4 mb-4"></Col>

      <Col md={12} sm={12} xs={12} className="d-flex justify-content-center" style={{height: "max-content", fontStyle: "italic", fontSize: "25px", textAlign: "center"}}>
        Цель игры - забить шайбу в ворота соперника и не пропустить шайбу в свои
        ворота.
      </Col>

      <Col md={12} sm={12} xs={12} style={{ height: "4px", backgroundColor: "#FEBC66" }} className="mt-4 mb-4"></Col>

      {/*  */}

      <Col md={12} sm={12} xs={12} className="d-flex flex-md-row flex-column justify-content-between">

        <Col md={6} sm={12} xs={12} className="d-flex justify-content-md-start justify-content-center mb-3">
          <img style={{ width: "95%" }} src={currentCard.imageTwo} alt="img-small" />
        </Col>

        <Col md={6} sm={12} xs={12} className="d-flex justify-content-md-end justify-content-center mb-3">
          <img style={{ width: "95%" }} src={currentCard.imageThree} alt="img-small" />
        </Col>

      </Col>

      <Col md={12} sm={12} xs={12} style={{ height: "max-content", fontSize: "16px" }} className="mb-3">
          {currentCard.textBlockThree}
      </Col>

      <Col md={12} sm={12} xs={12} style={{ height: "max-content", fontSize: "16px" }}className="mb-3">
          {currentCard.textBlockFour}
      </Col>

      <Col md={12} sm={12} xs={12} className="mb-3">
        <img style={{ width: "100%" }} src={currentCard.imageFour} alt="title-img" />
      </Col>

      <Col md={12} sm={12} xs={12} style={{ height: "max-content", fontSize: "16px" } }className="mb-3">
          {currentCard.textBlockFive}
      </Col>

      <Col md={12} sm={12} xs={12} className="mb-3">
        <img style={{ width: "100%" }} src={currentCard.imageFive} alt="title-img" />
      </Col>


      <Col md={12} sm={12} xs={12}>
        <iframe
          width="100%"
          height="750px"
          src={currentCard.video}
          title="YouTube video player"
        ></iframe>
      </Col>
    </Col>
    </Container>
  );
};

export default NewsOpenCard;

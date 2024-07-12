import { FC, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

//

import { Row, Col, Container } from "react-bootstrap";

// components

import MoreNews from "./MoreNews";
import MyTags from "../../UI/MyTags";
import NewsMainBlock from "../NewsMainBlock";

// server

import newsCard from "../../../server/newsCard";







const NewsOpenCard = () => {

  const tagsArr = ['Все новости', 'Политика', 'Экономика', 'Общество', 'В мире', 'Башкортостан', 'Криминал', 'Спорт', 'Технологии', 'Культура']
  const { id } = useParams();
  const date = new Date().toLocaleDateString()



  const popularCard = newsCard.sort((a, b) => b.views - a.views).filter((card, index) => index < 3);
  const currentDayNews = newsCard.filter((card) => {return card.date === date})
  const currentCard = newsCard.find(card => card.id === id);




  if (!currentCard) {
    return <h1>LOADING</h1>;
  }

  const moreNewsArr = newsCard.filter((card) => {
    return card.category.includes(currentCard.category[0])
  })


  return (


    <Container>

    <Col lg={12} md={12} sm={12} xs={12} className="d-flex flex-row">

    <Col lg={8} md={8} xs={8} sm={8} className="mt-4" style={{ marginRight: "10px" }}>

      <Col md={12} sm={12} xs={12} style={{ fontSize: "25px", fontWeight: "600" }} className="mb-2">
        {currentCard.title}
      </Col>

      <Col md={12} sm={6} xs={6} className="d-flex mb-4">
        <Col md={3}>{currentCard.date}</Col>
        <Col md={3}>Автор: {currentCard.author}</Col>
      </Col>


      <Col md={12} sm={12} xs={12} className="mb-3" style={{fontWeight: '600'}}>{currentCard.lead}</Col>

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


      <Col md={12} sm={12} xs={12} class="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" width={'100%'} height={'500px'} src={currentCard.video} ></iframe>
      </Col>


      <Col md={12} sm={12} xs={12} className="mt-5 mb-3" style={{width: '100%', height: 'max-content', fontSize: '22px', fontWeight: '800'}}>Читайте также</Col>


      <Col md={12} sm={12} xs={12} >

          {(moreNewsArr.length == 0) ? <Col md={12} sm={12} xs={12} className="mt-5 mb-3" style={{width: '100%', height: 'max-content', fontSize: '16px'}}>Список пуст</Col> : moreNewsArr.map((card, index) => {
            return <Col key={card.id} className="mt-5 mb-3"><Link to={`/news/${card.id}`} style={{color: 'black'}}><MoreNews title={card.title} author={card.author} lead={card.lead} date={card.date} tag={card.category}/></Link></Col> })
            }

      </Col>

    </Col>




    <Col lg={4} md={4} xs={4} sm={4} className="mt-4">

        <Col lg={12} md={12} xs={12} className="d-flex flex-wrap justify-content-center">

            {(tagsArr.length < 1) ? <></> : tagsArr.map((tag, index) => {
              return <Col style={{width: '40%', margin: '10px'}} className="d-flex justify-content-center mb-3" lg={6} md={6} xs={6} key={index}><MyTags tag={tag} /></Col>
            })}

        </Col>


        <Col md={12} sm={12} xs={12} className='mt-4'>

          <Col><NewsMainBlock newsTitle={'Популярные'} linkButton={'/news'} newsButton='Смотреть все' newsArr={popularCard}/></Col>

        </Col >


        <Col md={12} sm={12} xs={12} className='mt-4'>

          <Col><NewsMainBlock newsTitle={`Новости от ${date}`} linkButton={'/news'} newsButton='Смотреть все' newsArr={currentDayNews}/></Col>

        </Col >


    </Col>


   </Col>
    </Container>
  );
};

export default NewsOpenCard;

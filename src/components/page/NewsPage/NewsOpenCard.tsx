import { FC, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

//

import { Row, Col, Container } from "react-bootstrap";

// redux

import { useAppDispatch, useAppSelector } from "../../../types/reduxHooks";
import { getAsyncNews } from "../../../store/newsSlice";

// components

import MoreNews from "./MoreNews";
import MyTags from "../../UI/MyTags";
import NewsMainBlock from "../NewsMainBlock";





const NewsOpenCard = () => {

  useEffect(() => {dispatch(getAsyncNews())}, [])
  useEffect(() => {newViews()}, [])




  const dispatch = useAppDispatch()
  const newsSelector = useAppSelector(state => state.news.news)

  const tagsArr = ['Все новости', 'Политика', 'Экономика', 'Общество', 'В мире', 'Башкортостан', 'Криминал', 'Спорт', 'Технологии', 'Культура']
  const { id } = useParams();
  const date = new Date().toLocaleDateString()




  const currentDayNews = newsSelector.filter((card) => {return card.date === date})
  const currentCard = newsSelector.find(card => card.id.toString() === id);
  const popularCard = newsSelector.map((card) => card).sort((a, b) => a.views - b.views)




  if (!currentCard) {
    return <h1>LOADING</h1>;
  }

  const moreNewsArr = newsSelector.filter((card) => {
    return card.tags.includes(currentCard.tags.split(' ')[0])
  })



  const newViews = async () => {
    try {
      const responce = await fetch('http://localhost:9000/api/v1/news/views', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: currentCard.id})
      })

      const data = await responce.json()
      return data

    } catch (error) {
      console.log('error')
    }
  }







  const renderNewsBlock = (image: string | any, text: string | any, comment: string | any) => {

    return (

      <>

      {(image) ? <Col md={12} sm={12} xs={12} className="mb-3"><img style={{ width: "100%" }} src={image} alt="title-img" /></Col> : <></>}

      {(text) ? <Col md={12} sm={12} xs={12} style={{ width: '100%', height: "max-content", fontSize: "16px" }} className="mb-4">{text}</Col> : <></>}


      {(comment) ?

      <Col style={{width: '100%'}}>

          <Col style={{width: '100%', height: '1px', backgroundColor: 'red'}} className="mb-4"></Col>

              <Col style={{fontWeight: JSON.parse(comment).fontBold, fontStyle: JSON.parse(comment).fontStyle, width: '100%', height: 'max-content'}} className="mb-4">{JSON.parse(comment).input}</Col>

          <Col style={{width: '100%', height: '1px', backgroundColor: 'red'}} className="mb-4"></Col>

      </Col> : <></>}

      </>
    )

  }




  return (


    <Container>

    <Col lg={12} md={12} sm={12} xs={12} className="d-flex flex-row">

    <Col lg={8} md={8} xs={8} sm={8} className="mt-4" style={{ marginRight: "10px" }}>

      <Col md={12} sm={12} xs={12} style={{ fontSize: "25px", fontWeight: "600" }} className="mb-2">
        {currentCard.title}
      </Col>

      <Col md={12} sm={6} xs={6} className="d-flex mb-4">
        <Col md={3}>{`Дата: ${currentCard.date}`}</Col>
        <Col md={6}>Автор: {currentCard.author}</Col>
      </Col>


      <Col md={12} sm={12} xs={12} className="mb-3" style={{fontWeight: '600'}}>{currentCard.lead}</Col>


      {(!currentCard.video) ? <></> : <Col md={12} sm={12} xs={12} className="mb-3"><iframe width="100%" height="485" src={currentCard.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></Col>}



      {(!currentCard.image_1) ? <></> : <Col md={12} sm={12} xs={12} className="mb-3"><img style={{ width: "100%" }} src={currentCard.image_1} alt="title-img" /></Col>}


      {(!currentCard.text_1) ? <></> : <Col md={12} sm={12} xs={12} style={{ width: '100%', height: "max-content", fontSize: "16px" }} className="mb-4">{currentCard.text_1}</Col>}


      {(!currentCard.comment_1) ? <></> :

      <Col style={{width: '100%'}}>
          <Col style={{width: '100%', height: '1px', backgroundColor: 'red'}} className="mb-4"></Col>
              <Col style={{fontWeight: JSON.parse(currentCard.comment_1).fontBold, fontStyle: JSON.parse(currentCard.comment_1).fontStyle, width: '100%', height: 'max-content'}} className="mb-4">{JSON.parse(currentCard.comment_1).input}</Col>
          <Col style={{width: '100%', height: '1px', backgroundColor: 'red'}} className="mb-4"></Col>
      </Col>}


      {/*  blocks */}

      {renderNewsBlock(currentCard.image_2, currentCard.text_2, currentCard.comment_2)}
      {renderNewsBlock(currentCard.image_3, currentCard.text_3, currentCard.comment_3)}
      {renderNewsBlock(currentCard.image_4, currentCard.text_4, currentCard.comment_4)}
      {renderNewsBlock(currentCard.image_5, currentCard.text_5, currentCard.comment_5)}
      {renderNewsBlock(currentCard.image_6, currentCard.text_6, currentCard.comment_6)}
      {renderNewsBlock(currentCard.image_7, currentCard.text_7, currentCard.comment_7)}
      {renderNewsBlock(currentCard.image_8, currentCard.text_8, currentCard.comment_8)}
      {renderNewsBlock(currentCard.image_9, currentCard.text_9, currentCard.comment_9)}
      {renderNewsBlock(currentCard.image_10, currentCard.text_10, currentCard.comment_10)}


      {/*  */}

          <Col>Читайте оперативные новости в нашем телеграм-канале: <a href="https://t.me/utvufa">https://t.me/utvufa</a></Col>

      {/*  */}


      <Col md={12} sm={12} xs={12} className="mt-5 mb-3" style={{width: '100%', height: 'max-content', fontSize: '22px', fontWeight: '800'}}>Читайте также</Col>



      {/* more news */}



      <Col md={12} sm={12} xs={12} >

          {(moreNewsArr.length == 0) ? <Col md={12} sm={12} xs={12} className="mt-5 mb-3" style={{width: '100%', height: 'max-content', fontSize: '16px'}}>Список пуст</Col> : moreNewsArr.map((card, index) => {
            return <Col key={card.id} className="mt-5 mb-3"><Link to={`/news/${card.id}`} style={{color: 'black'}}><MoreNews title={card.title} author={card.author} lead={card.lead} date={card.date} tag={card.tags.split(' ')}/></Link></Col> })
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
          <NewsMainBlock video={''} newsTitle={'Популярные'} linkButton={'/news'} newsButton='Смотреть все' newsArr={popularCard}/>
        </Col >


        <Col md={12} sm={12} xs={12} className='mt-4'>
          <NewsMainBlock video={''} newsTitle={`Новости от ${date}`} linkButton={'/news'} newsButton='Смотреть все' newsArr={currentDayNews}/>
        </Col >


    </Col>


   </Col>
    </Container>
  );
};

export default NewsOpenCard;

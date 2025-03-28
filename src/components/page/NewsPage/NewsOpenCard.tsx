import React, { FC, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

//

import { Col, Container } from "react-bootstrap";

// redux

import { useAppDispatch, useAppSelector } from "../../../types/reduxHooks";
import { getAsyncNews } from "../../../store/newsSlice";

// components

import MoreNews from "./MoreNews";
import MyTags from "../../UI/MyTags";
import NewsMainBlock from "../NewsMainBlock";

// utill

import { getWeekArray } from "../../util/currentWeekNews";
import { setToTop } from "../../util/setToTop";

//



const NewsOpenCard: FC = () => {

  setToTop()
  const dispatch = useAppDispatch()


  useEffect(() => {dispatch(getAsyncNews())}, [dispatch])


  const newsSelector = useAppSelector(state => state.news.news)


  const { id } = useParams();
  const date = new Date().toISOString().split('T')[0]

  const currentDate = new Date().toISOString().split('T')[0]
  const currentDayNews = newsSelector.filter((card) => {return card.date === date}).slice(0, 3)
  const currentCard: any = newsSelector.find(card => card.id.toString() === id);




  if (!currentCard) {
    return <Col className='d-flex justify-content-center flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Загрузка...</Col>;
  }

  const inputText = (text: string): any => {

    try {
      const transform = text.split(' ')

      const newText = transform.map((item: string): React.ReactNode => {

        if(item.includes('https')) {

          const index = transform.indexOf(item)
          return <a href={item} target="_blank">{transform[index-1]}</a>

        }else if (item.includes('<br/>')) {
          return <br/>
        } else {
          return <> {item} </>
        }
      })


      newText.filter((node: any) => {
        if(node.type === 'a') {
          const indexNode = newText.indexOf(node)
          return newText.splice(indexNode-1, 1)
        }
      })

      return <Col key={id} md={12} sm={12} xs={12} style={{ width: '100%', height: "max-content", fontSize: "16px" }} className="mb-3 mt-3">{newText}</Col>

    } catch (error: any) {
      console.log(`трансформация текса завершилась с ошибкой ${error.message}`)
    }

  }


  const inputComment = (comment: string) => {
    try {

      const newCommentText = JSON.parse(comment)

      const resultText = newCommentText.input.split(' ').map((item: string) => {
        if(item.includes('https')) {
          return <a href={item} target="_blank">{item}</a>
        }else if (item.includes('<br/>')) {
          return <br/>
        } else {
          return ` ${item} `
        }
      })


      return  <Col style={{width: '100%'}}>
                  <Col style={{width: '100%', height: '1px', backgroundColor: 'red'}} className="mb-4"></Col>
                      <Col style={{fontWeight: newCommentText.fontBold, fontStyle: newCommentText.fontStyle, width: '100%', height: 'max-content'}} className="mb-4">{resultText}</Col>
                  <Col style={{width: '100%', height: '1px', backgroundColor: 'red'}} className="mb-4"></Col>
              </Col>



    } catch (error: any) {
      console.log(`трансформация комментария завершилась с ошибкой ${error.message}`)
    }
  }





  // popular


  const arrDateWeek = getWeekArray(currentDate)
  const weekPopular = newsSelector.filter((item) => arrDateWeek.includes(item.date)).sort((a, b) => b.views - a.views).filter((item, index) => index <=2)


  const newsCardTag = currentCard.tags.split(' ')
  const moreNewsArr = newsSelector.map((card) => card).sort((a, b) => b.views - a.views).filter((card) => card.tags.includes(currentCard.tags.split(' ')[0])).filter((card) => card.title !== currentCard.title).filter((card, index) => index <= 5)

  const newViews = async () => {
    try {
      const responce = await fetch('https://utvchannel.tw1.su/api/v1/news/views', {
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

  newViews()



  const renderNewsBlock = (image: string | any, text: string | any, comment: string | any, imgcomment: string | any) => {

    return (

      <>

      {(text) ? inputText(text) : <></>}

      {(image) ? <Col md={12} sm={12} xs={12} className="mb-3"><img style={{ width: "100%", borderRadius: '7px'}} src={image} alt="title-img" /></Col> : <></>}

      {(!imgcomment || imgcomment == undefined) ? <></> : <Col md={12} sm={12} xs={12} style={{ width: '100%', height: "max-content", fontSize: "12px", color: 'grey'}} className="mb-2">источник: {imgcomment}</Col>}

      {(comment) ?  inputComment(comment) : <></>}

      </>
    )

  }






  return (

    <Container>

    <Col lg={12} md={12} sm={12} xs={12} className="d-flex flex-row">

    <Col lg={8} md={8} xs={12} sm={12} className="mt-4" style={{ marginRight: "10px" }}>

      <Col md={12} sm={12} xs={12} style={{ fontSize: "calc(1em + 0.5vw)", fontWeight: "600" }} className="mb-3">
        {currentCard.title}
      </Col>

      <Col md={12} sm={6} xs={6} className="d-flex flex-lg-row flex-column mb-2">
        <Col md={3} sm={12} xs={12} className="mb-2" style={{fontSize: "calc(0.5em + 0.3vw)", color: "#989898"}}>Дата: {currentCard.date}</Col>
        {(currentCard.author === '') ? <></> : <Col md={6} sm={12} xs={12} className="mb-2" style={{fontSize: "calc(0.5em + 0.3vw)", color: "#989898"}}>Автор: {currentCard.author}</Col>}
        <Col md={3} sm={12} xs={12} className="mb-2" style={{fontSize: "calc(0.5em + 0.3vw)", color: "#989898"}}>Просмотры: {currentCard.views}</Col>
      </Col>


      <Col md={12} sm={12} xs={12} className="mb-3" style={{fontWeight: '600'}}>{currentCard.lead}</Col>


      {(!currentCard.video && currentCard.title_image) ? <Col md={12} sm={12} xs={12} className="mb-3"><img style={{ width: "100%", borderRadius: '7px'}} src={currentCard.title_image} alt="title-img" /></Col> : (!currentCard.title_image && currentCard.video) ? <Col md={12} sm={12} xs={12} className="mb-3"><iframe width="100%" height="485" src={currentCard.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></Col> : (currentCard.video && currentCard.title_image) ? <Col><Col md={12} sm={12} xs={12} className="mb-3"><img style={{ width: "100%" }} src={currentCard.title_image} alt="title-img" /></Col><Col md={12} sm={12} xs={12} className="mb-3"><iframe width="100%" height="485" src={currentCard.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></Col></Col> : <></>}


      <Col>{(!currentCard.title_comment || currentCard.title_comment === undefined) ? <></> : <Col md={12} sm={12} xs={12} style={{ width: '100%', height: "max-content", fontSize: "12px", color: 'grey'}} className="mb-2">источник: {currentCard.title_comment}</Col>}</Col>

      {(!currentCard.text_1) ? <></> : inputText(currentCard.text_1)}

      {(!currentCard.image_1) ? <></> : <Col md={12} sm={12} xs={12} className="mb-3"><img style={{ width: "100%", borderRadius: '7px'}} src={currentCard.image_1} alt="title-img" /></Col>}

      {(!currentCard.image_comment_1 || currentCard.image_comment_1 === undefined) ? <></> : <Col md={12} sm={12} xs={12} style={{ width: '100%', height: "max-content", fontSize: "14px", color: 'grey' }} className="mb-4">источник: {currentCard.image_comment_1}</Col>}

      {(!currentCard.comment_1) ? <></> : inputComment(currentCard.comment_1)}


      {/*  blocks */}

      {renderNewsBlock(currentCard.image_2, currentCard.text_2, currentCard.comment_2, currentCard.image_comment_2)}
      {renderNewsBlock(currentCard.image_3, currentCard.text_3, currentCard.comment_3, currentCard.image_comment_3)}
      {renderNewsBlock(currentCard.image_4, currentCard.text_4, currentCard.comment_4, currentCard.image_comment_4)}
      {renderNewsBlock(currentCard.image_5, currentCard.text_5, currentCard.comment_5, currentCard.image_comment_5)}
      {renderNewsBlock(currentCard.image_6, currentCard.text_6, currentCard.comment_6, currentCard.image_comment_6)}
      {renderNewsBlock(currentCard.image_7, currentCard.text_7, currentCard.comment_7, currentCard.image_comment_7)}
      {renderNewsBlock(currentCard.image_8, currentCard.text_8, currentCard.comment_8, currentCard.image_comment_8)}
      {renderNewsBlock(currentCard.image_9, currentCard.text_9, currentCard.comment_9, currentCard.image_comment_9)}
      {renderNewsBlock(currentCard.image_10, currentCard.text_10, currentCard.comment_10, currentCard.image_comment_10)}





      {/*  */}

      {(!currentCard.news_description) ? <></> : <Col md={12} sm={12} xs={12} style={{ width: '100%', height: "max-content", fontSize: "16px" }} className="mb-4">Читайте оперативные новости в нашем телеграм-канале: <a href="https://t.me/utvufa">https://t.me/utvufa</a></Col>}

      {/*  */}


      <Col md={12} sm={12} xs={12} className="mt-5 mb-3" style={{width: '100%', height: 'max-content', fontSize: '22px', fontWeight: '800'}}>Читайте также</Col>



      {/* more news */}



      <Col md={12} sm={12} xs={12} >

          {(moreNewsArr.length === 0) ? <Col className='d-flex flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Список пуст</Col> : moreNewsArr.map((card, index) => {
            return <Col key={card.id} className="mt-5 mb-3"><Link to={`/news/${card.id}`} style={{color: 'black'}}><MoreNews title={card.title} author={card.author} lead={card.lead} date={card.date} tag={card.tags.split(' ')}/></Link></Col> })
            }

      </Col>

    </Col>




    <Col lg={4} md={4} xs={4} sm={4} className="d-flex flex-column d-none d-xl-block mt-4">

        <Col style={{minHeight: '144px'}} lg={12} md={12} xs={12} className="d-flex flex-wrap justify-content-center align-items-center">
            {(newsCardTag.length < 1 || newsCardTag[0] === '') ? <></> : newsCardTag.map((tag: any, index: any) => {
              return <Col style={{width: '40%', margin: '10px', borderRadius: '7px'}} className="d-flex justify-content-center mb-3" lg={6} md={6} xs={6} key={index}><MyTags tag={tag} /></Col>
            })}
        </Col>


        <Col md={12} sm={12} xs={12} className='mt-4'>
          <NewsMainBlock video={''} newsTitle={'Популярные'} linkButton={'/news'} newsButton='Смотреть все' newsArr={weekPopular}/>
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

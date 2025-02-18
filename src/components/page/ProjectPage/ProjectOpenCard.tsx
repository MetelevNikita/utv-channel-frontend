// css

import '../../../styles/animation.css'

//

import { FC, useEffect, useState, useMemo } from'react'
import { useParams, Link } from 'react-router-dom'

//

import { Col, Container, Row } from 'react-bootstrap'

// components

import MyButton from '../../UI/MyButton'
import MyImageAnimation from '../../UI/MyImageAnimation'
import ProjectVideoCard from './ProjectVideoCard'
import NumberButton from '../../UI/NumberButton'

// redux

import { useAppDispatch, useAppSelector } from '../../../types/reduxHooks'
import { getAsyncProject } from '../../../store/projectSlice'

// types

import { projectTypeCard } from '../../../types/types'

// utill

import { setToTop } from '../../util/setToTop'



const ProjectOpenCard = () => {


  const [playlist, setPlaylist] = useState<any>([])
  const [videoList, setVideoList] = useState<any>([])
  const [programId, setProgramId] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)


  const YOUTUBE_APIKEY = 'AIzaSyDN1SqnPl2uFoQyfRIHc3YkbCrdaJ0CJ44'
  const channelId = 'UCvCcbnj9Ls2RrxFfUZVGi_w'
  const uploadsId = 'UUvCcbnj9Ls2RrxFfUZVGi_w'


  const {id} = useParams()
  const dispatch =  useAppDispatch()
  const projectSelector: projectTypeCard[] = useAppSelector(state => state.project.project)

  const currentProjectCard = projectSelector.filter((card: projectTypeCard) => {return card.id == Number(id)})[0]


  const getPlayList = async () => {
    try {
      const playListItem = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCvCcbnj9Ls2RrxFfUZVGi_w&maxResults=100&key=${YOUTUBE_APIKEY}`


      const responce = await fetch(playListItem, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })
      const data = await responce.json()
      const checkedChannel = await data.items.filter((card: any) => {
          return card.snippet.localized.title === currentProjectCard.title
        })

      const playListVideo = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=100&playlistId=${checkedChannel[0].id}&key=${YOUTUBE_APIKEY}`

      const responceVideo = await fetch(playListVideo, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })

      const dataVideo = await responceVideo.json()
      setVideoList(dataVideo.items)

    } catch (error) {
      console.error(`ОШИБКА ЗАГРУЗКИ КОНТЕНТА ${error}`)
    }
  }


  const result = useMemo(getPlayList, [currentProjectCard])


  useEffect(() => {
    dispatch(getAsyncProject())
  }, [])


  const numsPages = [
    {num: 1, page: '1'},
    {num: 2, page: '2'},
    {num: 3, page: '3'}

  ]


  if (!currentProjectCard && videoList.length < 1) {
    return <Col className='d-flex justify-content-center flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Загрузка...</Col>
  }



  const checkedVideoCard = videoList.filter((card: any) => card.snippet.thumbnails.maxres !== undefined)

  const pageOne = checkedVideoCard.filter((card: any, index: number) => {
    return index <= 5
  })

  const pageTwo = checkedVideoCard.filter((card: any, index: number) => {
    return index > 5 && index <= 11
  })

  const pageThree = checkedVideoCard.filter((card: any, index: number) => {
    return index > 11
  })


  const openPage = () => {


    setToTop()

    if (pageNumber === 1) {

      return pageOne.map((item: any) => {
        return <ProjectVideoCard key={item.snippet.resourceId.videoId} title={item.snippet.title} img={item.snippet.thumbnails.maxres.url} link={item.snippet.resourceId.videoId}></ProjectVideoCard>
      })

    } else if (pageNumber === 2) {

      return pageTwo.map((item: any) => {
        return <ProjectVideoCard key={item.snippet.resourceId.videoId} title={item.snippet.title} img={item.snippet.thumbnails.maxres.url} link={item.snippet.resourceId.videoId}></ProjectVideoCard>
      })

    } else if (pageNumber === 3) {

      return pageThree.map((item: any) => {
        return <ProjectVideoCard key={item.snippet.resourceId.videoId} title={item.snippet.title} img={item.snippet.thumbnails.maxres.url} link={item.snippet.resourceId.videoId}></ProjectVideoCard>
      })

    }
  }



  return (

    <Container>

    <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-md-row flex-column justify-content-around mt-4 mb-3'>


      <Col lg={5} md={6} sm={12} xs={12} className='d-flex flex-column justify-content-center align-items-center'>

          <Col lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center align-items-center mb-4' style={{width: '100%', overflow: 'hidden'}}><MyImageAnimation image={currentProjectCard.image} width={'540px'} height={'max-content'} scaleStart={1.3} scaleEnd={1}/></Col>

          <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center'>

              <Col lg={6} md={6} sm={12} xs={12} className='d-flex justify-content-center align-items-center mb-3'><MyButton style={{width: '90%', height: '44px'}} className='project_button_animation' text={'Трейлер'} onClick={() => {console.log('трейлер')}}/></Col>
              <Col lg={6} md={6} sm={12} xs={12} className='d-flex justify-content-center align-items-center mb-3'><Link target='_blank' style={{width: '90%', height: '44px', display: 'flex', justifyContent: 'center'}} className='project_button_animation' to={currentProjectCard.channel}><MyButton text={'Канал'} onClick={() => {console.log('канал')}}/></Link></Col>

          </Col>

      </Col>


      <Col lg={5} md={5} sm={12} xs={12} className='d-flex flex-column justify-content-lg-start justify-content-center mb-3'>


          <Col style={{fontSize: '35px', fontWeight: '800', color: 'black', height: 'max-content', width: '100%'}} lg={6} md={6} sm={12} xs={12} className='d-flex justify-content-lg-start justify-content-center mb-4'>{currentProjectCard.title}</Col>
          <Col style={{fontSize: '14px', fontWeight: '300', color: '#878787', height: 'max-content', minHeight: '140px', maxHeight: 'max-content', width: '100%'}} lg={6} md={6} sm={12} xs={12} className='d-flex justify-content-lg-start justify-content-center mb-4'>{currentProjectCard.description}</Col>


        <Col lg={6} md={6} sm={6} xs={6} className='d-flex justify-content-lg-start justify-content-center mb-4' style={{width: '100%'}}>

            <Col style={{fontSize: '17px', fontWeight: '300', color: '#878787', height: 'max-content'}} lg={6} md={6} sm={6} xs={6}>{`Хронометраж: ${currentProjectCard.duration} минут`}</Col>
            <Col style={{fontSize: '17px', fontWeight: '300', color: '#878787', height: 'max-content'}} lg={6} md={6} sm={6} xs={6}>{`Год выпуска: ${currentProjectCard.year}`}</Col>

        </Col>

        <Col lg={6} md={6} sm={6} xs={6} style={{fontSize: '17px', fontWeight: '300', color: '#878787', height: 'max-content', width: '100%'}}>{`Автор передачи: ${currentProjectCard.author}`}</Col>

      </Col>
    </Col>



    <Col lg={12} md={12} sm={12} xs={12} className='d-flex aline-items-center justify-content-around flex-wrap'>
      {(checkedVideoCard.length < 1) ? <Col className='d-flex justify-content-center flex-md-row flex-column' style={{fontSize: '21px', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#FEA633'}}>Загрузка...</Col> : openPage()}
    </Col>


    <Col lg={12} md={12} sm={12} xs={12} className='mt-4'>
          <Col className='d-flex justify-content-center align-items-center'>
              {numsPages.map((item: any, index: number) => {
                return <NumberButton key={index} num={item.num} page={{pageNumber, setPageNumber}}/>
              })}
          </Col>
    </Col>
    </Container>
  )
}

export default ProjectOpenCard
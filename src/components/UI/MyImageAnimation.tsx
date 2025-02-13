import { FC } from "react"

//

import { useSpring, animated, useSpringRef } from "@react-spring/web"
import { Col } from "react-bootstrap"

//

interface MyImageAnimationProps {
  width: string
  height: string
  scaleStart: number
  scaleEnd: number
  image: string
  onClick?: () => void
  color?: string | any
}




const MyImageAnimation: FC<MyImageAnimationProps> = ({ width, height, scaleStart, scaleEnd, image, onClick, color }) => {

  const api = useSpringRef()


  const imageAnim = useSpring({
    ref: api,
    from: { transform: `scale(1)` },
    config: { duration: 1000 },
  })


  const moveImage = (num: number) => {
    api.start({ transform: `scale(${num})` })
  }


  return (

    <Col style={{width: width, height: height, overflow: 'hidden'}}>

      <animated.div style={{overflow: 'hidden', ...imageAnim}} onClick={onClick} onMouseOver={() => {moveImage(scaleStart)}} onMouseOut={() => {moveImage(scaleEnd)}}>
      <img style={{width: '100%', height: '100%'}} className="d-flex align-items-center justify-content-center" src={image} alt="project-img" />
      </animated.div>

    </Col>


  )
}

export default MyImageAnimation

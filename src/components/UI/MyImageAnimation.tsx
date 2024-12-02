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
}




const MyImageAnimation: FC<MyImageAnimationProps> = ({ width, height, scaleStart, scaleEnd, image }) => {

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

      <animated.div style={{overflow: 'hidden', ...imageAnim}} onMouseOver={() => {moveImage(scaleStart)}} onMouseOut={() => {moveImage(scaleEnd)}}>
      <img src={image} style={{width: width, height: '100%'}} alt="project-img" />
      </animated.div>

    </Col>


  )
}

export default MyImageAnimation

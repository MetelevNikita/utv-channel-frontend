// img-big

import imgOneBig from './../asset/header-project/1-big.png'
import imgTwoBig from './../asset/header-project/2-big.png'
import imgThreeBig from './../asset/header-project/3-big.png'
import imgFourBig from './../asset/header-project/4-big.png'
import imgFiveBig from './../asset/header-project/5-big.png'


// img-small


import imgSmallOne from './../asset/header-project/1-small.png'
import imgSmallTwo from './../asset/header-project/2-small.png'
import imgSmallThree from './../asset/header-project/3-small.png'
import imgSmallFour from './../asset/header-project/4-small.png'
import imgSmallFive from './../asset/header-project/5-small.png'


//

type HeaderProject = {
  id: number,
  title: string,
  description: string
  imgBig: string,
  imgSmall: string,
  link: string
}

const headerProject: HeaderProject[] = [

  {
    id: 1,
    title: "Title 1",
    description: "This is my project 1" ,
    imgBig : imgOneBig,
    imgSmall: imgSmallOne,
    link: 'http://'
  },

  {
    id: 2,
    title: "Title 2",
    description: "This is my project 2" ,
    imgBig : imgTwoBig,
    imgSmall: imgSmallTwo,
    link: 'http://'
  },

  {
    id: 3,
    title: "Title 3",
    description: "This is my project 3" ,
    imgBig : imgThreeBig,
    imgSmall: imgSmallThree,
    link: 'http://'
  },

  {
    id: 4,
    title: "Title 4",
    description: "This is my project 4" ,
    imgBig : imgFourBig,
    imgSmall: imgSmallFour,
    link: 'http://'
  },

  {
    id: 5,
    title: "Title 5",
    description: "This is my project 5" ,
    imgBig : imgFiveBig,
    imgSmall: imgSmallFive,
    link: 'http://'
  }


]

export default headerProject
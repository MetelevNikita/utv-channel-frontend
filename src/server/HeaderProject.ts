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
  subtitle: string,
  description: string
  imgBig: string,
  imgSmall: string,
  date: Date,
  link: string
}

const headerProject: HeaderProject[] = [

  {
    id: 1,
    title: "Title 1",
    subtitle:  "This is my project  1" ,
    description: "This is my project 1 This is my project 1 This is my project  This is my project 1 This is my project 1" ,
    imgBig : imgOneBig,
    imgSmall: imgSmallOne,
    date: new Date(),
    link: 'http://'
  },

  {
    id: 2,
    title: "Title 2",
    subtitle:  "This is my project  2" ,
    description: "This is my project 2 This is my project 2 This is my project 2 This is my project 2" ,
    imgBig : imgTwoBig,
    imgSmall: imgSmallTwo,
    date: new Date(),
    link: 'http://'
  },

  {
    id: 3,
    title: "Title 3",
    subtitle:  "This is my project  3" ,
    description: "This is my project 3 This is my project 3 This is my project 3 This is my project 3" ,
    imgBig : imgThreeBig,
    imgSmall: imgSmallThree,
    date: new Date(),
    link: 'http://'
  },

  {
    id: 4,
    title: "Title 4",
    subtitle:  "This is my project  4" ,
    description: "This is my project 4 This is my project 4 This is my project 4 This is my project 4" ,
    imgBig : imgFourBig,
    imgSmall: imgSmallFour,
    date: new Date(),
    link: 'http://'
  },

  {
    id: 5,
    title: "Title 5",
    subtitle:  "This is my project  5" ,
    description: "This is my project 5 This is my project 5 This is my project 5 This is my project 5" ,
    imgBig : imgFiveBig,
    imgSmall: imgSmallFive,
    date: new Date(),
    link: 'http://'
  }


]

export default headerProject
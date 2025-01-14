export type projectTypeCard = {
  id: number | string
  title: string
  description: string
  image: string
  duration: number
  author: string
  year: number
  channel: string
  trailer: string

}



export type teamType = {
  id: number | string
  name: string
  profession: string
  image: string
}



export type programCardType = {
  id: number,
  title: string,
  subtitle: string,
  description: string
  image: string | any,
  date: string,
  link: string
}





export type INewsType = {
  id: number,
  title: string,
  lead: string,
  author: string
  date: string
  video: string
  text_1: string | null
  image_1: string | any
  image_comment_1: string | null
  comment_1: string | null
  text_2: string | null
  image_2: string | any
  image_comment_2: string | null
  comment_2: string | null
  text_3: string | null
  image_3: string | any
  image_comment_3: string | null
  comment_3: string | null
  text_4: string | null
  image_4: string | any
  image_comment_4: string | null
  comment_4: string | null
  text_5: string | null
  image_5: string | any
  image_comment_5: string | null
  comment_5: string | null
  text_6: string | null
  image_6: string | null
  image_comment_6: string | null
  comment_6: string | null
  text_7: string | null
  image_7: string | null
  image_comment_7: string | null
  comment_7: string | null
  text_8: string | null
  image_8: string | null
  image_comment_8: string | null
  comment_8: string | null
  text_9: string | null
  image_9: string | null
  image_comment_9: string | null
  comment_9: string | null
  text_10: string | null
  image_10: string | null
  image_comment_10: string | null
  comment_10: string | null
  title_image: string | null
  tags: string
  views: number
}
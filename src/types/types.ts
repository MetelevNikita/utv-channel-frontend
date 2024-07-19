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
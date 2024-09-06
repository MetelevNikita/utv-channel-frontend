import { FC } from "react";

//

import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//


interface ProjectVideoCardProps {
  title: string;
  img: string;
  link: string;
}
const ProjectVideoCard: FC<ProjectVideoCardProps> = ({ title, img, link }) => {




  return (


    <Link target="_blank" to={`https://www.youtube.com/watch?v=${link}`} style={{width: '320px', height: 'max-content', margin: '20px'}}>

      <Col className="mb-3"><img style={{width: '100%', height: '180px'}} src={img} alt="poster" /></Col>
      <Col style={{color: 'black'}}>{title}</Col>

    </Link>

  )
}

export default ProjectVideoCard

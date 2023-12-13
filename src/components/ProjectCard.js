import { Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
export const ProjectCard = ({ title, description, imgUrl,plink,altImg }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={altImg}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <a href={plink} target="_blank" rel="noreferrer"><button className="plink" onClick={() => console.log('connect')}>Project Link <ArrowRightCircle size={25} /></button></a>
        </div>
      </div>
    </Col>
  )
}

import "./projectbox.css";


function ProjectCard(props) {
  return (
    <div className="project" data-aos={props.dataAos} data-aos-duration={props.dataAosDuration}>
        <div className="project_videocontainer">
          <div>
            <img
              src={props.image}
              alt="Rockstar Games"
            />
          </div>
        </div>
        <div className="project_information">
          <h2>{props.title}</h2>
          <p>
            {props.title_about}
          </p>
          <div className="pro_button">
            {/* <Link to="" target="_blank" > */}
              <span type="button" className="btns">
                View Code
              </span>
            {/* </Link> */}
          </div>
        </div>
      </div>
  )
}

export default ProjectCard
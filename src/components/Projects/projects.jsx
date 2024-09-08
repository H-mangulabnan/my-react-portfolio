import React from 'react'
import Style from './projects.module.css'
import Project_1 from '../../assets/images/project1.png'
import Project_2 from '../../assets/images/project2.png'
import Project_3 from '../../assets/images/project3.png'


const ProjectCard = ({ image, title, description }) => {
  return (
    <div className={`${Style.columns} col d-flex flex-column align-items-center`}>
      <div className={Style.colImage}>
        <img src={image} alt="projectImage" />
      </div>
      <div className={Style.projectContent}>
        <h2 className={`${Style.titleProject} d-flex`}>{title}</h2>
        <p className={Style.projectDescription}>{description}</p>
      </div>
    </div>
  );
};


const projects = () => {
  const projectList = [
    {
      image: Project_1,
      title: 'Simple Crud System',
      description: 'I developed a simple CRUD system using PHP and MySQL, and customized it with a Kuromi-inspired design to enhance and practice my design skills.'
    },
    {
      image: Project_2,
      title: 'Promotional Website',
      description: 'I created a promotional website for my friend\'s milk tea shop, using Bootstrap and JavaScript to build a dynamic and responsive design.'
    },
    {
      image: Project_3,
      title: 'Weather App',
      description: 'I’m currently learning React.js and try on building a weather app using React.'
    }
  ];


  return (
    <div className="container">
      <div className="text-center">
          <h1 className={Style.projectTitle}>Projects</h1>
      </div>
      <div className="row">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};



export default projects

'use client'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: '포트폴리오 웹사이트',
    description: 'Project 1 description',
    img: '/img/p4.png',
    tag: ['Next.js', 'TypeScript', 'React'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'PLAY-LAB 디자이너 셀렉샵',
    description: 'Project 2 description',
    img: '/img/p3.png',
    tag: ['React', 'recoil'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'BebeMarket 육아커뮤니티 서비스',
    description: 'Project 3 description',
    img: '/img/p1.png',
    tag: ['React', 'recoil'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'CollectYourThoughts',
    description: 'Project 4 description',
    img: '/img/p2.png',
    tag: ['TypeScript', 'React'],
    gitUrl: '/',
    previewUrl: '/',
  },
]

const ProjectSection = () => {
  return (
    <Container>
      <H2>My Projects</H2>
      <ProjectsDiv>
        {projectsData.map(p => (
          <ProjectCard
            key={p.id}
            img={p.img}
            description={p.description}
            title={p.title}
            tag={p.tag}
          />
        ))}
      </ProjectsDiv>
    </Container>
  )
}

export default ProjectSection
const Container = styled.div`
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;

  padding: 0 30px;
`

const H2 = styled.h2`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
`
const ProjectsDiv = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6vh 3vw;

  @media screen and (max-width: 1045px) {
    grid-template-columns: 1fr 1fr;
  }
`

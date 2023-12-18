'use client'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: 'BebeMarket',
    description: '육아 일상을 공유하는 커뮤니티 플랫폼',
    img: '/img/p1.PNG',
    tag: ['React', 'recoil'],
    gitUrl: 'https://github.com/susuje/BebeMarket',
    previewUrl: 'https://bebemarket.netlify.app/',
    detail:
      '첫 프로젝트이지만 부팀장으로서 프로젝트 기획·디자인·구조 설계를 리딩하고, 제공된 백엔드 API를 활용해 CRUD 기능을 구현하였습니다. 팀원들과 더 나은 소통을 위해 스터디 및 회의를 주최하였습니다. 프로젝트 완성 후, 사용자경험과 성능 개선을 위해 리팩토링을 하였습니다. browser-image-compression 라이브러리를 통해 Lighthouse Performance 62점에서 96점으로 향상하였습니다. ',
  },
  {
    id: 2,
    title: 'PLAY-LAB 디자이너 셀렉샵',
    description: '패션부터 라이프스타일까지 구매가능한 셀렉숍',
    img: '/img/p3.PNG',
    tag: ['React', 'recoil'],
    gitUrl: 'https://github.com/susuje/openMarket',
    previewUrl: 'https://play-lab.netlify.app/',
    detail:
      '로그인과 회원가입을 비롯한 장바구니 기능 등 웹 쇼핑몰의 전반적인 개발 과정을 경험하며 완성한 개인 프로젝트입니다. 디자이너 셀렉샵이란 컨셉에 걸맞게, 카테고리 기능을 추가하였습니다. react-hook-form과 react-daum-postcode와 같이 다양한 라이브러리를 경험해 볼 수있었습니다',
  },
  {
    id: 3,
    title: 'CollectYourThoughts',
    description: '자유로운 주제를 가진 글쓰기 어플리케이션',
    img: '/img/p2.PNG',
    tag: ['TypeScript', 'React', 'Redux'],
    gitUrl: 'https://github.com/susuje/CollectYourThoughts',
    previewUrl: 'https://colyouth.netlify.app/',
    detail:
      'Typescript에 익숙해지기 위해 진행한 토이 프로젝트입니다. 단순한 TODO 기능만 구현하기보다, 주제를 자유롭게 만들고 분류하여 볼 수 있는 기능을 추가하였습니다. 초반에 Props-drilling으로 만든 프로젝트의 로컬환경과 Netlify 환경의 페이지 동작 차이를 경험한 후, 이를 해결하기 위해 Redux-Toolkit을 도입해 리팩토링하였습니다.',
  },
  {
    id: 4,
    title: '포트폴리오',
    description: '인터랙티브한 포트폴리오 웹사이트',
    img: '/img/p4.PNG',
    tag: ['Next.js', 'TypeScript', 'React'],
    gitUrl: '/',
    previewUrl: '/',
    detail:
      '최근 배우고 있는 Next.js을 도입한 포트폴리오 사이트입니다. MouseEvent 활용하여 인터랙티브한 Intro 페이지를 구현하였습니다. 또한 Framer-motion 을 통해 간단한 애니메이션을 구현하였습니다.',
  },
  {
    id: 5,
    title: '날씨 어플리케이션',
    description: '검색한 도시의 날씨를 알려주는 웹 어플리케이션',
    img: '/img/meteoo.PNG',
    tag: ['TypeScript', 'React'],
    gitUrl: 'https://github.com/susuje/WeatherApp',
    previewUrl: 'https://weathermeteo.netlify.app/',
    detail:
      'Typescript에 익숙해지기 위해 진행한 토이 프로젝트입니다. OpenWeatherMap API 사용하여 사용자가 현재 위치한 도시 또는 검색한 도시의 날씨를 반환합니다.',
  },
]

const ProjectSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }
  return (
    <Container>
      <H2>My Projects</H2>
      <ProjectsUl ref={ref}>
        {projectsData.map((p, i) => (
          <motion.li
            key={i}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: i * 0.4 }}
          >
            <ProjectCard
              key={p.id}
              img={p.img}
              description={p.description}
              title={p.title}
              tag={p.tag}
              gitUrl={p.gitUrl}
              previewUrl={p.previewUrl}
              detail={p.detail}
            />
          </motion.li>
        ))}
      </ProjectsUl>
    </Container>
  )
}

export default ProjectSection
const Container = styled.div`
  //height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  padding: 0 30px 80px 30px;
`

const H2 = styled.h2`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
`
const ProjectsUl = styled.ul`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6vh 3vw;

  @media screen and (max-width: 1045px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

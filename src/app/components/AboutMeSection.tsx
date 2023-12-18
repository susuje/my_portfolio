'use client'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useTypewriter } from 'react-simple-typewriter'
import TabBtn from './TabBtn'

const AboutMeSection = () => {
  const moveTo = () => {
    window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })
  }
  const tabData = [
    {
      title: 'Skills',

      content: (
        <ul>
          <li>• JavaScript</li>
          <li>• React</li>
          <li>• TypeScript</li>
          <li>• Next.js</li>
          <li>• HTML & CSS</li>
        </ul>
      ),
    },
    {
      title: 'Education',

      content: (
        <ul>
          <li>
            • 멋쟁이사자처럼 프론트엔드 5기 <br />
            <span>2023.02 - 2023.06</span>
          </li>
          <li>
            • 프랑스 파리 국립 건축학교 - ENSAPM <br />
            <span>2018.09 - 2022.06</span>
          </li>
        </ul>
      ),
    },
    {
      title: 'Certification',

      content: (
        <ul>
          <li>• 프랑스어 DELF B2</li>
        </ul>
      ),
    },
  ]
  const [tab, setTab] = useState('Skills')
  const [typeEffect] = useTypewriter({
    words: ['배움을 즐기는', '과정을 즐기는'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  })

  return (
    <Container>
      <Hello>안녕하세요!😺</Hello>
      <LoopDiv>
        <H1 className="loop">{typeEffect}</H1>
      </LoopDiv>
      <H1>
        개발자 <span>정수연</span>입니다.
      </H1>
      <ContentDiv>
        <Skill>
          <TabBtn tab={tab} setTab={setTab} />
          <ListDiv>{tabData.find(t => t.title === tab)?.content}</ListDiv>
        </Skill>
        <Content>
          <span>기술을 빠르게 습득하여 성장합니다.</span>
          <br /> 새로운 기술에 대한 호기심을 바탕으로, 학습 후 프로젝트에
          적용함으로써 기술을 흡수합니다. 학습한 지식을 벨로그에 기록하여
          회고합니다.
          <br />
          <br />
          <span> 함께하는 성장을 중요시합니다.</span>
          <br /> 팀 프로젝트에서 기술 스터디를 리딩해 팀원들의 신뢰를 얻고,
          성공적으로 프로젝트를 마친 경험이 있습니다. 팀원들과 함께하는 개발은,
          협업과 소통을 통해 더 큰 시너지를 이끌어낸다는 것을 알게되었습니다.
        </Content>
      </ContentDiv>
      <Arrow
        src={'/img/arrow-down.gif'}
        alt="아래화살표"
        onClick={() => moveTo()}
      />
    </Container>
  )
}

export default AboutMeSection

const Container = styled.div`
  position: relative;
  height: 100vh;
  max-width: 1350px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 30px;

  @media screen and (max-width: 768px) {
    height: 130vh;
  }
  @media screen and (max-width: 480px) {
    height: 150vh;
  }
`
const bounce = keyframes`
  0% {
    transform: translate(0, -38px);
  }
  50% {
    transform: translate(0, -62px);
  }
  100% {
    transform: translate(0, -38px);
  }
`
const Hello = styled.h2`
  font-size: 42px;
  //font-weight: 600;
  animation: ${bounce} 1s infinite;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

const LoopDiv = styled.div`
  width: 250px;
  display: inline-block;
  @media screen and (max-width: 768px) {
    height: 42px;
  }
`
const H1 = styled.h1`
  display: inline-block;
  font-size: 42px;

  &.loop {
    box-shadow: inset 0 -20px #bfffa1;
  }

  span {
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

const ContentDiv = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const Content = styled.div`
  width: 50%;
  line-height: 32px;
  font-size: 22px;
  font-weight: 400;

  span {
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 18px;
  }
`
const Skill = styled.div`
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 50px;
  }
`
const ListDiv = styled.div`
  li {
    padding: 12px 0px;
    font-weight: 500;
    &:first-child {
      margin-top: 10px;
    }
    span {
      display: block;
      margin-top: 10px;
    }
    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }
`
const Arrow = styled.img`
  cursor: pointer;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;

  @media screen and (max-width: 768px) {
    //position: fixed;
  }
`

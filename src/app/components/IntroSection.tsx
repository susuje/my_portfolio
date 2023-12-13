'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'

const IntroSection = () => {
  const [moveX, setMoveX] = useState(0)
  const [moveY, setMoveY] = useState(0)

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    // console.log('hi')

    const x = (window.innerWidth - event.pageX) * 6 * 0.015
    const y = (window.innerHeight - event.pageY) * 3 * 0.025

    setMoveX(x)
    setMoveY(y)
  }
  const moveTo = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <Container onMouseMove={handleMouseMove}>
      <BlurImg src="/img/pimk.png" alt="핑크" />
      <BlurViolet src="/img/violetblur.png" alt="보라" />
      <ContentDiv>
        <Title>
          Frontend <br />
          Portfolio
        </Title>

        <GirlDiv>
          <Image
            fill
            src="/img/girl.png"
            alt="노트북들고작업하는사진"
            style={{
              objectFit: 'cover',
              transform: `translate(${moveX}px, ${moveY}px)`,
            }}
            quality={100}
          />
        </GirlDiv>
        <LapDiv>
          <Image
            fill
            src="/img/laptop.png"
            alt="노트북사진"
            style={{
              objectFit: 'cover',
              transform: `translate(${moveY}px, ${moveX}px)`,
            }}
            quality={100}
          />
        </LapDiv>
        <Div>
          <Btn>Github</Btn>
          <Btn>Velog</Btn>
          <Btn className="cv">Download CV</Btn>
        </Div>
      </ContentDiv>
      <Arrow
        src={'/img/arrow-down.gif'}
        alt="아래화살표"
        onClick={() => moveTo()}
      />
    </Container>
  )
}

export default IntroSection
const GirlDiv = styled.div`
  position: absolute;
  height: 404px;
  width: 404px;
  bottom: -10%;
  right: 0;
`
const LapDiv = styled.div`
  position: absolute;
  height: 300px;
  width: 300px;
  top: -30%;
  left: 0;
`
const Container = styled.div`
  height: 100vh;
  // position: relative;
`
const ContentDiv = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Title = styled.h1`
  text-align: center;
  // position: absolute;
  //top: 50%;
  // left: 50%;
  //transform: translate(-50%, -50%);
  font-size: 124px;
  line-height: 170px;
  font-weight: 700;
`
const BlurImg = styled.img`
  width: 50%;
  position: absolute;
  &:hover {
    width: 50%;
    transition: all 1s;
  }
`
const BlurViolet = styled.img`
  width: 50%;
  position: absolute;
  &:hover {
    width: 50%;
    transition: all 1s;
  }
  position: absolute;
  right: 0;
`
const Illu = styled.img`
  position: absolute;
  &.girl {
    width: 25%; //403
    bottom: 0;
    right: 5%;
  }

  &.lap {
    width: 20%; //273
    left: 3%;
    top: 60px;
  }
`
const Div = styled.div`
  margin-top: 50px;
`

const Btn = styled.button`
  font-size: 16px;
  border: 1px solid #c4c4c4;
  padding: 10px 20px;
  border-radius: 20px;
  margin-right: 10px;

  &.cv {
    background-color: black;
    color: white;
  }
`

const Arrow = styled.img`
  cursor: pointer;
  position: absolute;
  width: 60px;

  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
`

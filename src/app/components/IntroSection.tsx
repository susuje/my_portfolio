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
      <Title>
        Frontend <br />
        Portfolio
      </Title>

      <IlluDiv>
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
      </IlluDiv>

      <Div>
        <Btn>Github</Btn>
        <Btn>Velog</Btn>
        <Btn className="cv">Download CV</Btn>
      </Div>
    </Container>
  )
}

export default IntroSection
export const IlluDiv = styled.div`
  position: absolute;
  height: 404px;
  width: 404px;
  bottom: 0;
  right: 5%;
`
const Container = styled.div`
  height: 100vh;
  position: relative;
`
const Title = styled.h1`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 124px;
  line-height: 170px;
  font-weight: 700;
`
const BlurImg = styled.img`
  width: 50%;

  &:hover {
    width: 50%;
    transition: all 1s;
  }
  &.violet {
    position: absolute;
    right: 0;
  }
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
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%);
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

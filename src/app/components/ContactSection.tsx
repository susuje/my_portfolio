'use client'
import styled from 'styled-components'
import Image from 'next/image'
const ContactSection = () => {
  return (
    <Container>
      <H2>Contact Me !</H2>
      <Wrapper>
        <Info>
          <Image
            src="/img/message.svg"
            alt="이메일사진"
            width={48}
            height={48}
          />
          <p>wjdtn0n@naver.com</p>
        </Info>
        <Info>
          <Image src="/img/phone.svg" alt="핸드폰사진" width={48} height={48} />
          <p>010-2771-1084</p>
        </Info>
      </Wrapper>
    </Container>
  )
}

export default ContactSection

const Container = styled.div`
  height: 100vh;
  // position: relative;
  padding: 100px 30px 30px 30px;
`
const H2 = styled.h2`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 50px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  margin: 0 auto;
  margin-top: 100px;
`
const Info = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 22px;
    margin-left: 20px;
  }

  &:first-child {
    margin-bottom: 50px;
  }
`

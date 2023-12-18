import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
interface Props {
  img: string
  title: string
  description: string
  tag: string[]
  gitUrl: string
  previewUrl: string
  detail: string
}
function ProjectCard({
  img,
  title,
  description,
  tag,
  gitUrl,
  previewUrl,
  detail,
}: Props) {
  return (
    <Container>
      <Detail>{detail}</Detail>
      <ImgDiv
        style={{
          background: `url(${img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover',
        }}
      ></ImgDiv>
      <ContentDiv>
        <h3>{title}</h3>
        <p>{description}</p>
        <TagDiv>
          {tag.map((t, i) => (
            <Tag key={i}># {t}</Tag>
          ))}
        </TagDiv>
        <IconDiv>
          <Icon style={{ marginRight: '10px' }}>
            <Link href={gitUrl}>
              <Image
                width={22}
                height={22}
                src="./img/github.svg"
                alt="github icon"
                style={{}}
              />
            </Link>
          </Icon>

          <Icon>
            <Link href={previewUrl}>
              <Image
                width={22}
                height={22}
                src="./img/url.svg"
                alt="url icon"
                style={{}}
              />
            </Link>
          </Icon>
        </IconDiv>
      </ContentDiv>
    </Container>
  )
}

export default ProjectCard
const IconDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: end;
`
const Icon = styled.div`
  z-index: 120;
  p {
    margin-right: 5px;
  }
`
const Detail = styled.p`
  position: absolute;
  padding: 40px;
  display: none;
  color: white;
  line-height: 28px;
  font-weight: 500;
`
const Container = styled.div`
  cursor: pointer;
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 25px 25px 0px 0px;
  box-shadow: rgba(60, 64, 67, 0.1) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.1) 0px 2px 6px 2px;

  &:hover::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    display: block;
    width: 100%;
    height: 100%;
    color: black;
  }

  &:hover ${Detail} {
    display: block;
    z-index: 100;
  }
`

const ImgDiv = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
`
const ContentDiv = styled.div`
  padding: 15px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0px;
  }
`
const Tag = styled.div`
  font-size: 14px;
  margin-right: 7px;
  color: white;
  border-radius: 15px;
  padding: 5px 10px;
  background-color: #38bdf8;
  &:last-child {
    margin-right: 0px;
  }
`
const TagDiv = styled.div`
  display: flex;
  margin-top: 30px;
`

import styled from 'styled-components'
interface Props {
  img: string
  title: string
  description: string
  tag: string[]
}
function ProjectCard({ img, title, description, tag }: Props) {
  return (
    <Container>
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
      </ContentDiv>
    </Container>
  )
}

export default ProjectCard

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
    background-color: rgba(0, 0, 0, 0.3);
    display: block;
    width: 100%;
    height: 100%;
    color: black;
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

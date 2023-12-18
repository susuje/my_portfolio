import styled from 'styled-components'
interface Props {
  tab: string
  setTab: (txt: string) => void
}
export default function TabBtn({ tab, setTab }: Props) {
  const menus = ['Skills', 'Education', 'Certification']
  return (
    <>
      {menus.map((txt, index) => (
        <Btn
          key={index}
          className={tab == txt ? 'active' : ''}
          onClick={() => {
            setTab(txt)
          }}
        >
          {txt}
        </Btn>
      ))}
    </>
  )
}

const Tab = styled.div``
const Btn = styled.button`
  width: 33%;
  font-size: 20px;
  text-align: center;
  padding: 7px 10px;

  &.active {
    border-bottom: 7px solid #dee2e6;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`

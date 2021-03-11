import styled from 'styled-components';

const StretchingShoes =()=>{

  return (
    <S.Wrapper>
      <h1>Растяжка обуви</h1>
      <ol>
        <li><span>Растяжка голенищ в сапогах</span></li>
        <li><span>Растяжка союзки</span></li>
        <li><span>Растяжка косточки</span></li>
        <li><span>Растяжка подъема</span></li>
        <li><span>Увеличение в размере</span></li>
        <li><span>Ушивка голенища</span></li>
      </ol>
    </S.Wrapper>
    )
};

export default StretchingShoes;

const S = {
  Wrapper: styled.div`
  width: 80%;
  margin: 15px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  @media(max-width: 950px) {
    width: 100%;
    margin: 0 auto;
  }
   ol {
     display: flex;
     justify-content: space-around;
     flex-wrap: wrap;
   }
   ol > li {
    margin: .2rem 1rem;
    color: red;
    span {
      color: black;
    }
   }
  `
}
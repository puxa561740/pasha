import styled from 'styled-components';

const ServicePresentation = ()=>{

  return(
  <S.Wrapper>
    <S.WrapperTop>
      <h1>Ремонт</h1>
      <div>
        <h4>Обуви</h4>
        <h4>Сумок</h4>
      </div>
      <div>
        <h4>Зонтов</h4>
        <h4>Одежды</h4>
      </div>
    </S.WrapperTop>
    <S.WrapperBottom>
      <h1>Изготовление</h1>
      <div>
        <h4>Ключей</h4>
        <h4>Домофонных чипов</h4>
      </div>
    </S.WrapperBottom>
  </S.Wrapper>)
}

export default ServicePresentation;

const S = {
  Wrapper: styled.div`
    display: flex; 
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: absolute;
    color: #fff;
    width: 100%;
    height: 100%;
    @media(max-width: 1200px) {
      h1 {
        font-size: 1.5rem;
      }
      h4 {
        font-size: 1rem;
      }
    }
    

  `,
  WrapperTop: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    z-index: 111;
    h1 {
      background-color: red;
    }
    div {
      display: flex;
      h4 {
        background-color: black;
        margin: .8rem 2rem;
      } 
    }
  `,
  WrapperBottom: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 111;
    h1 {
      background-color: red;
    }
    div {
      display: flex;
      h4 {
        background-color: black;
        margin:0 1rem;
      } 
    }
  `
}
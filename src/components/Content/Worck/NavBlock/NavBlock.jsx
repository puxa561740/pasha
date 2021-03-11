import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavBlock =()=>{

  return (
    <S.Wrapper id='navBlock'>
      <h4>Наши услуги</h4>
      <S.WrapperLink>
        <div><NavLink to='/shoeRepair' className='glow-button'><p>Ремонт обуви</p></NavLink></div>
        <div><NavLink to='/productionOfKeys' className='glow-button'><p>Изготовление ключей</p></NavLink></div>
        <div><NavLink to='/chipMaking' className='glow-button'><p>Изготовление чипов</p></NavLink></div>
        <div><NavLink to='/knifeSharpening' className='glow-button'><p>Заточка ножей, ножниц</p></NavLink></div>
        <div><NavLink to='/repairOfBags' className='glow-button'><p>Ремонт сумок</p></NavLink></div>
        <div><NavLink to='/fittingsInstallation' className='glow-button'><p>Установка фурнитуры</p></NavLink></div>
        <div><NavLink to='/stretchingShoes' className='glow-button'><p>Растяжка обуви</p></NavLink></div>
      </S.WrapperLink>
    </S.Wrapper>
  )
};

export default NavBlock;

const S = {
  Wrapper: styled.div`
  margin: 15px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin: 10px 0;
  width: 25%;
  @media(max-width: 950px) {
    width: 100%;
  }
  `,
  WrapperLink: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    @media(max-width: 950px) {
    flex-direction: row;
    flex-wrap: wrap;
    /* align-items:; */
    justify-content: center;
  }
    .glow-button {
      text-decoration: none;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin: 5px 0;
      padding: 5px 15px;
      border-radius: 10px;
      box-shadow: 0 0 40px 40px #5a595a inset, 0 0 0 0 #5a595a;
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      color: white;
      transition: .15s ease-in-out;
      height: 5rem;
      width: 11rem;
      > p {
        display: flex;
        /* margin: 0 auto; */
        justify-content: center;
        align-items: center;
      }
      @media(max-width: 950px) {
        height: 3rem;
        width: 9rem;
        > p {
          font-size: .8rem;
        }
        
      } 
    } 
    .glow-button:hover {
      box-shadow: 0 0 10px 0 #5a595a inset, 0 0 10px 4px #5a595a;
      color: #252023;
    }
    div {
      @media(max-width: 950px) {
        margin: 0 5px;
      }
      /* width: 100%; */
      /* a {
        display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 100%;
          width: 100%;
          color: #fff;
          text-decoration: none;

      } */
    }
  `
}
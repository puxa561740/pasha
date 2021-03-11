import { useState } from 'react';
import styled from 'styled-components';

const ButtonUp = ()=>{

  const [disp, setDisp] =useState('none')
  
  
  window.onscroll = () => { scrollFunction() };

  const scrollFunction = ()=> {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          setDisp('block')
      } else {
          setDisp('none')
      }
  };
  
  const topFunction=() =>{
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
  };
  
  return (
    <S.Wrapper onClick={topFunction} title="Go to top" style={{'display': `${disp}`}}>Top
    </S.Wrapper>
  )
};

export default ButtonUp;

const S = {
  Wrapper: styled.button`
    position: fixed; 
    bottom: 20px; 
    right: 30px; 
    z-index: 99; 
    border: none; 
    outline: none; 
    background-color: red; 
    color: white; 
    cursor: pointer; 
    padding: 15px;
    border-radius: 10px;
    font-size: 18px; 
    :hover {
    background-color: #555;
    }
  `
}
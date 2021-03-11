import styled from 'styled-components';

const Footer =()=>{

  return(
    <S.Footer>
      <aside>
        <p>ИП Коренчук</p>
      </aside>
    </S.Footer>
  )
};

export default Footer;

const S = {
  Footer: styled.footer`
  height: 100px;
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  `
};
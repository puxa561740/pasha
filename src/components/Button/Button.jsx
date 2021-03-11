import styled from 'styled-components';

const Button =(props)=> {

  return <>
    <S.Button type="button" className="btn btn-outline-secondary">
      <p><a href={props.idGo||' ' } onClick={props.link}>{props.name}</a></p>
    </S.Button>
    </>
};

export default Button;

const S = {
  Button: styled.button`
  margin: 5px;
  text-decoration: none;
  display: inline-block;
  padding: 12px 40px;
  margin: 10px 20px;
  border-radius: 30px;
  background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 300;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
  transition: .5s;
  :hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }
   p {
     margin: 0 auto;
    font-size: 1.2rem;
    font-weight: 600;
   }
   a {
     display: block;
     width: 100%;
     height: 100%;
     z-index:1;
     text-decoration: none;
     color: white;
   }
  `
}
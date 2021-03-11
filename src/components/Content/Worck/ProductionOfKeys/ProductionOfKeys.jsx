import styled from 'styled-components';

const ProductionOfKeys = ()=>{

  return (
    <S.Wrapper>
      <h1>Изготовление ключей</h1>
      <ol>
        <li><span>Полукруглый (кнопочный замок)</span></li>
        <li><span>Плоский квартирный</span></li>
        <li><span>Плоский квартирный - иностранная программа (FAB,ASSA)</span></li>
        <li><span>Плоский квартирный - иностранная программа (многопазовый LOB)</span></li>
        <li><span>Вертикальный (луночный) простой (APECS, BAODEAN и т.п.)</span></li>
        <li><span>Вертикальный (луночный) сложный (KALE, CISA, ABUS и т.п.)</span></li>
        <li><span>Вертикальный (луночный) типа Master Lock, Mul-t-lock</span></li>
        <li><span>Двухсторонний плоский (мебельный)</span></li>
        <li><span>Флянец латунный (Эльбор, Гродно, САМ и т.п.)</span></li>
        <li><span>Флянец хромированный</span></li>
        <li><span>Флянец хромированный с пластиком</span></li>
        <li><span>Флянец отечественный (силумин, сталь, латунь)</span></li>
        <li><span>Четырёхсторонний (крестобразный)</span></li>
        <li><span>Шкаф декоративный</span></li>
        <li><span>Сейфовых ключе</span></li>
      </ol>
    </S.Wrapper>
    )
};

export default ProductionOfKeys;

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
import React from 'react';
import styled, {keyframes} from 'styled-components'
// import styles from './App.module.scss';

// const Root= styled.div`
//   ${props=>!props.show && css`
//   display:none;
//   `
// }
// `;

// const ShowDiv=styled.div`
//   display: block;
//   `;

//   const NoShowDiv=styled.div`
//   display:none;
//   `;

// const move=keyframes`
// from{
//   transform:translateX(0%);
// }
// to{
//   transform:translateY(100%);
// }
// `;
// const Img = styled.img`
// animation: ${move} 1s linear infinite;
// `;

// function App(){
//   // const show=true;
//   return (
//     <>
//       <Img src={"https://image.flaticon.com/icons/svg/1383/1383676.svg"} />


//     </>
//   );
// }

//const fade=keyframes`
//   from{
//     opacity:1;
//   }
//   to{
//     opacity:0;
//   }
// `;

// const appear=keyframes`
//   from{
//     opacity:0;
//   }
//   to{
//     opacity:1;
//   }
// `;

// const Img = styled.img`
// animation: ${fade?appear:fade} 1s linear infinite;
// `;

// function App(){
//   const fade=true;
//   return (
//     <>
//       <Img src={"https://image.flaticon.com/icons/svg/1383/1383676.svg"} />


//     </>
//   );
// }

const Wrapper=styled.div`
  padding:15px;
  display:flex;
  align-item:center;
  label{
    font-size:20px;
    margin-left:20px;
  }

  div{
    display:none;
  }
`;


const Input=styled.input`
  &~div{
    display: ${props=>(props.checked ? "block":"none")};
  
  }

`;

function App(){
  // const fade=true;
  const checked=false;
  return (
    <>
      <Wrapper>
        <Input type="checkbox" id="check1" checked={checked}/>
        <label htmlFor="check1">pls check</label>
      </Wrapper>

    </>
  );
}

export default App;
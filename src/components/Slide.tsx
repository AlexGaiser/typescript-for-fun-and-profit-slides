import React from 'react'
import logo from '../assets/ts_logo.png'


import {css, InterpolationWithTheme, SerializedStyles} from '@emotion/core'
type IProps = {
  bullets?: string[]
  subtitle?: string, 
  title: string,
  background?: string,
  styles?: SerializedStyles[],
  next?: Function,
  prev?: Function,
}


const Slide = (props: IProps) => {
  let propStyles:SerializedStyles[] = []

  console.log(props.background);
  const style = {
    container: css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #007acc;
    color: white;
    `,
    bulletContainer: css`
      max-width: 80%;
    
    
    `
  }
if(props.styles) {
  propStyles = props.styles
}
console.log('component mounted');

  const bulletList = !props.bullets ? [] : props.bullets.map(b=>{

    return <li>{b}</li>
  })
  
return (
<div css={[style.container, ...propStyles]} >
  <div css={{
    display: 'flex',
    flexDirection: "column",
    alignItems:'center'
  }} >  
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2> 
</div>


  <ul css={style.bulletContainer}>
  {bulletList}

  </ul>
  <div >


  </div>
 
</div>
)


   
}







export default Slide


import React from 'react'

import {css} from "@emotion/core"

type IProps = {
  image: string,
  title?: string,
}

const Meme = ({image, title}: IProps) => {
  console.log(image);
  const style= {
    image: css`
      height: 100%;
    
    `,
    container: css`
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
    `,
  }

  return (
    <div css={style.container} >
      <h1>{title}</h1>
      <img alt="meme" css={[style.image]} src={image} />
    </div>
  )
}

export default Meme



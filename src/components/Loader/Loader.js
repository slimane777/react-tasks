import React from 'react'
import { Wrapper } from './styles'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <Wrapper>
      <Loader
        type="Oval"
        color="#5554e7"
        height={30}
        width={30}
      />
    </Wrapper>
  )
}

export default Loading;
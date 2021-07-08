import React from 'react'
import { Wrapper } from './styles'
import ClearButton from '../Button/ClearButton';
import HeaderDate from '../Date/HeaderDate';

const Header = () => {
  return (
    <Wrapper>
      <HeaderDate />
      <ClearButton />
    </Wrapper>
  )
}

export default Header;
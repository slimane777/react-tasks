import React from 'react'
import moment from 'moment'
import { Wrapper, Day, Month, Row } from './styles'

const HeaderDate = () => {
  return (
    <Wrapper>
      <Row>
        <Day weight={'600'}>
            {moment(new Date()).format('dddd,')}
        </Day>
        <Day weight={'400'}>
          {moment(new Date()).format(' Do')}
        </Day>
      </Row>
      <Month>
        {moment(new Date()).format('MMMM')}
      </Month>
    </Wrapper>
  )
}

export default HeaderDate;
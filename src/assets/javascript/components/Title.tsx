import React, {Component} from 'react'
import styled from 'styled-components'

type Props = {
  align: string
}

export default class Title extends Component<Props> {
  render() {
    const {align, children} = this.props
    return (
      <Head align={align}>{children}</Head>
    )
  }
}

const getAlign = (props) => {
  if (props.align === 'center') {
    return 'center'
  } else if (props.align === 'right') {
    return 'right'
  } else {
    return 'left'
  }
}

const Head = styled.h1`
  margin: 24px 0;
  font-size: 20px;
  text-align: ${(props: {align: string}) => getAlign(props)};
`

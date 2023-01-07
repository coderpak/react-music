import React, { PureComponent } from 'react'

interface IProps {
  name: string
  age: number
}

interface IState {
  address: string
  tel: number
}

class DemoCpn extends PureComponent<IProps, IState> {
  state: IState = {
    address: '',
    tel: 0
  }
  render(): React.ReactNode {
    console.log(this.props.name)
    console.log(this.state.tel)
    return <div>asd</div>
  }
}

export default DemoCpn

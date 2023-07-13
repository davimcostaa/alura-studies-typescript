import React from 'react';
import style from './Botao.module.scss';


interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined
}

class Botao extends React.Component<Props> {
  render() {
    return (
      <button type={this.props.type} className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao;
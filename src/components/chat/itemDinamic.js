import React from 'react'
// import { default as Video } from 'react-html5video'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

//import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video'
export default class ItemDinamic extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      stateMensaje: ''
    }
  }

  componentWillMount () {
    if (this.props.mensaje) {
      let element = <p></p>
      if (this.props.mensaje.split('.').indexOf('jpg') !== -1) {
        element = <div className="containerSubItems"><img alt="img" src={this.props.mensaje}/></div>
      } else if (this.props.mensaje.split('.').indexOf('mp4') !== -1) {
        debugger
        element = <Video autoPlay loop muted
        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
          <source src={this.props.mensaje} type="video/mp4"/>
        </Video>
      } else if (this.props.mensaje.split('.').indexOf('m4v') !== -1) {
        element = <Video autoPlay loop muted
        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
          <source src={this.props.mensaje} type="video/mp4"/>
        </Video>
      } else if (this.props.mensaje.split('.').indexOf('gif') !== -1) {
        element = <div className="containerSubItems"><img alt="img" className="imgMessage" src={this.props.mensaje}/></div>
      } else if (this.props.mensaje.split('.').indexOf('png') !== -1) {
        debugger
        element = <div className="containerSubItems"><img alt="img" className="imgMessage" src={this.props.mensaje}/></div>
      } else if (this.props.mensaje.split('.').indexOf('jpeg') !== -1) {
        element = <div className="containerSubItems"><img alt="img" className="imgMessage" src={this.props.mensaje}/></div>
      } else {
        element = <p>{this.props.mensaje}</p>
      }
      this.setState({stateMensaje: element})
    }
  }

  render () {
    return <div className={this.props.estiloItem}>
        {this.state.stateMensaje}
    </div>
  }
}

ItemDinamic.defaultProps = {estiloItem: 'itemDinamic'}
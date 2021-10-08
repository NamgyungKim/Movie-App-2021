import React from "react";
import './Detail.css'

class Detail extends React.Component{
  componentDidMount(){
    const { location, history } = this.props
    console.log(location)
    if(location.state === undefined){
      history.push("/")
    }
  }
  render(){
    const { location } = this.props
    if(location.state) {
      console.log()
      return (
        <div className="detail">
          <img className="detail__poster" src={ location.state.poster } alt={ location.state.title } title={ location.state.title }/>
          <div className="detail__text">
            <p className="detail__title">{ location.state.title }</p>
            <span className="detail__year">year: <span>{ location.state.year }</span></span>
            <span className="detail__rating">rating: <span>{ location.state.rating }</span></span>
            <ul className="detail__genres">
              { location.state.genres.map((genre, index) => 
                <li key={ index } className="detail__genre">{genre}</li>
              )}
            </ul>
            <p className="detail__summary">{ location.state.summary }</p>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Detail
import React, { Component } from "react";
import Header from '../HomePage/Header/Header';
// import Data from '../data/LatesData.json';
import './List.css';
// import { withRouter } from '../utils/withRouter'; // Подключаем HOC


export default class List extends Component {
  render() {
    // const { id } = this.props.params; // Достаём id из URL
    // const anime = Data.find((item) => item.id === parseInt(id)); // Ищем аниме

    // if (!anime) {
    //   return <h1>Video not found</h1>;
    // }

    return (
      <div>
        <Header />
        {/* <div className="list">
          <div className="list__container">
            <div className="list__text">
              <h1>{anime.name}</h1>
              <p>{anime.description}</p>
            </div>
            <div>
               <video width="600" controls>
                <source src={anime.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video> 
            </div>
          </div>
          </div> */}
        </div>
    );
  }
}

// export default withRouter(List);

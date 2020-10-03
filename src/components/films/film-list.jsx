import React from 'react';
import './film-list.css';
class FilmList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        console.log('hello');
    }

    render() {
        return (
            <div className="film-list">Hello</div>
        )
    }
}

export default FilmList;
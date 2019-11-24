import React from 'react';
import './Commentaire.css';


class Commentaire extends React.Component {
    render() {
        return(
            <div className="commentaire">
                <a>{this.props.commentaire}</a>
                <button onClick={this.props.onClick}>
                    C'est super !👍
                </button>
            </div>
        );
    }
}
export default Commentaire;
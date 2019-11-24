import React from 'react';
import './Profile.css';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: ""
        }
    }

    handleClick = () => {
        if (this.state.bgColor === "red") {
            this.setState({
                bgColor: "white"
            })
        } else {
            this.setState({
                bgColor: "red"
            })
        }
    }

    render() {
        return(
            <div className="uProfile"
                 style={{backgroundColor: this.state.bgColor}}>
                <img src={this.props.photo}
                     alt="photo-profile"/>
                <div className="uProfiled">
                    <a>{this.props.prenom}</a>
                    <a>{this.props.nom}</a>
                    <a>{this.props.date_naissance}</a>
                </div>
                <div className="uProfiles">
                    <button id="style"
                            onClick={this.handleClick}>
                        Change color
                    </button>
                </div>
            </div>
        );
    }
}

export default Profile;
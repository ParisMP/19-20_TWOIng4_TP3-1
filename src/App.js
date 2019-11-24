import React from 'react';
import './App.css';
import Clement from './img/Boby.png';
import Eva from './img/Camille.png';
import Margaux from './img/Martine.png';
import Commentaire from "./components/Commentaire/Commentaire";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";

class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            profile : [
                {
                    photo: Eva,
                    prenom: "Eva",
                    nom: "Dreyfus",
                    date_naissance: "01/01/2000",
                    commentaire: "Viens on va prendre un verre",
                },
                {
                    photo: Margaux,
                    prenom: "Margaux",
                    nom: "Rohart",
                    date_naissance: "01/02/1999",
                    commentaire: "J'adore le chocolat️",
                },
                {
                    photo: Clement,
                    prenom: "Clement",
                    nom: "Lurati",
                    date_naissance: "01/03/1998",
                    commentaire: "salut je viens de Marseille",
                }
            ],
            show_profile: 0
        };
    }

    handleClick(i){
        this.setState({show_profile: i})
    }

    render() {
        const profiles = [];

        for (const [index, value] of this.state.profile.entries()) {
            profiles.push(<NavBar prenom={value.prenom}
                                  onClick={() => this.handleClick(index)}
            />)
        }

        return(
            <body className="Container">
            <header>
                <nav className="nav">
                    {profiles}
                </nav>
            </header>
            <main className="profile">
                <Profile
                    photo={this.state.profile[this.state.show_profile].photo}
                    prenom={this.state.profile[this.state.show_profile].prenom}
                    nom={this.state.profile[this.state.show_profile].nom}
                    date_naissance={this.state.profile[this.state.show_profile].date_naissance}
                />
                <Commentaire
                    commentaire={this.state.profile[this.state.show_profile].commentaire}/>
            </main>
            </body>
        );
    }
}

export default Container;

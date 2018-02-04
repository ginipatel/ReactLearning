import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {list, usersList} from './CustomData';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header logo={logo} title="Hello Javascript community"/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p> Register Form</p>
                <Form action="" title="This is coming from parent component."/>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        const {logo, title} = this.props;
        return (
            <header className="App-header">
                <h1 className="App-title">{title}</h1>
            </header>
        )
    }
}

class Form extends Component {
    constructor() {
        super();
        this.state = {
            list: usersList
        }
    }


    handleChange =(e) =>{
        console.log(e);
        const value = e.target.value;
        const fullList = usersList;
        console.log(fullList);
        console.log(value);
        const updatedList = fullList.filter(user => (user.name.toLowerCase()).substring(0, value.length) === value.toLowerCase() );
        console.log(updatedList)
        this.setState({
            list: updatedList
        });
    };

    render() {
        const {list} = this.state;
        return (
            <div>
               <input name="search"  onChange={this.handleChange}/>
                {list.map((user, index)=>(
                    <p key={index}>{user.name}</p>
                ))}
            </div>
        )
    }
}

//
//
// class Form extends Component {
//
//     this
// .
//     handleChange = this.handleChange.bind(this);
//
//     handleChange(e) {
//
//     }
//
//     render() {
//         return (
//             <form action="">
//                 <label>
//                     Name :
//                     <input type="text" onChange={this.handleChange}/>
//                 </label>
//
//                 <label htmlFor="">
//                     Email :
//                     <input type="text"/>
//                 </label>
//
//                 <label htmlFor="">
//                     Password :
//                     <input type="password"/>
//                 </label>
//             </form>
//
//         )
//     }
//
// }


export default App;

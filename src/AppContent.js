import React, { Component } from 'react';
import './AppContent.css';
import BookForm from './BookForm';
import BookList from './BookList';
import {HashRouter as Router, Link, Route} from 'react-router-dom';

const Home = () => {
    return(
    <div>
        <h3> Book Store Application </h3>
        <p>
            Powered By React!
        </p>
    </div>);
}


class AppContent extends Component {

    state = {
        "books":[
            {
                "id":0,
                "genre":"Fiction",
                "bookTitle":"The Invisible Man",
                "author":"H.G.Well",
                "bookImg":"./images/fiction/0.jpg",
                "description":"Having devoted his studies to optics and refraction, an impulsive scientist named Griffin has rendered himself invisible. Unable to reverse the effects, his struggle to survive grows desperate until he realizes that there are benefits to living out of the public eye. Increasingly isolated, he soon spirals into a life of crime and degenerates into madness. He can’t see that he has become his own worst enemy.Exploring the loss of identity and the willful disappearance of conscience and morality, H. G. Wells crafted one of his most suspenseful and cautionary tales, which continues to intrigue to this day."
            },
            {
                "id":1,
                "genre":"Fiction",
                "author":"Jules Verne",
                "bookTitle":"Journey to the Center of the Earth",
                "bookImg":"./images/fiction/1.jpg",
                "description":"A sixteenth-century cryptogram spurs modern geologist Otto Liedenbrock to embark on the most remarkable human quest ever taken. With his nephew and guide, he leads the descent from a dormant Icelandic volcano into the unexplored realm beneath their feet. There, a vast subterranean ocean, prehistoric creatures, and natural phenomena are but a few of the wonders hidden from all but the boldest eyes." 
            },
            {
                "id":2,
                "genre":"Fiction",
                "author":"Stephen Hawking",
                "bookTitle":"The Theory Of Everything",
                "bookImg":"./images/fiction/2.jpg",
                "description":"Hawking begins with a history of ideas about the universe, from Aristotle’s determination that the Earth is round to Hubble’s discovery, over 2000 years later, that the universe is expanding. Using that as a launching pad, he explores the reaches of modern physics, including theories on the origin of the universe (e.g., the big bang), the nature of black holes, and spacetime."      },
            {
                "id":3,
                "genre":"Fiction",
                "author":"Stephen Hawking",
                "bookTitle":"A Brief History Of Time",
                "bookImg":"./images/fiction/3.jpg",
                "description":"In A Brief History of Time, Hawking writes in non-technical terms about the structure, origin, development and eventual fate of the Universe, which is the object of study of astronomy and modern physics. He talks about basic concepts like space and time, basic building blocks that make up the Universe (such as quarks) and the fundamental forces that govern it (such as gravity). He writes about cosmological phenomena such as the Big Bang and black holes. He discusses two major theories, general relativity and quantum mechanics, that modern scientists use to describe the Universe. Finally, he talks about the search for a unifying theory that describes everything in the Universe in a coherent manner."
            },
            {
                "id":4,
                "genre":"Fiction",
                "author":"Yuval Noah Harari",
                "bookTitle":"Homo Deus, The History Of Tomorrow",
                "bookImg":"./images/fiction/4.jpg",
                "description":"A Brief History of Tomorrow examines what might happen to the world when old myths are coupled with new godlike technologies, such as artificial intelligence and genetic engineering."
            },
            {
                "id":5,
                "genre":"Novel",
                "author":"Harper Lee",
                "bookTitle":"To Kill a MockingBird",
                "bookImg":"./images/novel/0.jpg",
                "description": "The story, told by the six-year-old Jean Louise Finch, takes place during three years (1933–35) of the Great Depression in the fictional -tired old town- of Maycomb, Alabama, the seat of Maycomb County. Jean Louise Finch, nicknamed Scout, lives with her older brother Jeremy, nicknamed Jem, and their widowed father Atticus, a middle-aged lawyer. Jem and Scout befriend a boy named Dill, who visits Maycomb to stay with his aunt each summer. " 
             }
        ]
    }

    addBook = (book) => {
        this.setState( {"books": this.state.books.unshift(book)});
    }

    render() {
        return (
            <Router>
                <div className='app-content'>
                    <div className="container">
                        <h1 className="alert alert-info">Add New Books</h1>
                        <div className="row"> 
                            <div className="col-md-4"> 
                            <ul className="list-group">
                                <li className="list-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="list-item">
                                    <Link to="/add-new-book">Add New Book</Link>
                                </li>
                                <li className="list-item">
                                    <Link to="/view-all-book">View All Book</Link>
                                </li>
                            </ul>
                            </div>
                            <div className="col-md-8"> 
                                <Route path="/" exact={true} component={Home}/>
                                <Route path="/add-new-book"  component={BookForm}/>
                                <Route path="/view-all-book" render = {(routeProps) => (<BookList {...routeProps} Books={this.state.books}/>)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
            
        )
    }
}
export default AppContent;

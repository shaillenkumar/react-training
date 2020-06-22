import React, { Component } from 'react'

export default class BookForm extends Component {
    addBook = (event) => {
        console.log("Adding Book!");
        const name = this.refs.name.value;
        const author = this.refs.author.value;
        const genre = this.refs.genre.value;
        const image = this.refs.image.value;

        const b = {name, author, genre, image};
        console.log(b);


        this.refs.name.value="";
        this.refs.author.value="";
        this.refs.genre.value="";
        this.refs.image.value="";

        event.preventDefault();


    }


    render() {
        return (
            <div>
                <form className="form" onSubmit={this.addBook}>
                    <div className ="form-group row">
                        <label htmlFor="" className="control-label col-md4">
                            Book:
                        </label>
                        <div className="col-md-8">
                            <input ref="name" type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className ="form-group row">
                        <label htmlFor="author" className="control-label col-md4">
                            Author:
                        </label>
                        <div className="col-md-8">
                            <input ref="author"  type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className ="form-group row">
                        <label htmlFor="" className="control-label col-md4">
                            Genre:
                        </label>
                        <div className="col-md-8">
                            <input ref="genre" type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className ="form-group row">
                        <label htmlFor="" className="control-label col-md4">
                            Image:
                        </label>
                        <div className="col-md-8">
                            <input ref="image" type="text" className="form-control"/>
                        </div>
                    </div>
                    <button className="btn btn-primary"> Save</button>
                </form>
                
            </div>
        )
    }
}

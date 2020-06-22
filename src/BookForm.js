import React, { Component } from 'react'

export default class BookForm extends Component {
    state = {
        title:'',
        author:'',
        genre:'',
        image:'',


        formErrors: {
            title: 'Name is required',
            author: 'Author is required',
            genre: 'Genre is required',
            image: 'Image is required'
        }
    }
//-------------------------------------------------
    //ON SUBMIT Validation Step-3
    addBook = (event) => {
        event.preventDefault(); 

        let { formErrors } = this.state;

        if (this.validateForm(formErrors)) {
            alert('All is well!');
        }

        let errorMessages = Object.values(formErrors).map((err, index) => err.length === 0 ? null : <li key={index}>{err}</li>)
        this.setState({ errorMessages });

    }

    validateForm = (formErrors) => {
        let valid = true;
        Object.values(formErrors).forEach(err => valid = valid && err.length === 0)
        return valid;
    }
//-------------------------------------------------
    formHandler = (event) => {
        let { name, value } = event.target;
        let { formErrors } = this.state;

        switch(name) {
            case 'title':
                if (!value || value.length === 0) {
                    formErrors.title = 'Name is required';
                }
                else if (value.length < 3 || value.length > 20) {
                    formErrors.title = 'Name must be between 3 to 20 letters';
                }
                else {
                    formErrors.title = '';
                }
                break;
           
            case 'author':
                if(!value || value.length === 0){
                    formErrors.author = 'Author is required';
                }
                else if(value.length < 3 || value.length >20 ){
                    formErrors.author = 'Author must be between 3 and 20 letters';
                }else{
                    formErrors.author = '';

                }
                break;
            case 'genre':
                if(!value || value.length === 0){
                    formErrors.genre = 'Genre is required';
                }
                else if(value.length < 3 || value.length >20 ){
                    formErrors.genre = 'Genre must be between 3 and 20 letters';
                }else{
                    formErrors.genre = '';
                }
                break;
            case 'image':
                if(!value || value.length === 0){
                    formErrors.image = 'Image is required';
                }
                else if(value.length < 3 || value.length >20 ){
                    formErrors.image = 'Image must be between 3 and 20 letters';
                }else{
                    formErrors.image = '';

                }
                break;
            default:
                break;
        }
        this.setState({ [name]: value, formErrors });             
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    {/*<p>{JSON.stringify(this.state)}</p>*/}
                    <form className="form" onSubmit={this.addBook}>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-4">
                                Name:
                            </label>
                            <div className="col-md-8">
                                <input value={this.state.title} onChange={this.formHandler} type="text" name="title" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-4">
                                Author:
                            </label>
                            <div className="col-md-8">
                                <input value={this.state.author} onChange={this.formHandler} type="text" name="author" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-4">
                                Genre:
                            </label>
                            <div className="col-md-8">
                                <input value={this.state.genre} onChange={this.formHandler} type="text" name="genre" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-4">
                                Image:
                            </label>
                            <div className="col-md-8">
                                <input value={this.state.image} onChange={this.formHandler} type="text" name="image" className="form-control"/>
                            </div>
                        </div>


                        {/* Step-3 */}
                        <button className="btn btn-primary">Save data</button>
                    </form> 

                        {/* Step-4 */}
                    <ul>
                            {this.state.errorMessages}
                    </ul>
            </div>
        </div>
        )
    }
}

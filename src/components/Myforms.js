import React, { Component } from 'react'

export class Myforms extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            formErrors:{email:'',password:''},
            emailValid:false,
            passwordValid:false,
            formValid:false
        };
    }
    handleInput=(e)=>{
        let {name,value}=e.target;
        this.setState({[name]:value},
        ()=>{ this.validateField(name,value)});
    }
    formSubmit=(e)=>{
        e.preventDefault();//to hold the form 
        console.log(this.state);
    }
    validateField(fieldname,value){
       let valiErrors=this.state.formErrors;
       let emailValid=this.state.emailValid;
       let passwordValid=this.state.passwordValid;
       switch(fieldname){
           case 'email' :
               emailValid=value.match(/^[a-zA-Z0-9-_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/);
               valiErrors.email=emailValid?'':'Enter correct email address';
               break;
           case 'password' : 
           passwordValid=value.length>=6;
            valiErrors.password=passwordValid?'':'Is to short , minimum 6 character long';
       }
       this.setState({formErrors:valiErrors,emailValid:emailValid,passwordValid:passwordValid},this.validateForm)
    }
    validateForm(){
      this.setState({formValid:this.state.emailValid && this.state.passwordValid});
    }
    render() {
        return (
            <div className="container">
                <h2> Login</h2>
                <form onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label> Email</label>
                        <input type="text" name="email" className="form-control" onChange={this.handleInput}/>
                        {this.state.formErrors.email.length>0 && 
                        <div className="alert alert-danger">
                            {this.state.formErrors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label> Password</label>
                        <input type="password" name="password" className="form-control" onChange={this.handleInput}/>
                        {this.state.formErrors.password.length>0 && 
                        <div className="alert alert-danger">
                            {this.state.formErrors.password}</div>}
                    </div>
                    <input type="submit" value="Submit" className="btn btn-success" disabled={!this.state.formValid}/>
                </form>
            </div>
        )
    }
}

export default Myforms

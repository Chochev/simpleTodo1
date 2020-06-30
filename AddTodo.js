import React, { Component } from 'react'
//class based component , because we need some state here
class AddTodo extends Component {
    state = {
        // in the beggining we have content prop with empty string
     content: ''
      }
      //handle's function for Change and Submit and the event (e)object
      //here we update the prop
      handleChange = (e) => {
       this.setState({
           content: e.target.value
       })
      }
      //in the Submit firstval we prevent the Default when the page reload
      //
      handleSubmit = (e) => {
          e.preventDefault();
          //i passed the state content here
          this.props.addTodo(this.state);
          //empty the field and after that on write the value in the input field
          // in that manner the input field is = to the state
          this.setState({
              content : ''
          })
      }
    render() {
        return(
        <div>
          {/* reference the submit handler */}
         <form onSubmit={this.handleSubmit}> 
         <label>Add new todo</label>
         {/* input field whit onChange */}
         <input type="text" onChange={this.handleChange} value={this.state.content}/>
         </form>
        </div>
        )
    }
}

export default AddTodo
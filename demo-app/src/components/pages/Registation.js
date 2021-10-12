
import React from 'react'
import apis from '../../Api';
export default class Registation extends React.Component {

constructor(props){
  super(props);
  this.state={
    name:"",
    email:"",
    mobile:"",
    password:"",
  }
}
handleChangeInputName = async event => {
  const name = event.target.value
  this.setState({ name })
  
}
handleChangeInputEmail = async event => {
  const email = event.target.value
  this.setState({ email })
  
}
handleChangeInputMobile = async event => {
  const mobile = event.target.value
  this.setState({ mobile })
}
handleChangeInputPassword = async event => {
  const password = event.target.value
  this.setState({ password })
}

handleIncludeinsertData = async () => {
  const { name, email, mobile,password } = this.state

  const payload = { name, email, mobile,password }

  await apis.insertData(payload).then(res => {
      window.alert(`data inserted successfully`)
      this.setState({
          name: '',
          email: '',
          mobile: '',
          password: '',
      })
  })
}

render(){
  const { name, email, mobile,password } = this.state
    return (
        <div>
<form>
  Name: <input type="text" value={name}  onChange={this.handleChangeInputName} /><br></br>
  Email: <input type="text" value={email}  onChange={this.handleChangeInputEmail}/><br></br>
   Mobile:<input type="text" value={mobile}  onChange={this.handleChangeInputMobile}/><br></br>
   Password:<input type="text" value={password}  onChange={this.handleChangeInputPassword}/><br></br>
  <button onClick={this.handleIncludeinsertData}>Submit</button><br></br>
</form> 
        </div>
    )
}
}
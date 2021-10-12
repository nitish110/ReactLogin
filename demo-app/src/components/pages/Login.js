import React from 'react'
import apis from '../../Api'


export default class Login extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         users: [],
    //         columns: [],
    //         isLoading: false,
    //         email:"",
    //         password:""
    //     }
    // }

    // handleChangeInputMobile = async event => {
    //     const email = event.target.value
    //     this.setState({ email})
    //     alert(email)
    //   }
    //   handleChangeInputPassword = async event => {
    //     const password = event.target.value
    //     this.setState({ password })
    //     alert(password)
    //   }





    // componentDidMount = async () => {
    //     this.setState({ isLoading: true })

    //     await apis.getAllData().then(UserData => {
    //         this.setState({
    //             users: UserData.data.data,
    //             isLoading: false,
    //         })
    //     })

        
    // }
    render(){
      
       // const {users}=this.state
        //console.log('TCL: getAllData -> render -> users', users)
        //console.log(this.state.users)
        
             
    return(
      
        
          // users.map(users=> {
          //     return(
          //       <div>
                 
          //         <span><strong>{users.name}</strong></span>
          //         <span>{users.email}</span>
          //         <span> {users.mobile}</span>
          //         <span> {users.password}</span>
          //         <br/><br/>
                  
                  
          //       </div>
          //     )
              
          //   })
          <>

          <Abc/>
          </>

            
       




      
    ); 
         }
}
class Abc extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            columns: [],
            isLoading: false,
            email:"",
            password:""
        }
    }

    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email})
       // alert(email)
      }
      handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
       // alert(password)
      }

      handleValidate=async()=>{
    
     const d1=this.state.email;
     const d2=this.state.password;
     this.state.users.map(users=> {
         if(users.email===d1 && users.password===d2)
         {
             alert("login success")
         }
         else{
             alert("either user or password wrong")
         }
     });


      }




    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await apis.getAllData().then(UserData => {
            this.setState({
                users: UserData.data.data,
                isLoading: false,
            })
        })

        
    }
    render(){
      

    return(
        
    <>
    <form>
  
       UserId: <input type="text" value={this.handleChangeInputEmail} /><br></br>
       Password:<input type="text" value={this.handleChangeInputPassword}  /><br></br>

      <button onClick={this.handleValidate}>Submit</button><br></br>

  </form>
    </>)
}
}
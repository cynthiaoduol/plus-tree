import styles from "../styles/Signup.module.css"

const Signup=()=>{
    return(
        <div>
          <div className={styles.signup}>
            <div className={styles.input}>
            <input type="text" placeholder="First Name" required/>
            <input type="text" placeholder="Last Name" required/>
            <input type="text" placeholder="UserName" required/>
            <input type="text" placeholder="Email Address" required/>
            <input type="text" placeholder="Password" required/>
            <input type="text" placeholder="Confirm Password" reqired/>

            </div>
          </div>
        </div>
    )
   
}
export default Signup 
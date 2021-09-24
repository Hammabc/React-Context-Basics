import { UserContext } from "./App";

function User() {
    return (
      <UserContext.Consumer>
        {value => <h1>{value}</h1>} 
        {/* prints: Hammad Hussain */}
      </UserContext.Consumer>
    )
  }
  export default User;

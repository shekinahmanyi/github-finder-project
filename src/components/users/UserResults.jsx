import { useContext, useEffect } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {

  const {users, loading, fetchUsers} = useContext(GithubContext)
  
  useEffect(() => {// Use the useEffect hook to fetch the users from GitHub
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  if (!loading) {
    
    // If the loading state is false, render the users
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner/>;
  }
}

export default UserResults;

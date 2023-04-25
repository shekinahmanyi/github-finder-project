import { useEffect, useState } from "react";

function UserResults() {
  const [users, setUsers] = useState([]); // Create a state variable to store the users
  const [loading, setLoading] = useState(true); // Create a state variable to store the loading state

  useEffect(() => {// Use the useEffect hook to fetch the users from GitHub
    fetchUsers();
  }, []);

  // Create a function to fetch the users from GitHub
  const fetchUsers = async () => {
      // Make a request to the GitHub API
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
        // Set the authorization header
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json(); // Parse the response body as JSON
    setUsers(data);  // Set the users state variable to the data
    setLoading(false); // Set the loading state variable to false
  };


  if (!loading) { // If the loading state is false, render the users
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <h3>{user.login}</h3>
        ))}
      </div>
    );
  } else {
    return <h3>Loading......</h3>;
  }
}

export default UserResults;

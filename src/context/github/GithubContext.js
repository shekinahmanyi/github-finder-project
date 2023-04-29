import { createContext } from "react";
import { useState } from "react";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Create a state variable to store the users
  const [loading, setLoading] = useState(true); // Create a state variable to store the loading state

  // eslint-disable-next-line no-unused-vars
  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json(); // Parse the response body as JSON
    setUsers(data); // Set the users state variable to the data
    setLoading(false); // Set the loading state variable to false
  };

  return <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
}

export default GithubContext

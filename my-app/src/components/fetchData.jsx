import { useEffect, useState } from "react"


const FetchData = () => {
 
    const [usersList, setUsersList] = useState([]);

    async function fetchAllUsers(){
        try {
            const apiResponse = await fetch('https://dummyjson.com/users')
            const results = await apiResponse.json();

            if(results?.users){
                setUsersList(results?.users)
            }else{
                setUsersList([]);
            }
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(usersList);

    const fetchUsersData = () => {
        fetchAllUsers()
    }


    // useEffect(() => {
    //     fetchAllUsers();
    // },[])  //[] empty array means it will render only one time
                // no dependency passed means runs on every render
                //[prosp, state] props or state value whenever changes it renders 
  return (
 
    <>
        <h1>All users Lists</h1>
        <button onClick={fetchUsersData}>Fetch Users</button>
        <ul>
            {
                usersList && usersList.length > 0 ?
                usersList.map((userItems) => <li key={userItems?.id}>
                    <p> {userItems?.firstName} {userItems?.lastName} </p>
                     </li>) : <h1> No users found, Please try again</h1>
            }
        </ul>
    </>
  )
}

export default FetchData;
import axios from 'axios'

const URL="http://localhost:30001/usersData"

export const getAllUsers = async (id = '',usersData) => {
    try {
      // Use Axios to make a GET request to the specified URL
      return await axios.get(`${URL}/${id}`,usersData);
    }
     catch (error) {
      // If an error occurs during the GET request
      // error occurred during the user creation process.
      // to print an error message to the console.
      console.error('Error fetching users:', error);
        // Throw the error received; if it's a network error, throw a custom Error
      throw error.response ? error.response.data : new Error('Network error');
      //Condition: error.response---property. In the context of Axios, this property is present if the error is an HTTP error response.
      //if True: error.response.data--- contains detailed information or message from the server about what went wrong (e.g., validation errors, server-side error messages)
      //If False: new Error('Network error')---indicates a network error or some issue preventing the HTTP request from being completed (e.g., no internet connection, timeout, DNS issues). In this case, a new Error object is thrown with a message 'Network error'.
    }
  };

export const postUsers= async(usersData) =>{
    try{
        return await axios.post(`${URL}`, usersData);
    }
    catch(error){
        console.error('Error creating user:', error);
        throw error.response ? error.response.data : new Error("Network error");
    }
}

export const putUsers = async(id,usersData) =>{
    try{
        return await axios.put(`${URL},${id}`,usersData);
    }
    catch(error){
        console.error("Error updating user:",error);
        throw error.response ? error.response.data : new Error("Network error");
    }
}

export const deleteUsers = async(id,usersData) =>{
    try{
        return await axios.delete(`${URL},${id}`,usersData);
    }
    catch(error){
        console.error("Error deleting user:",error);
        throw error.response ? error.response.data : new Error("Network error"); 
    }

}
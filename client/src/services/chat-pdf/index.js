import axios from 'axios';

const endpoint = `http://localhost:8000/chat-pdf`

export const fetchChat = async (params) => {
  try {
    const id = localStorage.getItem("fileId");
    const response = await axios.post(endpoint + `/${id}`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const responseData = response.data;

    return responseData;
  } catch (error) {
    console.error('Error fetching chat:', error);
    throw error;
  }
};

export const uploadFile = async (formData) => {
  try {
    const response = await axios.post(endpoint + `/`, formData);
    localStorage.setItem("fileId", response.data);
  } catch (error) {
    console.error(error);
  }
};
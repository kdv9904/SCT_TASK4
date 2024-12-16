import axios from "axios";
const baseUrl="http://localhost:8000"
const getAllList = (setList) => {
  axios.get(baseUrl)
      .then(({ data }) => {
          console.log('data -->', data);
          if (Array.isArray(data)) {
              setList(data);
          } else {
              console.error('Expected an array but received:', data);
              setList([]);
          }
      })
      .catch((err) => {
          console.error('Error fetching list:', err);
          setList([]);
      });
};

const addList = (text, setText, setList) => {
  axios.post(`${baseUrl}/save`, { text })
      .then((response) => {
          console.log('Add response:', response);
          setText("");
          getAllList(setList);
      })
      .catch((error) => {
          console.error('Error adding list:', error);
      });
};

const updateList = (listId, text, setList, setText, setIsUpdating) => {
  axios.post(`${baseUrl}/update`, { _id: listId, text })
      .then((response) => {
          console.log('Update response:', response);
          setText("");
          getAllList(setList);
          setIsUpdating(false);
      })
      .catch((err) => {
          console.error('Error updating list:', err);
      });
};

const deleteList = (_id, setList) => {
  axios.post(`${baseUrl}/delete`, { _id})
      .then((response) => {
          console.log('Delete response:', response);
          getAllList(setList);
      })
      .catch((err) => {
          console.error('Error deleting list:', err);
      });
};
export {getAllList,addList,updateList,deleteList};
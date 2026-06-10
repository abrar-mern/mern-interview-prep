// GET REQUEST
async function getTodo() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/broken-endpoint-404",
    );
    if (!response.ok) {
      throw new Error("Network Error");
    }
    console.log(response);
  } catch (error) {
    console.log("Automatically error is triggered using axios..");
    console.log(error.response.status);
  }
}

// getTodo()

// POST REQUEST
async function createTodo() {
  const newPayload = {
    id: 1,
    subject: "Javascript Series",
    price: 599,
  };
  const configHeaders = {
    headers: {
      "Content-Type": "application/json",
     ' Authorization': "Bearer my-secret-key-123",
      "Custom-Heder": "JS SERIES",
    },
  };
  try { 
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      newPayload,
      configHeaders,
    );
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

createTodo()
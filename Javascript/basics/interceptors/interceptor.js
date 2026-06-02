// const originalFetch = window.fetch;

// window.requestInterceptor = (args) => {
//     args[0] = args[0] + '2';
//     return args;
// }

// window.responseInterceptor = async (response) => {
//     return await response.json();
// }

// window.fetch = async (...args) => {
//     args = await requestInterceptor(args);
//     let response = await originalFetch(...args); // response. - status -200
//     response = await responseInterceptor(response);
//     return response;
// }
// fetch('https://jsonplaceholder.typicode.com/todos/')
// .then((data) => console.log(data))
// .catch((err) => console.log(err))
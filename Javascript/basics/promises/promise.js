const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise is consumed");
});

promiseOne.catch(() => {
  console.log("Error Identified");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Promise 2 is executed");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Promise2 is consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      name: "chai",
      email: "chai@google.com",
    });
    console.log("Welcome to Chai");
  }, 3000);
});

promiseThree.then(function (data) {
  console.log(data);
  console.log("Promise 3 is in resolved state");
});

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
        username: "Abrar",
        password: "Abk123",
      });
    } else {
      reject("Something went wrong");
    }
  }, 5000);
});

promisefour
  .then((data) => {
    console.log(data);
    return data.username;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally((final) => {
    console.log('The promise is either resolved or rejected')
  })

// Fetch all the users

async function getAllUsers() {
    try{
        const response = await fetch('https://json-placeholder.mock.beeceptor.com/users');
        const data = await response.json()
        console.log(data)
        data.forEach(user => {
            console.log(user.email  )
        });
    }
    catch(error){
        console.log(error)
    }
}
getAllUsers()
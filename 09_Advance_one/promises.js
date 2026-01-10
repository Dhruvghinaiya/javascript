const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("promise consume");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 ");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 Resolve");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "dhruv", email: "dhruv@gail.com", city: "vadodara" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "dhruv", age: 22 });
    } else {
      reject("ERROR: Something Went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => console.log(userName))
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Promise is resolve either rejecte"));

const promiseFIve = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "dhruv", city: "vadodara" });
    } else {
      reject("ERROR: Js SOmething West Wrong");
    }
  }, 1000);
});

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFIve;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

const consumePromiseFive = async () => {
  try {
    const response = await promiseFIve;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

consumePromiseFive();

// const getAllUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response;
  })
  .then((user) => console.log(user))
  .catch((error) => console.log(error));

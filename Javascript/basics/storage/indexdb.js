let openRequest = indexedDB.open('collegeDB',1);
console.log(openRequest);

openRequest.onsuccess = (e) => {
    console.log('On Success');
    let db = openRequest.result;
    let transaction = db.transaction("students","readwrite");
    let storeObject = transaction.objectStore("students");

    // Add Values
    // let request = storeObject.put({
    //     id : "3",
    //     name : "Rahul",
    //     email : "rahul@gmail.com"
    // })

    // Get Values
    // let request = storeObject.getAll(IDBKeyRange.bound("2","3"))

    // Delete 
    let request = storeObject.delete("3");


    request.onsuccess = (e) => {
        console.log(e.target.result)
    }

    request.onerror = (e) => {
        console.log(e)
    }
}

openRequest.onupgradeneeded = (e) => {
    console.log('On Upgrade');
    let db = openRequest.result;
    if(!db.objectStoreNames.contains("students")){
        let studentStore = db.createObjectStore("students",{keyPath:"id"});
        studentStore.createIndex("name","name",{unique:false})
        studentStore.createIndex("email","email",{unique:true})
    }
}

openRequest.onerror = (e) => {
    console.log('Error',e);
}
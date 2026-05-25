let openRequest = indexedDB.open('collegeDB',1);
console.log(openRequest);

// Onsuccess method
openRequest.onsuccess = (e) => {
    console.log('Form Success')
}

// onupgradeneeded method
openRequest.onupgradeneeded = (e) => {
    console.log('Upgrade Needed')
    let db = openRequest.result;
    if(!db.objectStoreNames.contains('students')){
        let request = db.createObjectStore("students",{keyPath: 'id'});
        request.createIndex("name", "name", {unique:false});
        request.createIndex("email", "email", {unique:true});
    }
}

// onerror method
openRequest.onerror = (e) => {
    console.log('Error Successfully', e)
}


// Notes : -

// 1. We have to open the database using .open()

// 2. We will assign the object - result to openRequest
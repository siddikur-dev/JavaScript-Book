## **🔹 JSON (JavaScript Object Notation) All About**  

✅ **JSON (JavaScript Object Notation)** হলো **lightweight data format**, যা **data store & transfer** করতে ব্যবহৃত হয়।  
✅ এটি মূলত **text-based format**, যা **JavaScript Object-এর মতো দেখতে**, কিন্তু **stringified**।  
✅ এটি **API request/response**, **configuration files**, **database storage** ইত্যাদির জন্য বহুল ব্যবহৃত হয়।  

---

## **🔹 JSON Syntax (সংগঠন)**
👉 JSON-এর মূলত দুইটি structure থাকে:  
1️⃣ **Object (`{ key: value }` format)**  
2️⃣ **Array (`[ { key: value }, { key: value } ]` format)**  

**✅ JSON Object Example**
```json
{
    "name": "John Doe",
    "age": 25,
    "isStudent": false,
    "skills": ["HTML", "CSS", "JavaScript"]
}
```

**✅ JSON Array Example**
```json
[
    {
        "id": 1,
        "name": "Alice",
        "age": 22
    },
    {
        "id": 2,
        "name": "Bob",
        "age": 30
    }
]
```

---

## **🔹 JSON এর সাথে JavaScript এ কাজ করা**
JavaScript এ JSON-এর সাথে কাজ করতে **`JSON.stringify()`** এবং **`JSON.parse()`** ব্যবহার করা হয়।

### **✅ `JSON.stringify()` (Object → JSON String)**
👉 এটি একটি JavaScript Object-কে **JSON format-এর string**-এ রূপান্তর করে।  
```js
const user = { name: "John", age: 25, isStudent: false };
const jsonString = JSON.stringify(user);
console.log(jsonString); 
// Output: '{"name":"John","age":25,"isStudent":false}'
```
---

### **✅ `JSON.parse()` (JSON String → Object)**
👉 এটি **JSON format-এর string কে JavaScript Object-এ** রূপান্তর করে।  
```js
const jsonString = '{"name":"John","age":25,"isStudent":false}';
const user = JSON.parse(jsonString);
console.log(user.name); // Output: John
```
---

## **🔹 JSON Fetch API ব্যবহার করে Data লোড করা (Arrow Function)**
👉 নিচের কোডটি **API থেকে JSON data লোড করার জন্য** `fetch()` ব্যবহার করে।  
👉 এখানে **Arrow Function + `async/await`** ব্যবহার করা হয়েছে।  

```js
const fetchUsers = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

fetchUsers();
```
👉 এখানে `fetch()` দিয়ে API কল করা হয়েছে, **`await` দিয়ে response-এর জন্য অপেক্ষা করা হয়েছে, এবং `JSON.parse()` ছাড়াই `response.json()` দিয়ে JSON-কে object-এ কনভার্ট করা হয়েছে।**  

---

## **🔹 JSON Local Storage এ সংরক্ষণ ও পুনরুদ্ধার (Arrow Function)**
✅ **JSON data Local Storage-এ save ও retrieve করা যায়।**  
```js
// JSON Data Store (Arrow Function)
const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

// JSON Data Retrieve (Arrow Function)
const getUser = () => {
    let user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

// Example Usage
const user = { name: "Alice", age: 28 };
saveUser(user);

console.log(getUser()); // Output: { name: "Alice", age: 28 }
```
👉 **Local Storage-এ Object রাখার সময় `JSON.stringify()` ব্যবহার করতে হয়।  
👉 Data রিড করার সময় `JSON.parse()` ব্যবহার করে Object-এ রূপান্তর করতে হয়।**  

---

## **📌 সংক্ষেপে (JSON Summary)**
✔️ **JSON হল lightweight data format, যা API ও data transfer-এর জন্য ব্যবহৃত হয়।**  
✔️ **JavaScript-এর জন্য `JSON.stringify()` ও `JSON.parse()` মেইন দুটি মেথড।**  
✔️ **API থেকে JSON Data লোড করতে `fetch()` ও `response.json()` ব্যবহার করা হয়।**  
✔️ **Local Storage-এ data সংরক্ষণ ও পুনরুদ্ধারের জন্য JSON ব্যবহার করা হয়।**  

---
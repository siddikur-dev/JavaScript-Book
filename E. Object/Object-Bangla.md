# **🔥 JavaScript Object - সম্পূর্ণ গাইড (বাংলা ও বাস্তব উদাহরণ) 🚀**  

## **📌 Object কী?**  
🔹 **Object** হল JavaScript-এর একটি ডাটা টাইপ, যা **key-value pair** আকারে ডাটা সংরক্ষণ করে।  
🔹 এটি **properties** (গুণাবলী) এবং **methods** (ফাংশন) ধারণ করতে পারে।  
🔹 Array-এর মতো Object-ও **multiple data store** করতে পারে, কিন্তু এটি **index-এর পরিবর্তে key ব্যবহার করে**।  

---

## **📌 Object তৈরির নিয়ম (Syntax)**  
```javascript
let objectName = {
  key1: value1,
  key2: value2,
  key3: value3
};
```

✅ **Example: সাধারণ Object**  
```javascript
let person = {
  name: "Shihab",
  age: 25,
  profession: "Web Developer"
};
console.log(person);
```
**Output:**  
```
{ name: 'Shihab', age: 25, profession: 'Web Developer' }
```

---

## **📌 Object এর প্রপার্টি (Property) অ্যাক্সেস করার উপায়**
🔹 **২ভাবে Object-এর মান (value) পাওয়া যায়:**  
✅ **Dot Notation:** `object.property`  
✅ **Bracket Notation:** `object["property"]`  

```javascript
console.log(person.name);      // "Shihab"  (Dot Notation)
console.log(person["age"]);    // 25        (Bracket Notation)
```

---

## **📌 Object এর মধ্যে Function (Method) রাখা**
Object-এর মধ্যে **Function রাখা গেলে সেটাকে Method বলা হয়।**  

```javascript
let person = {
  name: "Shihab",
  age: 25,
  profession: "Web Developer",
  greet: function () {
    return `Hello, my name is ${this.name}!`;
  }
};

console.log(person.greet());
```
✅ **Output:**  
```
Hello, my name is Shihab!
```

🔹 **এই ক্ষেত্রে `this.name` মানে হলো person Object-এর `name` property।**  

---

## **📌 Object-এ নতুন Property যোগ করা ও পরিবর্তন করা**
✅ **নতুন Property যোগ করা:**  
```javascript
person.country = "Bangladesh";
console.log(person);
```

✅ **Property-এর মান পরিবর্তন করা:**  
```javascript
person.age = 30;
console.log(person.age);  // 30
```

✅ **Property মুছে ফেলা:**  
```javascript
delete person.profession;
console.log(person);
```

---

## **📌 Object Constructor দিয়ে Object তৈরি**
আমরা `new Object()` কন্সট্রাক্টর ব্যবহার করেও Object তৈরি করতে পারি।  

```javascript
let car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2022;

console.log(car);
```
✅ **Output:**  
```
{ brand: 'Toyota', model: 'Corolla', year: 2022 }
```

---

## **📌 Object Constructor Function দিয়ে একাধিক Object তৈরি**
```javascript
function Person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
}

let person1 = new Person("Shihab", 25, "Web Developer");
let person2 = new Person("Rahim", 30, "Software Engineer");

console.log(person1);
console.log(person2);
```
✅ **Output:**  
```
Person { name: 'Shihab', age: 25, profession: 'Web Developer' }
Person { name: 'Rahim', age: 30, profession: 'Software Engineer' }
```

---

## **📌 Object এর মধ্যে অন্য Object রাখা (Nested Object)**
```javascript
let student = {
  name: "Shihab",
  details: {
    age: 25,
    class: "Final Year",
    subjects: ["Math", "Physics", "Computer Science"]
  }
};

console.log(student.details.class);  // "Final Year"
console.log(student.details.subjects[1]);  // "Physics"
```

---

## **📌 Object-এর মধ্যে Loop চালানো (for...in Loop)**
`for...in` লুপ ব্যবহার করে আমরা Object-এর **সকল প্রপার্টি অ্যাক্সেস করতে পারি**।  

```javascript
let person = {
  name: "Shihab",
  age: 25,
  profession: "Web Developer"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```
✅ **Output:**  
```
name: Shihab
age: 25
profession: Web Developer
```

---

## **📌 Object থেকে কেবল Keys বা Values বের করা**
✅ **শুধু Keys বের করা:**  
```javascript
console.log(Object.keys(person)); 
// ["name", "age", "profession"]
```

✅ **শুধু Values বের করা:**  
```javascript
console.log(Object.values(person)); 
// ["Shihab", 25, "Web Developer"]
```

✅ **Keys ও Values একসাথে বের করা:**  
```javascript
console.log(Object.entries(person)); 
// [["name", "Shihab"], ["age", 25], ["profession", "Web Developer"]]
```

---

## **📌 Object Spread Operator (`...`)**
✅ **Object Copy করা:**  
```javascript
let newPerson = { ...person };
console.log(newPerson);
```

✅ **দুটি Object একসাথে মিশানো:**  
```javascript
let additionalInfo = { country: "Bangladesh", hobby: "Coding" };
let fullPerson = { ...person, ...additionalInfo };

console.log(fullPerson);
```
✅ **Output:**  
```
{
  name: 'Shihab',
  age: 25,
  profession: 'Web Developer',
  country: 'Bangladesh',
  hobby: 'Coding'
}
```

---

## **📌 Object Destructuring (Object থেকে নির্দিষ্ট মান বের করা)**
```javascript
let person = {
  name: "Shihab",
  age: 25,
  profession: "Web Developer"
};

let { name, profession } = person;
console.log(name);       // "Shihab"
console.log(profession); // "Web Developer"
```

---

## **📌 JSON (JavaScript Object Notation) - Object থেকে JSON এবং JSON থেকে Object**
✅ **Object থেকে JSON বানানো:**  
```javascript
let jsonData = JSON.stringify(person);
console.log(jsonData);
```
✅ **JSON থেকে Object বানানো:**  
```javascript
let newPerson = JSON.parse(jsonData);
console.log(newPerson);
```

---

## **📌 উপসংহার (Summary)**
✅ **JavaScript Object হলো key-value pair ডাটা স্টোর করার একটি শক্তিশালী উপায়।**  
✅ **Dot Notation (`obj.property`) এবং Bracket Notation (`obj["property"]`) দিয়ে প্রপার্টি অ্যাক্সেস করা যায়।**  
✅ **Function রাখলে সেটাকে Method বলা হয়।**  
✅ **Loop দিয়ে Object-এর সব Property বের করা যায়।**  
✅ **Object Destructuring ও Spread Operator কোডকে আরো সহজ করে।**  

🔥 **JavaScript Object-এর ভালো দক্ষতা থাকলে API, Data Processing, এবং Web Development-এ অনেক সুবিধা পাওয়া যায়! 🚀**
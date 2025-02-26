### **📌 JavaScript DOM (Document Object Model) – সম্পূর্ণ গাইড**  
JavaScript-এ **DOM (Document Object Model)** হল **ওয়েব পেজ ম্যানিপুলেট করার মূল মাধ্যম**। DOM-এর মাধ্যমে **HTML ও CSS পরিবর্তন, ইভেন্ট হ্যান্ডলিং, নতুন এলিমেন্ট যোগ করা, রিমুভ করা** ইত্যাদি করা যায়।  

---

# **📌 Table of Contents**
1️⃣ **What is DOM?**  
2️⃣ **Selecting Elements (Element খুঁজে বের করা)**  
3️⃣ **Changing Content & Attributes (কনটেন্ট পরিবর্তন করা)**  
4️⃣ **CSS Styling with DOM (স্টাইল পরিবর্তন করা)**  
5️⃣ **Adding & Removing Elements (নতুন এলিমেন্ট যোগ/ডিলিট করা)**  
6️⃣ **Events & Event Listeners (ইভেন্ট হ্যান্ডলিং)**  
7️⃣ **Event Bubbling & Delegation (ইভেন্ট প্রসেসিং)**  
8️⃣ **DOM Traversing (প্যারেন্ট-চাইল্ড সম্পর্ক বোঝা)**  

---

# **📌 1. What is DOM?**
**DOM (Document Object Model)** হলো **একটি ওয়েব পেজের স্ট্রাকচার** যা JavaScript দিয়ে পরিবর্তন করা যায়।  
👉 HTML পেজকে **একটি গাছের মতো স্ট্রাকচারে** সাজানো হয়, যেখানে **প্রতি এলিমেন্ট একটি নোড**।  
👉 JavaScript DOM ব্যবহার করে **এই নোড গুলো পরিবর্তন, অ্যাড, ডিলিট করতে পারে**।  

✅ **Example DOM Tree:**  
```html
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```
🔹 এখানে **`<html>` হল মূল রুট (Root Node)**  
🔹 **`<body>` এর মধ্যে `<h1>` ও `<p>` এলিমেন্ট রয়েছে**  
🔹 JavaScript দিয়ে আমরা **এই এলিমেন্ট পরিবর্তন করতে পারবো**  

---

# **📌 2. Selecting Elements (Element খুঁজে বের করা)**  

### **🔹 1. `getElementById()` - ID দিয়ে সিলেক্ট করা**  
```js
let heading = document.getElementById('main-title');
console.log(heading.innerText); // h1 টেক্সট দেখাবে
```

### **🔹 2. `getElementsByClassName()` - Class দিয়ে সিলেক্ট করা**  
```js
let items = document.getElementsByClassName('item');
console.log(items[0].innerText); // প্রথম item এর টেক্সট দেখাবে
```

### **🔹 3. `getElementsByTagName()` - Tag দিয়ে সিলেক্ট করা**  
```js
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs.length); // প্যারাগ্রাফের সংখ্যা দেখাবে
```

### **🔹 4. `querySelector()` - CSS Selector দিয়ে সিলেক্ট করা (প্রথম এলিমেন্ট)**  
```js
let firstItem = document.querySelector('.item');
console.log(firstItem.innerText);
```

### **🔹 5. `querySelectorAll()` - CSS Selector দিয়ে সিলেক্ট করা (সব এলিমেন্ট)**  
```js
let allItems = document.querySelectorAll('.item');
allItems.forEach(item => console.log(item.innerText));
```

---

# **📌 3. Changing Content & Attributes (কনটেন্ট পরিবর্তন করা)**  

### **🔹 1. `innerText` - শুধুমাত্র টেক্সট পরিবর্তন করা**  
```js
let heading = document.getElementById('main-title');
heading.innerText = "New Title!";
```

### **🔹 2. `innerHTML` - HTML সহ পরিবর্তন করা**  
```js
let div = document.getElementById('container');
div.innerHTML = "<h2>Updated Content</h2>";
```

### **🔹 3. `setAttribute()` - অ্যাট্রিবিউট পরিবর্তন করা**  
```js
let img = document.getElementById('my-image');
img.setAttribute('src', 'new-image.jpg');
```

### **🔹 4. `getAttribute()` - অ্যাট্রিবিউটের মান পাওয়া**  
```js
let link = document.getElementById('my-link');
console.log(link.getAttribute('href')); // লিংকের URL দেখাবে
```

---

# **📌 4. CSS Styling with DOM (স্টাইল পরিবর্তন করা)**  

### **🔹 1. `style.property` - ইনলাইন স্টাইল পরিবর্তন করা**  
```js
let heading = document.getElementById('main-title');
heading.style.color = "red";
heading.style.fontSize = "24px";
```

### **🔹 2. `classList.add()` - নতুন ক্লাস যোগ করা**  
```js
let box = document.getElementById('box');
box.classList.add('new-style');
```

### **🔹 3. `classList.remove()` - ক্লাস রিমুভ করা**  
```js
box.classList.remove('new-style');
```

---

# **📌 5. Adding & Removing Elements (নতুন এলিমেন্ট যোগ/ডিলিট করা)**  

### **🔹 1. `createElement()` - নতুন এলিমেন্ট তৈরি করা**  
```js
let newPara = document.createElement('p');
newPara.innerText = "This is a new paragraph.";
document.body.appendChild(newPara);
```

### **🔹 2. `removeChild()` - এলিমেন্ট রিমুভ করা**  
```js
let parent = document.getElementById('list');
let item = document.getElementById('list-item');
parent.removeChild(item);
```

---

# **📌 6. Events & Event Listeners (ইভেন্ট হ্যান্ডলিং)**  

### **🔹 1. `addEventListener()` - ইভেন্ট যোগ করা**  
```js
document.getElementById('btn').addEventListener('click', function() {
    alert("Button Clicked!");
});
```

### **🔹 2. `onmouseover` - মাউসের উপর গেলে ইভেন্ট ট্রিগার করা**  
```js
document.getElementById('box').onmouseover = function() {
    console.log("Mouse Over Event!");
};
```

---

# **📌 7. Event Bubbling & Delegation (ইভেন্ট প্রসেসিং)**  

### **🔹 1. Event Bubbling (ভিতরের এলিমেন্টের ইভেন্ট বাইরে চলে যায়)**  
```js
document.getElementById('parent').addEventListener('click', function() {
    console.log("Parent Clicked!");
});
document.getElementById('child').addEventListener('click', function(event) {
    console.log("Child Clicked!");
    event.stopPropagation(); // Bubbling বন্ধ করে
});
```

### **🔹 2. Event Delegation (একটি মূল এলিমেন্টে ইভেন্ট বসিয়ে সব সাব এলিমেন্টে ইভেন্ট হ্যান্ডেল করা)**  
```js
document.getElementById('list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log("List Item Clicked: " + event.target.innerText);
    }
});
```

---

# **📌 8. DOM Traversing (Parent-Child সম্পর্ক বোঝা)**  

### **🔹 1. Parent Element খুঁজে বের করা**  
```js
let child = document.getElementById('child');
console.log(child.parentElement);
```

### **🔹 2. Child Elements খুঁজে বের করা**  
```js
let parent = document.getElementById('parent');
console.log(parent.children);
```

---

## **🔥 শেষ কথা**
✅ **DOM ব্যবহার করে HTML-এর যে কোনো কিছু পরিবর্তন করা যায়।**  
✅ **ইভেন্ট হ্যান্ডলিং ও ডেলিগেশন ওয়েব ডেভেলপমেন্টে অনেক গুরুত্বপূর্ণ।**  
✅ **DOM ট্র্যাভার্সিং দ্বারা এলিমেন্টের Parent-Child সম্পর্ক ম্যানেজ করা যায়।**  

---

👉 **কোনো জায়গা বুঝতে সমস্যা হলে বলো, আমি আরও সহজ করে ব্যাখ্যা করবো! 😊**


# **🔍 JavaScript DOM (Document Object Model) বিস্তারিত**  

JavaScript-এ **DOM (Document Object Model)** হলো একটি **API** যা HTML ডকুমেন্টকে **গাছের (tree structure) মতো** উপস্থাপন করে। এর মাধ্যমে **HTML এলিমেন্ট পরিবর্তন, মডিফাই বা ম্যানিপুলেট** করা যায়।  

---

## **✅ ১. DOM কীভাবে কাজ করে?**  
### **📌 DOM Tree Structure (গাছের মতো গঠন)**  

একটি HTML পেজ লোড হলে, **ব্রাউজার সেটাকে একটি "Tree Structure" এ রূপান্তর করে**, যেখানে প্রতিটি এলিমেন্ট **Node** হিসেবে কাজ করে।  

🔹 **HTML কোড:**  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Example</title>
  </head>
  <body>
    <h1 id="title">Hello, DOM!</h1>
    <p class="description">This is a DOM tutorial.</p>
    <button onclick="changeText()">Click Me</button>
  </body>
</html>
```

🔹 **DOM Tree Representation:**  
```
Document
│
├── <html>
│   ├── <head>
│   │   ├── <title>DOM Example</title>
│   ├── <body>
│       ├── <h1 id="title">Hello, DOM!</h1>
│       ├── <p class="description">This is a DOM tutorial.</p>
│       ├── <button onclick="changeText()">Click Me</button>
```
🔹 **ব্যাখ্যা:**  
👉 `document` হলো **মূল অবজেক্ট (Root Object)**  
👉 `html`, `head`, `body` হলো **চাইল্ড নোড (Child Nodes)**  
👉 `h1`, `p`, `button` হলো **Elements (Elements Nodes)**  

---

## **✅ ২. DOM-এর গুরুত্বপূর্ণ মেথড ও প্রপার্টি**  

| **Function / Property** | **ব্যবহার** | **উদাহরণ** |
|------------------|------------|----------------|
| `document.getElementById(id)` | **ID দিয়ে এলিমেন্ট খুঁজে আনে** | `document.getElementById("title")` |
| `document.getElementsByClassName(class)` | **একই ক্লাসের সব এলিমেন্ট খুঁজে আনে** | `document.getElementsByClassName("description")` |
| `document.getElementsByTagName(tag)` | **একই ট্যাগের সব এলিমেন্ট খুঁজে আনে** | `document.getElementsByTagName("p")` |
| `document.querySelector(selector)` | **প্রথম ম্যাচিং এলিমেন্ট খুঁজে আনে** | `document.querySelector(".description")` |
| `document.querySelectorAll(selector)` | **সব ম্যাচিং এলিমেন্ট খুঁজে আনে** | `document.querySelectorAll("p")` |
| `.innerHTML` | **HTML কন্টেন্ট পরিবর্তন করে** | `document.getElementById("title").innerHTML = "New Title"` |
| `.innerText` | **শুধুমাত্র টেক্সট পরিবর্তন করে** | `document.getElementById("title").innerText = "Hello!"` |
| `.style.property` | **স্টাইল পরিবর্তন করে** | `document.getElementById("title").style.color = "red"` |
| `document.createElement(tag)` | **নতুন এলিমেন্ট তৈরি করে** | `document.createElement("div")` |
| `element.appendChild(node)` | **একটি এলিমেন্টের মধ্যে নতুন এলিমেন্ট যোগ করে** | `document.body.appendChild(newDiv)` |
| `element.removeChild(node)` | **একটি এলিমেন্ট রিমুভ করে** | `document.body.removeChild(oldElement)` |

---

## **✅ ৩. DOM Manipulation (পরিবর্তন) এর বাস্তব উদাহরণ**  

### **📌 ১. ID দিয়ে একটি এলিমেন্ট খুঁজে এনে পরিবর্তন করা**  
```javascript
document.getElementById("title").innerHTML = "Welcome to DOM!";
document.getElementById("title").style.color = "blue";
```

---

### **📌 ২. ক্লাস দিয়ে এলিমেন্ট পরিবর্তন করা**  
```javascript
let elements = document.getElementsByClassName("description");
elements[0].innerText = "Updated Description!";
```

---

### **📌 ৩. `querySelector()` এবং `querySelectorAll()` দিয়ে এলিমেন্ট পরিবর্তন**  
```javascript
document.querySelector(".description").style.color = "green";

let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(p => p.style.fontSize = "20px");
```

---

### **📌 ৪. নতুন HTML এলিমেন্ট তৈরি এবং যোগ করা**  
```javascript
let newParagraph = document.createElement("p");
newParagraph.innerText = "This is a new paragraph!";
document.body.appendChild(newParagraph);
```

---

### **📌 ৫. `removeChild()` দিয়ে এলিমেন্ট মুছে ফেলা**  
```javascript
let elementToRemove = document.getElementById("title");
document.body.removeChild(elementToRemove);
```

---

## **✅ ৪. ইভেন্ট হ্যান্ডলিং (Event Handling)**
JavaScript দিয়ে DOM এলিমেন্টে ইভেন্ট যুক্ত করা যায়।  

### **📌 ১. `onclick` ইভেন্ট দিয়ে বাটন ক্লিক করলে টেক্সট পরিবর্তন করা**  
```javascript
function changeText() {
    document.getElementById("title").innerText = "Button Clicked!";
}
```

🔹 **HTML বাটন:**  
```html
<button onclick="changeText()">Click Me</button>
```

---

### **📌 ২. `addEventListener()` দিয়ে ইভেন্ট হ্যান্ডলিং**  
```javascript
document.getElementById("title").addEventListener("mouseover", function() {
    this.style.color = "red";
});
```
👉 এখানে **মাউস রাখলে** `title` এর রঙ লাল হবে।  

---

## **✅ ৫. বাস্তব জীবনের ব্যবহার**  
| **ব্যবহার** | **DOM মেথড** |
|------------|-------------|
| ওয়েবপেজের ডাটা আপডেট | `innerHTML`, `innerText` |
| ফর্ম যাচাই (Form Validation) | `getElementById()`, `addEventListener()` |
| ডায়নামিক কন্টেন্ট যোগ করা | `createElement()`, `appendChild()` |
| ইউজার ইন্টার‌্যাকশন হ্যান্ডল করা | `addEventListener()` |
| AJAX দিয়ে ডাটা লোড করা | `document.querySelector()` |

---

## **✅ ৬. সংক্ষেপে উপসংহার**  
🔹 **DOM হলো HTML-এর Object Model, যা JavaScript দিয়ে নিয়ন্ত্রণ করা যায়।**  
🔹 **এটি একটি "Tree Structure" তৈরি করে যেখানে প্রতিটি ট্যাগ একটি Node।**  
🔹 **JavaScript দিয়ে DOM Manipulation করে HTML পরিবর্তন, স্টাইল আপডেট, এবং ইভেন্ট হ্যান্ডল করা সম্ভব।**  
🔹 **`getElementById()`, `querySelector()`, `innerHTML`, `addEventListener()` প্রভৃতি গুরুত্বপূর্ণ মেথড।**  

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

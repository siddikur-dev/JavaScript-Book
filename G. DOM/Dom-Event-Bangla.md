# 🚀 **JavaScript DOM Events: সম্পূর্ণ গাইড**  

JavaScript-এর **DOM Events** ব্যবহার করে ওয়েবপেজের বিভিন্ন এলিমেন্টের সাথে **ইন্টারঅ্যাকশন** করা যায়, যেমন ক্লিক, হোভার, কী-প্রেস ইত্যাদি।  

---

## **📌 DOM Event কী?**  
🔹 **Event** হল ব্রাউজারে ঘটে যাওয়া কোনো **ঘটনা** যেমন **button click, form submit, key press, mouse hover, page load ইত্যাদি**।  
🔹 **JavaScript ব্যবহার করে এই ইভেন্টগুলোর উপর নিয়ন্ত্রণ নেওয়া যায়**।  
🔹 ইভেন্ট **শুধু ব্রাউজারে ঘটে এমন নয়, সার্ভার বা ইউজারের ইন্টারঅ্যাকশনেও ইভেন্ট হয়**।  

---

## **📌 DOM ইভেন্ট যোগ করার ৩টি পদ্ধতি**  
#### ✅ **পদ্ধতি ১: HTML Attribute ব্যবহার করে (Inline Event)**
```html
<button onclick="showMessage()">Click Me</button>

<script>
    function showMessage() {
        alert("Button Clicked!");
    }
</script>
```
❌ **তবে এই পদ্ধতি ভালো নয় কারণ HTML ও JavaScript আলাদা রাখা উচিত।**  

---

#### ✅ **পদ্ধতি ২: JavaScript এর মাধ্যমে Event যোগ করা (Best Practice)**
```html
<button id="myButton">Click Me</button>

<script>
    document.getElementById("myButton").addEventListener("click", function() {
        alert("Button Clicked!");
    });
</script>
```
✔ **Explanation:** `addEventListener()` ব্যবহার করে ইভেন্ট অ্যাড করা হয়েছে।

---

#### ✅ **পদ্ধতি ৩: HTML এলিমেন্টের Event Property ব্যবহার করা**
```html
<button id="myButton">Click Me</button>

<script>
    const btn = document.getElementById("myButton");
    btn.onclick = function() {
        alert("Button Clicked!");
    };
</script>
```
✔ **Explanation:** `.onclick` ইভেন্ট প্রোপার্টি ব্যবহার করে ইভেন্ট হ্যান্ডলার সেট করা হয়েছে।  
❌ **তবে এটি ভালো পদ্ধতি নয় কারণ একাধিক ইভেন্ট হ্যান্ডলার অ্যাড করা যায় না।**  

---

## **📌 JavaScript-এর কিছু গুরুত্বপূর্ণ DOM Events**  

| **Event** | **Trigger হয় যখন...** |
|-----------|----------------|
| `click` | ইউজার যখন এলিমেন্টে ক্লিক করে |
| `dblclick` | ইউজার যখন ডাবল ক্লিক করে |
| `mouseover` | মাউস যখন এলিমেন্টের উপর যায় |
| `mouseout` | মাউস যখন এলিমেন্ট থেকে চলে যায় |
| `keydown` | কোনো কী প্রেস করলে |
| `keyup` | কী ছেড়ে দিলে |
| `change` | ইনপুট ফিল্ডের মান পরিবর্তন হলে |
| `submit` | ফর্ম সাবমিট হলে |
| `focus` | ইনপুট ফিল্ড ফোকাস করলে |
| `blur` | ইনপুট ফিল্ড ফোকাস হারালে |
| `load` | পেজ বা ইমেজ লোড হলে |

---

## **📌 ১. `click` ইভেন্ট (Button Click Example)**  
```html
<button id="btn">Click Me</button>
<p id="message"></p>

<script>
    document.getElementById("btn").addEventListener("click", function() {
        document.getElementById("message").innerText = "Button Clicked!";
    });
</script>
```

---

## **📌 ২. `mouseover` & `mouseout` ইভেন্ট (Hover Effect)**  
```html
<div id="box" style="width: 100px; height: 100px; background: red;"></div>

<script>
    const box = document.getElementById("box");

    box.addEventListener("mouseover", function() {
        box.style.background = "green";
    });

    box.addEventListener("mouseout", function() {
        box.style.background = "red";
    });
</script>
```
✔ **Explanation:** যখন মাউস `div`-এর উপর যাবে, তখন সবুজ হবে, আর যখন চলে যাবে, তখন আবার লাল হবে।

---

## **📌 ৩. `keydown` & `keyup` ইভেন্ট (Keyboard Event Example)**  
```html
<input type="text" id="inputField" placeholder="Type something...">
<p id="output"></p>

<script>
    const inputField = document.getElementById("inputField");

    inputField.addEventListener("keydown", function(event) {
        document.getElementById("output").innerText = "Key Pressed: " + event.key;
    });
</script>
```
✔ **Explanation:** ইউজার কোনো কী প্রেস করলে তা `p` ট্যাগে দেখাবে।

---

## **📌 ৪. `change` ইভেন্ট (Dropdown Selection Example)**  
```html
<select id="dropdown">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="orange">Orange</option>
</select>
<p id="selected"></p>

<script>
    document.getElementById("dropdown").addEventListener("change", function() {
        document.getElementById("selected").innerText = "You selected: " + this.value;
    });
</script>
```
✔ **Explanation:** ইউজার ড্রপডাউন থেকে কিছু সিলেক্ট করলে তা নিচে দেখাবে।

---

## **📌 ৫. `submit` ইভেন্ট (Form Validation Example)**  
```html
<form id="myForm">
    <input type="text" id="name" placeholder="Enter your name">
    <button type="submit">Submit</button>
</form>

<script>
    document.getElementById("myForm").addEventListener("submit", function(event) {
        const nameValue = document.getElementById("name").value;
        if (nameValue === "") {
            alert("Name cannot be empty!");
            event.preventDefault(); // ফর্ম সাবমিট বন্ধ করে
        }
    });
</script>
```
✔ **Explanation:** যদি ইউজার ইনপুট ফিল্ড ফাঁকা রেখে সাবমিট করে, তাহলে ফর্ম সাবমিট হবে না।

---

## **📌 ৬. `focus` & `blur` ইভেন্ট (Input Field Highlight Example)**  
```html
<input type="text" id="inputField" placeholder="Click here...">

<script>
    const input = document.getElementById("inputField");

    input.addEventListener("focus", function() {
        input.style.border = "2px solid blue";
    });

    input.addEventListener("blur", function() {
        input.style.border = "1px solid gray";
    });
</script>
```
✔ **Explanation:** ইনপুট ফিল্ড ফোকাস করলে বর্ডার নীল হবে, আর ফোকাস হারালে ধূসর হবে।

---

## **📌 ৭. `load` ইভেন্ট (Page Load Example)**  
```html
<script>
    window.addEventListener("load", function() {
        alert("Page Fully Loaded!");
    });
</script>
```
✔ **Explanation:** পেজ লোড হলে অ্যালার্ট দেখাবে।

---

## **📌 `removeEventListener()` দিয়ে ইভেন্ট রিমুভ করা**  
```js
function showMessage() {
    alert("Hello!");
}

// ইভেন্ট যোগ করা
document.getElementById("btn").addEventListener("click", showMessage);

// ইভেন্ট রিমুভ করা
document.getElementById("btn").removeEventListener("click", showMessage);
```
✔ **Explanation:** `removeEventListener()` ব্যবহার করলে ইভেন্ট কাজ করবে না।

---

## **🚀 উপসংহার**  
✅ **DOM ইভেন্ট দিয়ে ওয়েবপেজের এলিমেন্টের সাথে ইন্টারঅ্যাকশন করা যায়**।  
✅ **`addEventListener()` সবচেয়ে ভালো পদ্ধতি**।  
✅ **`click, mouseover, keydown, submit, change` ইত্যাদি ইভেন্ট গুরুত্বপূর্ণ**।  
✅ **`removeEventListener()` দিয়ে ইভেন্ট বন্ধ করা যায়**।  

---



# 🚀 **JavaScript Event Handling: Bubbling vs Delegation**  

JavaScript-এ ইভেন্ট হ্যান্ডলিং করার সময় **Event Bubbling, Capturing এবং Delegation** গুরুত্বপূর্ণ বিষয়।  
এগুলো ভালোভাবে বোঝা গেলে **ওয়েব অ্যাপ অপটিমাইজ করা ও কোড সহজে মেইনটেইন করা সম্ভব**।  

---

## **📌 ১. Event Bubbling (ইভেন্ট বাবলিং)**
**Event Bubbling** হল **একটি চাইল্ড এলিমেন্টে ইভেন্ট ঘটলে, সেটি প্যারেন্ট এবং তারও উপরিভাগের এলিমেন্টে পৌঁছে যায়**।  

### ✅ **Example: Event Bubbling**
```html
<div id="parent" style="padding: 20px; background: lightblue;">
    <button id="child">Click Me</button>
</div>

<script>
    document.getElementById("child").addEventListener("click", function() {
        alert("Child Button Clicked!");
    });

    document.getElementById("parent").addEventListener("click", function() {
        alert("Parent Div Clicked!");
    });
</script>
```
### **✅ Output:**
1️⃣ `child` বাটনে ক্লিক করলে **আগে "Child Button Clicked!" দেখাবে**  
2️⃣ তারপর "Parent Div Clicked!" দেখাবে  

✔ **Explanation:**  
- প্রথমে **চাইল্ড (button) ইভেন্ট হ্যান্ডলার ট্রিগার হবে**  
- তারপর **প্যারেন্ট (div) ইভেন্ট হ্যান্ডলার ট্রিগার হবে**  

---

## **📌 ২. Event Capturing (ইভেন্ট ক্যাপচারিং বা ট্রিকলিং)**
🔹 **Event Capturing** হল **প্যারেন্ট থেকে চাইল্ডের দিকে ইভেন্ট যাওয়া** (Event Bubbling-এর উল্টো)।  
🔹 `addEventListener()` এর **তৃতীয় আর্গুমেন্ট `true` দিলে এটি কাজ করে**।

### ✅ **Example: Event Capturing**
```html
<div id="parent" style="padding: 20px; background: lightcoral;">
    <button id="child">Click Me</button>
</div>

<script>
    document.getElementById("parent").addEventListener("click", function() {
        alert("Parent Div Clicked!");
    }, true); // Capturing Mode

    document.getElementById("child").addEventListener("click", function() {
        alert("Child Button Clicked!");
    });
</script>
```
### **✅ Output:**
1️⃣ প্রথমে "Parent Div Clicked!" দেখাবে  
2️⃣ তারপর "Child Button Clicked!" দেখাবে  

✔ **Explanation:**  
- `true` দেওয়ার কারণে **প্যারেন্ট ইভেন্টটি আগে ট্রিগার হচ্ছে**  
- তারপর চাইল্ড ইভেন্টটি কাজ করছে  

---

## **📌 ৩. `stopPropagation()` দিয়ে Event Bubbling বন্ধ করা**
🔹 কখনো আমরা চাই **চাইল্ড ইভেন্ট প্যারেন্টে না যাক**। তখন `event.stopPropagation()` ব্যবহার করতে হবে।  

### ✅ **Example: Stop Bubbling**
```html
<div id="parent" style="padding: 20px; background: lightgreen;">
    <button id="child">Click Me</button>
</div>

<script>
    document.getElementById("child").addEventListener("click", function(event) {
        alert("Child Button Clicked!");
        event.stopPropagation(); // Bubbling বন্ধ
    });

    document.getElementById("parent").addEventListener("click", function() {
        alert("Parent Div Clicked!");
    });
</script>
```
### **✅ Output:**
✔ শুধু "Child Button Clicked!" দেখাবে, **"Parent Div Clicked!" দেখাবে না**  

✔ **Explanation:**  
- `event.stopPropagation()` ব্যবহার করার কারণে ইভেন্ট **উপরে (parent) বাবল হবে না**।  

---

## **📌 ৪. Event Delegation (ইভেন্ট ডেলিগেশন)**
🔹 **Event Delegation** হল **একটি Parent-এ ইভেন্ট বসিয়ে তার মাধ্যমে Child-গুলোর ইভেন্ট হ্যান্ডল করা**।  
🔹 এটি বিশেষ করে **ডায়নামিক HTML এলিমেন্ট হ্যান্ডল করতে সাহায্য করে**।  

### ✅ **Example: Event Delegation**
```html
<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<script>
    document.getElementById("list").addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            alert("You clicked: " + event.target.innerText);
        }
    });
</script>
```
### **✅ Output:**
✔ **যে `li`-তে ক্লিক করা হবে, তার নাম দেখাবে।**  

✔ **Explanation:**  
- এখানে **`ul` (parent)-এর মধ্যে `click` ইভেন্ট বসানো হয়েছে**  
- যখন কোনো `li` ক্লিক করা হয়, তখন **`event.target` দিয়ে সেই এলিমেন্ট ডিটেক্ট করা হয়**  
- এতে **নতুন `li` অ্যাড করলেও ইভেন্ট ঠিকমতো কাজ করবে** ✅  

---

## **📌 কেন Event Delegation ব্যবহার করবো?**
✔ **Performance ভালো হয়**: প্রতিটি `li`-তে আলাদা ইভেন্ট বসানোর চেয়ে **একটি parent (`ul`) তে বসানো ভালো**  
✔ **ডায়নামিক এলিমেন্টের জন্য ভালো**: যদি নতুন `li` যোগ হয়, তাও ইভেন্ট কাজ করবে  
✔ **Less Memory Usage**: অনেক ইভেন্ট বসানোর দরকার হয় না  

---

## **🚀 উপসংহার**  
✅ **Event Bubbling** → চাইল্ড থেকে প্যারেন্টে ইভেন্ট যায় 🔼  
✅ **Event Capturing** → প্যারেন্ট থেকে চাইল্ডে ইভেন্ট যায় 🔽  
✅ **`stopPropagation()`** → ইভেন্ট বাবল বন্ধ করে ✋  
✅ **Event Delegation** → Parent-এ ইভেন্ট বসিয়ে চাইল্ড ইভেন্ট হ্যান্ডল করা হয় 🎯 

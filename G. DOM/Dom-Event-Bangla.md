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

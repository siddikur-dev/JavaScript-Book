# **JavaScript DOM Events - Everything You Need to Know 🚀**  

## **What is the DOM?**  
The **DOM (Document Object Model)** is a representation of an HTML document as a **tree structure** where each HTML element is a **node**. JavaScript can manipulate this structure to change, add, or remove elements dynamically.

## **What are JavaScript Events?**  
An **event** is an action that occurs in the browser, such as:  
✅ Clicking a button 🖱️  
✅ Typing in an input field ⌨️  
✅ Scrolling a page 🖱️  
✅ Hovering over an element 🎯  

JavaScript allows us to **listen** for these events and execute code in response.

---

## **1️⃣ Ways to Add Event Listeners**
### **1. Inline Event Handling (Not Recommended ❌)**
Adding an event **directly in HTML**:
```html
<button onclick="alert('Button Clicked!')">Click Me</button>
```
🔹 **Drawback:** Hard to manage for large projects.

---

### **2. Using the `onclick` Property (Better but Limited)**
Assigning an event **directly in JavaScript**:
```html
<button id="myBtn">Click Me</button>
<script>
    let btn = document.getElementById("myBtn");
    btn.onclick = function () {
        alert("Button Clicked!");
    };
</script>
```
🔹 **Limitations:** Only **one** event handler can be assigned per event.

---

### **3. Using `addEventListener()` (Best Practice ✅)**
The **modern** and recommended way to handle events:
```html
<button id="myBtn">Click Me</button>
<script>
    let btn = document.getElementById("myBtn");
    btn.addEventListener("click", function () {
        alert("Button Clicked!");
    });
</script>
```
✅ **Multiple event listeners** can be added.  
✅ Works for **all types of events**.  

---

## **2️⃣ Common JavaScript Events**
| Event Type | Description |
|------------|-------------|
| `click` | When an element is clicked |
| `mouseover` | When mouse hovers over an element |
| `mouseout` | When mouse leaves an element |
| `keydown` | When a key is pressed |
| `keyup` | When a key is released |
| `change` | When an input value changes |
| `submit` | When a form is submitted |
| `load` | When the page finishes loading |
| `scroll` | When the page is scrolled |

---

## **3️⃣ Event Object (`event`)**
When an event happens, JavaScript provides an **event object** (`event` or `e`) with details.

### **Example: Using the Event Object**
```html
<button id="btn">Click Me</button>
<script>
    document.getElementById("btn").addEventListener("click", function (event) {
        console.log(event.type);  // Output: "click"
        console.log(event.target); // Output: <button>Click Me</button>
    });
</script>
```
✅ **`event.type`** → Tells which event occurred.  
✅ **`event.target`** → Gives the element that triggered the event.  

---

## **4️⃣ Prevent Default Behavior (`event.preventDefault()`)**
Some elements have **default behavior** (e.g., links redirecting, form submission). We can **prevent** this.

### **Example: Preventing Link Navigation**
```html
<a href="https://google.com" id="myLink">Google</a>
<script>
    document.getElementById("myLink").addEventListener("click", function (event) {
        event.preventDefault(); // Stops navigation
        alert("Link Clicked but not Redirecting!");
    });
</script>
```
✅ The link **won’t redirect** when clicked.

---

## **5️⃣ Event Propagation (Bubbling & Capturing)**
Events can **propagate** (travel) through the **DOM hierarchy**.

### **🔹 Event Bubbling (Default)**
The event starts from the **target element** and moves **upward**.

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
<script>
    document.getElementById("parent").addEventListener("click", function () {
        console.log("Parent Clicked!");
    });

    document.getElementById("child").addEventListener("click", function () {
        console.log("Button Clicked!");
    });
</script>
```
**Output when clicking the button:**  
```
Button Clicked!
Parent Clicked!
```
🔹 The **button event happens first**, then the **parent event**.

### **🔹 Stopping Bubbling (`event.stopPropagation()`)**
```javascript
document.getElementById("child").addEventListener("click", function (event) {
    console.log("Button Clicked!");
    event.stopPropagation(); // Stops event from going to parent
});
```
Now **only** `"Button Clicked!"` will be logged.

### **🔹 Event Capturing (Use `{ capture: true }`)**
If we want the **parent to trigger first**, we use:
```javascript
document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent Clicked!");
}, true); // Capturing mode

document.getElementById("child").addEventListener("click", function () {
    console.log("Button Clicked!");
});
```
**Output when clicking the button:**  
```
Parent Clicked!
Button Clicked!
```
🔹 The **parent event happens first**, then the **button event**.

---

## **6️⃣ Event Delegation (Handling Multiple Elements Efficiently)**
Instead of adding event listeners to multiple child elements, we add **one event listener** to a parent and use **`event.target`**.

### **Example: Event Delegation for Multiple Buttons**
```html
<div id="buttonContainer">
    <button class="btn">Button 1</button>
    <button class="btn">Button 2</button>
    <button class="btn">Button 3</button>
</div>

<script>
    document.getElementById("buttonContainer").addEventListener("click", function (event) {
        if (event.target.classList.contains("btn")) {
            alert(event.target.innerText + " Clicked!");
        }
    });
</script>
```
✅ **More efficient** than adding separate listeners for each button.  

---

## **7️⃣ Removing Event Listeners (`removeEventListener()`)**
We can remove an event listener when it's no longer needed.

### **Example: Removing Click Event After First Click**
```html
<button id="stopBtn">Click Me</button>
<script>
    function showMessage() {
        alert("Button Clicked!");
        document.getElementById("stopBtn").removeEventListener("click", showMessage);
    }

    document.getElementById("stopBtn").addEventListener("click", showMessage);
</script>
```
✅ The event listener **removes itself** after the first click.

---

## **🔥 Real-Life Applications of JavaScript Events**
✅ **Form Validation** – Prevent form submission if fields are empty.  
✅ **Image Sliders** – Change images on button click.  
✅ **Infinite Scroll** – Load more content as you scroll.  
✅ **Dropdown Menus** – Open/close menus on hover or click.  
✅ **Light/Dark Mode Toggle** – Change theme on button click.  

---

## **🎯 Final Summary**
✔️ **`addEventListener()`** → Best practice for handling events.  
✔️ **Event Object (`event`)** → Gives details about the event.  
✔️ **Prevent Default (`event.preventDefault()`)** → Stops default browser behavior.  
✔️ **Event Propagation (Bubbling & Capturing)** → How events travel in the DOM.  
✔️ **Event Delegation** → Attach events to parent elements for efficiency.  
✔️ **`removeEventListener()`** → Remove event listeners when needed.  

---

## **🔥 Ready to Practice? Try These Challenges!**
1️⃣ Create a button that changes the **background color** randomly when clicked.  
2️⃣ Build a **custom dropdown menu** using JavaScript events.  
3️⃣ Implement a **live character counter** for an input field. 

# **🔹 API (Application Programming Interface) All About**  

✅ **API (Application Programming Interface)** হলো **একটি মাধ্যম**, যা সফটওয়্যার, ওয়েবসাইট বা অ্যাপের মধ্যে **data exchange** করতে সাহায্য করে।  
✅ এটি **সার্ভার এবং ক্লায়েন্টের মধ্যে যোগাযোগের মাধ্যম** হিসাবে কাজ করে।  
✅ API সাধারণত **JSON format-এ data send/receive করে।**  

---

# **🔹 API কিভাবে কাজ করে?**  
👉 API মূলত **Client (যেমন: Browser, Mobile App) ও Server (Database, Backend System)-এর মধ্যে তথ্য আদান-প্রদান করে।**  

### **💡 API Workflow:**  
1️⃣ **User Request পাঠায়** → (Browser বা Mobile App থেকে API call করা হয়)  
2️⃣ **Server API Request গ্রহণ করে** → (Backend API request process করে)  
3️⃣ **Server Response পাঠায়** → (API Response হিসাবে JSON data পাঠায়)  
4️⃣ **User Response পায়** → (Frontend response data show করে)  

🔥 **API সাধারণত HTTP Request Method ব্যবহার করে:**  
✅ **GET** → ডাটা আনার জন্য  
✅ **POST** → নতুন ডাটা পাঠানোর জন্য  
✅ **PUT/PATCH** → বিদ্যমান ডাটা আপডেটের জন্য  
✅ **DELETE** → ডাটা মুছে ফেলার জন্য  

---

# **🔹 API Types (API-এর ধরণ)**  
✅ **1️⃣ REST API** → Web API, যা **HTTP request ব্যবহার করে data exchange করে।**  
✅ **2️⃣ SOAP API** → XML-based API, সাধারণত **বড় প্রতিষ্ঠান ব্যবহার করে।**  
✅ **3️⃣ GraphQL API** → Client যে ডাটা চায়, ঠিক সেই data return করে।  
✅ **4️⃣ WebSocket API** → **Real-time communication (Chat, Notifications, Live Updates)** এর জন্য ব্যবহৃত হয়।  

---

# **🔹 API এর বাস্তব ব্যবহার (Real-life Examples of API)**  
✅ **1️⃣ Weather API:** Current Weather & Forecast দেখানোর জন্য।  
✅ **2️⃣ Payment API:** Online Payment (PayPal, Stripe, bKash)।  
✅ **3️⃣ Google Maps API:** ওয়েবসাইট বা অ্যাপে মানচিত্র দেখানোর জন্য।  
✅ **4️⃣ Social Media API:** Facebook, Twitter, Instagram Authentication & Post Fetch করার জন্য।  
✅ **5️⃣ E-commerce API:** Product Data, Payment, Inventory Management ইত্যাদি।  

---

# **🔹 API Methods (HTTP Request Methods) with Real Examples**  

### **✅ 1️⃣ GET Request (API থেকে ডাটা নেওয়া)**
👉 **Arrow Function + `async/await` ব্যবহার করে API থেকে JSON data লোড করা**  
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
**🔥 Output:**  
👉 API থেকে **10 জন ইউজারের JSON ডাটা পাওয়া যাবে।**  

---

### **✅ 2️⃣ POST Request (API তে নতুন ডাটা পাঠানো)**  
👉 **Arrow Function ব্যবহার করে API-তে নতুন ডাটা পাঠানো (Create New User)**  

```js
const createUser = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "John Doe",
                email: "john@example.com"
            })
        });

        let data = await response.json();
        console.log("User Created:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

createUser();
```
**🔥 Output:**  
👉 নতুন ইউজার তৈরি হয়ে **API থেকে নতুন ইউজারের JSON ডাটা ফেরত আসবে।**  

---

### **✅ 3️⃣ PUT Request (API তে বিদ্যমান ডাটা আপডেট করা)**  
👉 **Arrow Function দিয়ে ইউজারের ডাটা আপডেট করা**  

```js
const updateUser = async (userId) => {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Updated Name",
                email: "updated@example.com"
            })
        });

        let data = await response.json();
        console.log("User Updated:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

updateUser(1);
```
👉 **ইউজারের `name` ও `email` আপডেট করা হয়েছে।**  

---

### **✅ 4️⃣ PATCH Request (Specific Data Update করা)**  
```js
const patchUser = async (userId) => {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: "patched@example.com"
            })
        });

        let data = await response.json();
        console.log("User Patched:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

patchUser(1);
```
👉 **শুধুমাত্র `email` ফিল্ড আপডেট করা হয়েছে।**  

---

### **✅ 5️⃣ DELETE Request (API থেকে ডাটা মুছে ফেলা)**  
👉 **Arrow Function দিয়ে API থেকে ইউজার ডিলিট করা**  

```js
const deleteUser = async (userId) => {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: "DELETE"
        });

        console.log("User Deleted:", userId);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

deleteUser(1);
```
👉 **এই API কল করলে ইউজার ডিলিট হয়ে যাবে।**  

---

# **🔹 API Authentication & Security**  
✅ **1️⃣ API Key** → Unique Key, যা API ব্যবহার করার অনুমতি দেয়।  
✅ **2️⃣ OAuth** → Secure Authentication (Google Login, Facebook Login)।  
✅ **3️⃣ JWT (JSON Web Token)** → User Authentication & Authorization।  
✅ **4️⃣ Rate Limiting** → API ব্যবহার করার লিমিট সেট করা হয়।  

---

# **📌 সংক্ষেপে (API Summary)**  
✔️ **API হল সফটওয়্যার/ওয়েবসাইটের মধ্যে ডাটা আদান-প্রদানের মাধ্যম।**  
✔️ **HTTP Request Methods (GET, POST, PUT, PATCH, DELETE) ব্যবহার করে API ডাটা নিয়ন্ত্রণ করে।**  
✔️ **`fetch()` ও `async/await` ব্যবহার করে API কল করা যায়।**  
✔️ **API Authentication (API Key, OAuth, JWT) ব্যবহার করে Security বাড়ানো হয়।**  
✔️ **API ব্যবহার করে Real-time Data Fetch করা যায়।**  

---
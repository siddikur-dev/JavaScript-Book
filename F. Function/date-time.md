# 🚀 **JavaScript Date & Time: Full Guide with Examples**  

JavaScript-এ **Date** এবং **Time** ম্যানেজ করতে `Date` অবজেক্ট ব্যবহার করা হয়। এটি বর্তমান সময়, তারিখ, টাইমস্ট্যাম্প, এবং টাইম ফরম্যাটিং ইত্যাদির জন্য ব্যবহৃত হয়।  

---

## **📌 ১. Date Object তৈরি করার উপায়**  
JavaScript-এ **Date Object** তৈরি করার ৪টি উপায় আছে:  

| Syntax | Description |
|--------|------------|
| `new Date()` | বর্তমান তারিখ ও সময় প্রদান করবে |
| `new Date(milliseconds)` | Unix Timestamp অনুযায়ী সময় সেট করবে |
| `new Date(year, month, day, hours, minutes, seconds, ms)` | নির্দিষ্ট তারিখ ও সময় সেট করা যাবে |
| `new Date(dateString)` | তারিখ স্ট্রিং ব্যবহার করে সেট করা |

🔹 **Example:**
```js
console.log(new Date()); // বর্তমান সময় দেখাবে
console.log(new Date(2025, 1, 12)); // নির্দিষ্ট তারিখ
console.log(new Date("2025-02-12")); // স্ট্রিং থেকে তারিখ
console.log(new Date(0)); // 1970-01-01 00:00:00 UTC
```

---

## **📌 ২. Date Methods (তারিখ সম্পর্কিত মেথড)**  
| Method | Description | Example Output |
|--------|------------|----------------|
| `getFullYear()` | বছর ফেরত দেয় | `2025` |
| `getMonth()` | মাস (0-11) ফেরত দেয় | `1` (February) |
| `getDate()` | মাসের তারিখ ফেরত দেয় | `12` |
| `getDay()` | সপ্তাহের দিন (0-6) ফেরত দেয় | `3` (Wednesday) |
| `getHours()` | ঘণ্টা (0-23) ফেরত দেয় | `14` |
| `getMinutes()` | মিনিট ফেরত দেয় | `30` |
| `getSeconds()` | সেকেন্ড ফেরত দেয় | `45` |
| `getMilliseconds()` | মিলিসেকেন্ড ফেরত দেয় | `500` |

🔹 **Example:**
```js
let now = new Date();
console.log(now.getFullYear());  // 2025
console.log(now.getMonth());     // 1 (February)
console.log(now.getDate());      // 12
console.log(now.getDay());       // 3 (Wednesday)
console.log(now.getHours());     // 14
console.log(now.getMinutes());   // 30
console.log(now.getSeconds());   // 45
```

---

## **📌 ৩. Date Formatting (তারিখ কাস্টমাইজ করা)**  
🔹 **Example:**
```js
let date = new Date();
let formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
console.log(formattedDate);
```
**✅ Output:**  
```
12-2-2025
```

---

## **📌 ৪. Set Methods (তারিখ ও সময় পরিবর্তন করা)**  
| Method | Description |
|--------|------------|
| `setFullYear(year)` | নির্দিষ্ট বছর সেট করে |
| `setMonth(month)` | নির্দিষ্ট মাস সেট করে |
| `setDate(day)` | নির্দিষ্ট তারিখ সেট করে |
| `setHours(hour)` | নির্দিষ্ট ঘণ্টা সেট করে |
| `setMinutes(min)` | নির্দিষ্ট মিনিট সেট করে |
| `setSeconds(sec)` | নির্দিষ্ট সেকেন্ড সেট করে |

🔹 **Example:**
```js
let myDate = new Date();
myDate.setFullYear(2030);
myDate.setMonth(5); // June (0-based index)
console.log(myDate);
```

---

## **📌 ৫. Date Comparisons (তারিখ তুলনা করা)**  
🔹 **Example:**
```js
let date1 = new Date("2025-02-12");
let date2 = new Date("2025-02-15");

if (date1 < date2) {
    console.log("date1 is earlier than date2");
} else {
    console.log("date1 is later than date2");
}
```
**✅ Output:**  
```
date1 is earlier than date2
```

---

## **📌 ৬. Time Methods (সময় বের করা)**  
| Method | Description |
|--------|------------|
| `getTime()` | 1970 থেকে বর্তমান সময় পর্যন্ত **মিলিসেকেন্ড** ফেরত দেয় |
| `Date.now()` | বর্তমান Unix Timestamp দেয় |

🔹 **Example:**
```js
let now = new Date();
console.log(now.getTime()); // 1707734400000 (Milliseconds since 1970)
console.log(Date.now()); // বর্তমান Timestamp
```

---

## **📌 ৭. Countdown Timer (কতদিন বাকি তা বের করা)**  
🔹 **Example:**
```js
let eventDate = new Date("2025-12-31");
let today = new Date();

let difference = eventDate - today;
let daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));

console.log(`Only ${daysLeft} days left until New Year!`);
```

---

## **📌 ৮. Converting Date to String (তারিখকে স্ট্রিং-এ রূপান্তর করা)**  
| Method | Description | Example Output |
|--------|------------|----------------|
| `toDateString()` | শুধুমাত্র তারিখ | `"Wed Feb 12 2025"` |
| `toTimeString()` | শুধুমাত্র সময় | `"14:30:45 GMT+0000"` |
| `toISOString()` | ISO 8601 ফরম্যাট | `"2025-02-12T14:30:45.000Z"` |

🔹 **Example:**
```js
let date = new Date();
console.log(date.toDateString());  // Wed Feb 12 2025
console.log(date.toTimeString());  // 14:30:45 GMT+0000
console.log(date.toISOString());   // 2025-02-12T14:30:45.000Z
```

---

## **📌 ৯. Local Date Formatting (লোকাল টাইম)**  
🔹 **Example:**
```js
let date = new Date();
console.log(date.toLocaleDateString("en-US")); // 2/12/2025
console.log(date.toLocaleDateString("bn-BD")); // ১২/২/২০২৫
```

---

## **📌 ১০. Stopwatch (Execution Time Check)**  
🔹 **Example:**
```js
let start = Date.now();
for (let i = 0; i < 1000000; i++) {} // Loop for delay
let end = Date.now();

console.log(`Execution Time: ${end - start} ms`);
```

---

## **🔥 উপসংহার**  
✅ JavaScript-এর **Date Object** ব্যবহার করে **তারিখ ও সময়** নিয়ন্ত্রণ করা যায়।  
✅ **Date Formatting**, **Countdown Timer**, এবং **Execution Time Calculation** করা সম্ভব।  
✅ `toLocaleDateString()` ব্যবহার করে **লোকাল টাইম ফরম্যাট** সেট করা যায়।  

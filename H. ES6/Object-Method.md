### **ES6 এবং পরবর্তী আপডেটের গুরুত্বপূর্ণ Object Methods**  

ES6 (ECMAScript 2015) এবং এর পরবর্তী সংস্করণগুলোতে (ES7, ES8, ইত্যাদি) অবজেক্ট নিয়ে কাজ করার জন্য অনেক শক্তিশালী মেথড যুক্ত হয়েছে। নিচে গুরুত্বপূর্ণ **Object Methods** ব্যাখ্যা করা হলো:

---

## **1. `Object.keys()` – অবজেক্টের সমস্ত কী (keys) পাওয়া**  
এই মেথডটি একটি অবজেক্টের **সকল কী (keys)** এর একটি অ্যারে রিটার্ন করে।

```js
const person = { name: "John", age: 30, city: "New York" };

console.log(Object.keys(person));
// Output: ['name', 'age', 'city']
```

---

## **2. `Object.values()` – অবজেক্টের সমস্ত মান (values) পাওয়া**  
এই মেথডটি একটি অবজেক্টের **সকল মান (values)** এর একটি অ্যারে রিটার্ন করে।

```js
const person = { name: "John", age: 30, city: "New York" };

console.log(Object.values(person));
// Output: ['John', 30, 'New York']
```

---

## **3. `Object.entries()` – কী-ভ্যালু জোড়া (key-value pairs) অ্যারে আকারে পাওয়া**  
এই মেথডটি অবজেক্টের **প্রতিটি কী এবং তার মানকে অ্যারেতে রূপান্তর করে।**

```js
const person = { name: "John", age: 30, city: "New York" };

console.log(Object.entries(person));
// Output: [['name', 'John'], ['age', 30], ['city', 'New York']]
```

---

## **4. `Object.assign()` – দুটি বা তার বেশি অবজেক্ট একত্র করা**  
এই মেথডটি একটি অবজেক্টের সাথে অন্য অবজেক্টের প্রপার্টি গুলো মার্জ (merge) করতে ব্যবহৃত হয়।

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);
// Output: { a: 1, b: 2, c: 3, d: 4 }
```

---

## **5. `Object.freeze()` – অবজেক্ট পরিবর্তন প্রতিরোধ করা**  
এই মেথডটি অবজেক্টকে **ফ্রিজ (freeze)** করে, যাতে নতুন প্রপার্টি যোগ, মুছে ফেলা বা আপডেট করা যায় না।

```js
const obj = { name: "John", age: 30 };

Object.freeze(obj);

obj.age = 35;  // পরিবর্তন সম্ভব নয়
obj.city = "New York";  // নতুন প্রপার্টি যোগ করা যাবে না
delete obj.name;  // ডিলিট করা যাবে না

console.log(obj);
// Output: { name: 'John', age: 30 }
```

---

## **6. `Object.seal()` – নতুন প্রপার্টি যোগ করতে দেবে না, কিন্তু মান পরিবর্তন করা যাবে**  
`Object.seal()` মেথডটি `freeze()`-এর মতোই, তবে এখানে **বিদ্যমান প্রপার্টির মান পরিবর্তন করা যায়, কিন্তু নতুন কিছু যোগ বা মুছে ফেলা যায় না।**

```js
const obj = { name: "John", age: 30 };

Object.seal(obj);

obj.age = 35;  // পরিবর্তন সম্ভব
obj.city = "New York";  // নতুন প্রপার্টি যোগ করা যাবে না
delete obj.name;  // ডিলিট করা যাবে না

console.log(obj);
// Output: { name: 'John', age: 35 }
```

---

## **7. `Object.hasOwnProperty()` – অবজেক্টে নির্দিষ্ট কী আছে কি না তা চেক করা**  
এই মেথডটি চেক করে যে, অবজেক্টে কোনো নির্দিষ্ট **প্রপার্টি (key)** আছে কি না।

```js
const person = { name: "John", age: 30 };

console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.hasOwnProperty("city")); // Output: false
```

---

## **8. `Object.getOwnPropertyNames()` – অবজেক্টের সমস্ত কী পাওয়া**  
এই মেথডটি `Object.keys()`-এর মতোই কাজ করে, তবে এটি **`non-enumerable` প্রপার্টি** সহ সব কিছু রিটার্ন করে।

```js
const person = { name: "John", age: 30 };

console.log(Object.getOwnPropertyNames(person));
// Output: ['name', 'age']
```

---

## **9. `Object.fromEntries()` – কী-ভ্যালু জোড়া থেকে অবজেক্ট তৈরি করা**  
`Object.entries()` বিপরীত কাজ করে `Object.fromEntries()`, যা অ্যারে থেকে অবজেক্ট তৈরি করে।

```js
const entries = [['name', 'John'], ['age', 30]];

const person = Object.fromEntries(entries);
console.log(person);
// Output: { name: 'John', age: 30 }
```

---

## **10. `Object.is()` – দুইটি অবজেক্ট বা মান সমান কি না তা চেক করা**  
এই মেথডটি `===` অপারেটরের মতো কাজ করে, তবে কিছু ব্যতিক্রম হ্যান্ডেল করতে পারে।

```js
console.log(Object.is(10, 10)); // Output: true
console.log(Object.is({}, {})); // Output: false (কারণ আলাদা reference)
console.log(Object.is(NaN, NaN)); // Output: true (সাধারণ === হলে false রিটার্ন করতো)
```

---

## **11. `Object.defineProperty()` – নতুন প্রপার্টি যোগ করে কাস্টম কনফিগারেশন সেট করা**  
এই মেথডটি অবজেক্টের কোনো নির্দিষ্ট প্রপার্টির কনফিগারেশন সেট করতে ব্যবহৃত হয়।

```js
const person = {};

Object.defineProperty(person, 'name', {
    value: 'John',
    writable: false, // মান পরিবর্তন করা যাবে না
    enumerable: true, // লুপে দেখা যাবে
    configurable: false // মুছে ফেলা যাবে না
});

console.log(person.name); // Output: 'John'

person.name = 'Doe'; // পরিবর্তন সম্ভব নয়
console.log(person.name); // Output: 'John'
```

---

## **12. `Object.getPrototypeOf()` – অবজেক্টের প্রোটোটাইপ খুঁজে বের করা**  
এই মেথডটি কোনো অবজেক্টের **প্রোটোটাইপ (prototype)** রিটার্ন করে।

```js
const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype);
// Output: true
```

---

## **13. `Object.setPrototypeOf()` – অবজেক্টের প্রোটোটাইপ সেট করা**  
এই মেথডটি অবজেক্টের প্রোটোটাইপ পরিবর্তন করতে ব্যবহৃত হয়।

```js
const parent = { greet: function() { console.log("Hello!"); } };
const child = {};

Object.setPrototypeOf(child, parent);
child.greet();  // Output: Hello!
```

---

## **সংক্ষেপে**
| Method | কাজ |
|--------|-------|
| `Object.keys()` | সব key (property) অ্যারে হিসেবে রিটার্ন করে |
| `Object.values()` | সব value অ্যারে হিসেবে রিটার্ন করে |
| `Object.entries()` | key-value অ্যারে আকারে রিটার্ন করে |
| `Object.assign()` | অবজেক্ট মার্জ করে |
| `Object.freeze()` | অবজেক্ট পরিবর্তন প্রতিরোধ করে |
| `Object.seal()` | নতুন প্রপার্টি যোগ করতে দেবে না, কিন্তু মান পরিবর্তন করা যাবে |
| `Object.hasOwnProperty()` | অবজেক্টে নির্দিষ্ট প্রপার্টি আছে কিনা চেক করে |
| `Object.getOwnPropertyNames()` | সব প্রপার্টি রিটার্ন করে (non-enumerable সহ) |
| `Object.fromEntries()` | key-value পেয়ার থেকে অবজেক্ট তৈরি করে |
| `Object.is()` | দুইটি মান বা অবজেক্ট সমান কি না চেক করে |
| `Object.defineProperty()` | প্রপার্টির কনফিগারেশন সেট করে |
| `Object.getPrototypeOf()` | অবজেক্টের প্রোটোটাইপ খুঁজে বের করে |
| `Object.setPrototypeOf()` | অবজেক্টের প্রোটোটাইপ পরিবর্তন করে |

---

**এই মেথডগুলো অবজেক্ট নিয়ে কাজ করার জন্য খুবই গুরুত্বপূর্ণ। 
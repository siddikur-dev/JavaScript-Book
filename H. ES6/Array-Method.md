### **ES6 এর গুরুত্বপূর্ণ Array Methods এবং তাদের ব্যাখ্যা**  

ES6 (ECMAScript 2015) এবং পরবর্তী আপডেটগুলোতে অ্যারে ম্যানিপুলেশনের জন্য বেশ কিছু শক্তিশালী মেথড যুক্ত হয়েছে। নিচে **প্রয়োজনীয় ও সবচেয়ে ব্যবহৃত** কিছু অ্যারে মেথড ব্যাখ্যা করা হলো:

---

## **1. `forEach()` – প্রতিটি আইটেমের উপর লুপ চালানো**  
এই মেথডটি একটি কলব্যাক ফাংশন চালায় এবং অ্যারেতে থাকা প্রতিটি উপাদানের জন্য একবার করে কাজ করে।  

```js
const numbers = [1, 2, 3, 4];

numbers.forEach(num => {
    console.log(num * 2);
});
// Output: 2, 4, 6, 8
```

---

## **2. `map()` – নতুন অ্যারে তৈরি করা (Transform করা)**  
`map()` মেথডটি মূল অ্যারেটিকে পরিবর্তন না করেই নতুন একটি অ্যারে তৈরি করে এবং প্রতিটি উপাদানের উপর নির্দিষ্ট ফাংশন প্রয়োগ করে।  

```js
const numbers = [1, 2, 3, 4];

const squared = numbers.map(num => num ** 2);
console.log(squared);
// Output: [1, 4, 9, 16]
```

---

## **3. `filter()` – নির্দিষ্ট শর্ত অনুযায়ী উপাদান বাছাই**  
এই মেথডটি একটি কন্ডিশন অনুযায়ী অ্যারের মধ্যে থাকা উপাদানগুলিকে ফিল্টার করে এবং নতুন অ্যারে তৈরি করে।

```js
const numbers = [10, 25, 30, 45, 50];

const filteredNumbers = numbers.filter(num => num > 25);
console.log(filteredNumbers);
// Output: [30, 45, 50]
```

---

## **4. `reduce()` – অ্যারেতে সংক্ষিপ্ত হিসাব করা**  
এই মেথডটি অ্যারের সব উপাদান একত্র করে একক মানে পরিণত করে (যেমন – যোগফল, গড়, সর্বোচ্চ মান)।  

```js
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// Output: 10
```
> **ব্যাখ্যা:**  
> - `acc` (accumulator) = আগের ধাপে যোগফল  
> - `num` = বর্তমান উপাদান  
> - `0` = শুরুর মান  

---

## **5. `find()` – শর্ত অনুযায়ী প্রথম মিল পাওয়া উপাদান খোঁজা**  
এই মেথডটি এমন একটি উপাদান খোঁজে যা নির্দিষ্ট শর্ত পূরণ করে।  

```js
const numbers = [10, 20, 30, 40];

const foundNumber = numbers.find(num => num > 25);
console.log(foundNumber);
// Output: 30
```

---

## **6. `findIndex()` – নির্দিষ্ট উপাদানের ইনডেক্স খুঁজে বের করা**  
এই মেথডটি `find()`-এর মতোই কাজ করে, তবে এটি উপাদানের পরিবর্তে **ইনডেক্স** রিটার্ন করে।

```js
const numbers = [10, 20, 30, 40];

const index = numbers.findIndex(num => num > 25);
console.log(index);
// Output: 2  (30-এর ইনডেক্স)
```

---

## **7. `some()` – কমপক্ষে একটি শর্ত মিললে `true` রিটার্ন করা**  
এই মেথডটি চেক করে যে, অ্যারেতে **কমপক্ষে একটি উপাদান** নির্দিষ্ট শর্ত পূরণ করে কি না।

```js
const numbers = [1, 2, 3, 4];

const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);
// Output: true  (কারণ 2, 4 জোড় সংখ্যা)
```

---

## **8. `every()` – সব উপাদান শর্ত পূরণ করলে `true` রিটার্ন করা**  
এই মেথডটি `some()`-এর বিপরীত। এখানে অ্যারের **প্রতিটি উপাদান** শর্ত পূরণ করলে `true` রিটার্ন করবে।

```js
const numbers = [2, 4, 6, 8];

const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);
// Output: true
```

---

## **9. `sort()` – অ্যারে সাজানো**  
এই মেথডটি অ্যারেতে থাকা উপাদানগুলোকে **অ্যালফাবেটিক্যালি বা সংখ্যা অনুযায়ী** সাজায়।

```js
const numbers = [30, 10, 50, 20, 40];

numbers.sort((a, b) => a - b);
console.log(numbers);
// Output: [10, 20, 30, 40, 50]  (Ascending Order)
```
> **ব্যাখ্যা:**  
> - `a - b` ব্যবহার করলে **Ascending Order (ছোট থেকে বড়)** সাজাবে।  
> - `b - a` ব্যবহার করলে **Descending Order (বড় থেকে ছোট)** সাজাবে।

---

## **10. `reverse()` – অ্যারে উল্টো করে ফেলা**  
এই মেথডটি অ্যারের উপাদানগুলোর ক্রম উল্টে দেয়।

```js
const numbers = [10, 20, 30, 40];

numbers.reverse();
console.log(numbers);
// Output: [40, 30, 20, 10]
```

---

## **11. `includes()` – নির্দিষ্ট উপাদান অ্যারেতে আছে কি না তা চেক করা**  
এই মেথডটি `true` বা `false` রিটার্ন করে।

```js
const fruits = ['apple', 'banana', 'mango'];

console.log(fruits.includes('banana'));  // Output: true
console.log(fruits.includes('grape'));   // Output: false
```

---

## **12. `concat()` – দুটি বা তার বেশি অ্যারে একত্র করা**  
এই মেথডটি অ্যারে মিলে **নতুন অ্যারে** তৈরি করে।

```js
const arr1 = [1, 2];
const arr2 = [3, 4];

const newArray = arr1.concat(arr2);
console.log(newArray);
// Output: [1, 2, 3, 4]
```

---

## **13. `join()` – অ্যারেকে স্ট্রিংয়ে রূপান্তর করা**  
এই মেথডটি অ্যারেকে স্ট্রিংয়ে পরিবর্তন করে এবং **প্রতিটি উপাদানের মধ্যে নির্দিষ্ট আলাদা চিহ্ন যোগ করে।**

```js
const words = ['Hello', 'World'];

const sentence = words.join(' ');
console.log(sentence);
// Output: "Hello World"
```

---

## **14. `splice()` – অ্যারে থেকে উপাদান মুছে ফেলা বা যোগ করা**  
এই মেথডটি নির্দিষ্ট ইনডেক্স থেকে উপাদান **মুছে ফেলে** বা নতুন উপাদান **যোগ করে।**

```js
const numbers = [10, 20, 30, 40];

numbers.splice(1, 2);  // 1নং ইনডেক্স থেকে ২টি এলিমেন্ট মুছে ফেলবে
console.log(numbers);
// Output: [10, 40]
```

---

## **15. `slice()` – অ্যারের নির্দিষ্ট অংশ কপি করা**  
এই মেথডটি একটি নির্দিষ্ট অংশ **কপি** করে নতুন অ্যারে তৈরি করে।

```js
const numbers = [10, 20, 30, 40, 50];

const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers);
// Output: [20, 30, 40]
```

---

## **শেষ কথা**  
এই মেথডগুলো **প্রোগ্রামিংয়ে ডাটা ম্যানিপুলেশন** এবং **অ্যারে নিয়ে কাজ করার ক্ষেত্রে** অনেক বেশি গুরুত্বপূর্ণ।
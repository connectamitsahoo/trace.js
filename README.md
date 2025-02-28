# Trace.js - Lightweight jQuery Text Highlighter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![jQuery](https://img.shields.io/badge/jQuery-Required-blue.svg)](https://jquery.com/)

<p align="center">
    <img src="https://raw.githubusercontent.com/connectamitsahoo/trace.js/main/assets/logo.png" alt="Trace.js Logo" width="200">
</p>

Trace.js is a **lightweight and customizable jQuery plugin** for highlighting words or phrases inside HTML elements.  
Supports **case sensitivity, full/partial matches**, and **dynamic styling**.

## 🚀 Features

✅ **Highlight Specific Words**  
✅ **Full or Partial Word Matching**  
✅ **Case Sensitivity Option**  
✅ **Custom Highlight Colors**  
✅ **Easy Unhighlighting with `.untrace()`**  

---

## 📦 Installation

### 1️⃣ **Install via npm**
```html
npm install trace-text-highlighter
```


### 2️⃣ **CDN (Recommended)**
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/connectamitsahoo/trace.js@latest/dist/trace.min.js"></script>
```

### 3️⃣ **Download Manually**
[Download Trace.js](https://github.com/connectamitsahoo/trace.js) Include it after jQuery:
```html
<script src="jquery.min.js"></script>
<script src="trace.js"></script>
```

## 🛠 Usage

### **Basic Highlight**
```js
$("#content").trace({
    match: "highlight",  // Word to highlight
    color: "yellow"     // Highlight color (default: yellow)
});
```
### Full Word Matching
```js
$("#content").trace({
    match: "word",
    traceType: "full" // Only highlights full words
});
```
### Case-Sensitive Highlight

```js
$("#content").trace({
    match: "case",
    caseSensitive: true
});
```

### Remove Highlights

```js
$("#content").untrace();
```

### ⚙ Options
| Option          | Type    | Default     | Description                                                                |
| --------------- | ------- | ----------- | -------------------------------------------------------------------------- |
| `match`         | String  | `null`      | **Required** - The word/phrase to highlight.                               |
| `color`         | String  | `"yellow"`  | Highlight color (supports named colors & hex codes).                       |
| `traceType`     | String  | `"partial"` | `"partial"` (matches within words) or `"full"` (matches whole words only). |
| `caseSensitive` | Boolean | `false`     | Enables case-sensitive matching.                                           |


## 🔧 **Example Code**
```html
<div id="content">
    jQuery is a fast, small, and feature-rich JavaScript library.
</div>

<script>
    $(document).ready(function () {
        $("#content").trace({ match: "jQuery", color: "lightblue" });
    });
</script>
```

## 🔑 License

This project is licensed under the **MIT License**.

**Author**: Amit\
**Version**: 1.0.1\
**GitHub Repository**: [Trace.js on GitHub](https://github.com/connectamitsahoo/trace.js)

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss your ideas.

## ⭐ Like This? Star the Repo! ⭐

```sh
git clone https://github.com/connectamitsahoo/trace.js.git
```

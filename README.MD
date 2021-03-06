# Active Anchor

The package adds `active` class to links while scrolling and creates an offset for a sticky header when scrolling by an anchor.

## Installation

`npm install active-anchor`

## Usage

```javascript
import activeAnchor from 'active-anchor';

activeAnchor.init({
  headerId: 'js-header',  // Optional, if need an offset for a sticky header
  offset: 0,              // Optional, an additional offset size
  navbarId: 'js-navbar'   // Optional, `js-navbar` is default 
});
```
```html
<div id="js-navbar">
  <a href="#hello">Hello</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
</div>


<div id="hello">...</div>

<div id="news">...</div>

<div id="contact">...</div>
```
```css
:root {
  scroll-behavior: smooth;
}
```
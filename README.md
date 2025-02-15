# CSS
## **Positions**  
CSS provides different positioning methods:  
- **`static`** – Default position in normal document flow.  
- **`relative`** – Positioned relative to its original place.  
- **`absolute`** – Positioned relative to the nearest positioned ancestor,or the document if no ancestor is provided.  
- **`fixed`** – Stays in place even when scrolling.  
- **`sticky`** – Switches between relative and fixed based on scroll position.  

## **Types of `<a>` Tags**  
The `<a>` tag is used for different types of links:  
- **Standard Link:** `<a href="page.html">Click Here</a>`  
- **Email Link:** `<a href="mailto:example@email.com">Send Email</a>`  
- **Phone Link:** `<a href="tel:+123456789">Call Now</a>`  
- **Download Link:** `<a href="file.pdf" download>Download PDF</a>`  
- **Anchor Link:** `<a href="#section">Go to Section</a>`  
- **External Link:** `<a href="https://example.com" target="_blank" rel="noopener">Visit Site</a>`  

### **Styling `<a>` Tags**  
- `color` – Defines the text color.  
- `text-decoration` – Removes or modifies underlines.  
- `hover`, `active`, `visited`, `focus` – Control appearance in different states.  
- `cursor: pointer;` – Improves usability.  

## **Nav Bars & Types**  
Navigation bars can be styled in different ways:  
- **Horizontal Navbar** – Uses `display: flex;` or `inline-block;`.  
- **Vertical Navbar** – Uses `display: block;` for stacked links.  
- **Fixed Navbar** – `position: fixed;` keeps it on the screen while scrolling.  
- **Sticky Navbar** – `position: sticky;` remains visible when scrolling.  
- **Dropdown Navbar** – Includes hover or click-triggered submenus.  

## **Buttons**  
- Styled with `background-color`, `border`, `padding`, and `border-radius`.  
- States like `hover`, `active`, and `focus` improve interactivity.  
- `box-shadow` adds depth, and `transition` creates smooth effects.  

## **Float**  
- Used for aligning elements (`float: left;` or `float: right;`).  
- Requires `clear: both;` to prevent layout issues.  
- Largely replaced by `flexbox` and `grid`.  

## **Dropdowns**  
- Created with `position: absolute;` inside a parent container.  
- Hidden by default (`display: none;`), shown on `:hover` or with JavaScript.
- `visibility: hidden;` – Hides the element but keeps its space reserved.  
- Can include animations for smooth appearance.

## ****[Examples](https://annwanjiku.github.io/positionsIncss/)****

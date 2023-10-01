# Double Range Slider
A complete solution for double range slider. Here you can grab the slider, change via input field. It's dynamic, you can set even range step. and min value will never override the maximum and maximum as well as never get less than minimum.

## Installation
You can start using it with CDN
```html
<link href="https://cdn.jsdelivr.net/gh/jahiidh/double-range-slider/d.slider.css" rel="stylesheet"/>
```
```html
<script src="https://cdn.jsdelivr.net/gh/jahiidh/double-range-slider/d.slider.js"></script>
```

```html
<div class="double-range">
  <div class="range-slider">
    <span class="range-fill"></span>
  </div>
  <div class="range-input">
    <input type="range" class="min" min="0" max="100" value="30" step="1" />
    <input type="range" class="max" min="0" max="100" value="70" step="1" />
  </div>
  <div class="text-input">
    <label for="min">Min</label>
    <input type="number" name="min" value="30" />
    <label for="max">Max</label>
    <input type="number" name="max" value="70" />
  </div>
</div>
```

```javascript
let step = 1;
const range = document.querySelector(".range-fill");
const ri = document.querySelectorAll(".range-input input");
const ti = document.querySelectorAll(".text-input input");

dRange(range, ri, ti, step);
```


## Complete code
If you don't want to download, then just copy the html from just before I mentioned. Then copy this css code and past inside your style tag or in css file. and the last, copy the JavaScrit code. It's a vanilla JS, so don't need worry about any third party library.

```css
.range-slider {
  height: 5px;
  position: relative;
  background-color: #e1e9f6;
  border-radius: 2px;
  left: 2px;
}
.range-fill {
  height: 100%;
  left: 30%;
  right: 30%;
  position: absolute;
  border-radius: 5px;
  background-color: #ffc013;
}
.range-input {
  position: relative;
}
.range-input input {
  position: absolute;
  width: 100%;
  height: 5px;
  top: -7px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.range-input input::-webkit-slider-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #ffc013;
  pointer-events: auto;
  -webkit-appearance: none;
  cursor: pointer;
}
.range-input input::-moz-range-thumb {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #ffc013;
  pointer-events: auto;
  -moz-appearance: none;
  cursor: pointer;
}
.text-input {
  margin: 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```javascript
let step = 1;
const range = document.querySelector(".range-fill");
const ri = document.querySelectorAll(".range-input input");
const ti = document.querySelectorAll(".text-input input");
dRange(range, ri, ti, step);

function dRange(range, ri, ti, step) {
  ri.forEach((z) => {
      z.addEventListener("input", (e) => {
      let minRange = parseInt(ri[0].value);
      let maxRange = parseInt(ri[1].value);
      if (maxRange - minRange < step) {
          if (e.target.className === "min") {
          ri[0].value = maxRange - step;
          } else {
          ri[1].value = minRange + step;
          }
      } else {
          ti[0].value = minRange;
          ti[1].value = maxRange;
          range.style.left = (minRange / parseInt(ri[0].max)) * 100 + "%";
          range.style.right = 100 - (maxRange / parseInt(ri[1].max)) * 100 + "%";
      }
      });
  });

  ti.forEach((z) => {
      z.addEventListener("input", (e) => {
      let minval = parseInt(ti[0].value);
      let maxval = parseInt(ti[1].value);

      if (maxval - minval >= step && maxval <= parseInt(ri[1].max)) {
          if (e.target.name === "min") {
          ri[0].value = minval;
          range.style.left = (minval / parseInt(ri[0].max)) * 100 + "%";
          } else {
          ri[1].value = maxval;
          range.style.right = 100 - (maxval / parseInt(ri[1].max)) * 100 + "%";
          }
      } else {
          if (minval >= maxval) {
          minval = maxval - 1;
          ti[0].value = minval;
          ri[0].value = minval;
          range.style.left = (minval / parseInt(ri[0].max)) * 100 + "%";

          if (e.target.name == "max") {
              ri[1].value = maxval;
              range.style.right =
              100 - (maxval / parseInt(ri[1].max)) * 100 + "%";
          }
          } else if (maxval > parseInt(ri[1].max)) {
          maxval = parseInt(ri[1].max);

          ti[1].value = maxval;

          ri[1].value = maxval;
          range.style.right = 100 - (maxval / parseInt(ri[1].max)) * 100 + "%";
          console.log("hello1");
          } else {
          console.log("hello");
          }
      }
      });
  });
  }
```

Have a good day. Enjoy!

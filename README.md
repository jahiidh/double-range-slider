# Double Range Slider v.2.0

A complete solution for double range slider. Here you can grab the slider, change via input field. It's dynamic, you can set even range step. and min value will never override the maximum and maximum as well as never get less than minimum.

## Demo Screenshot

![Screenshot](./media/demo-screenshot.png)

## Installation

You can start using it with CDN

```html
<link href="https://cdn.jsdelivr.net/gh/jahiidh/double-range-slider/d.slider.css" rel="stylesheet" />
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
const range = document.querySelector(".double-range .range-fill");
const range_input = document.querySelectorAll(".double-range .range-input input");
const text_input = document.querySelectorAll(".double-range .text-input input");

dRange(range, range_input, text_input, step);
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
  background-color: #02753c;
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
  background-color: #e90000;
  border: 4px solid #02753c;
  pointer-events: auto;
  -webkit-appearance: none;
  cursor: pointer;
}
.range-input input::-moz-range-thumb {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #e90000;
  border: 2px solid #332e1f;
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
const range = document.querySelector(".double-range .range-fill");
const range_input = document.querySelectorAll(".double-range .range-input input");
const text_input = document.querySelectorAll(".double-range .text-input input");

dRange(range, range_input, text_input, step);

function dRange(range, ri, ti, step) {
  ri.forEach((z) => {
    z.addEventListener("input", (e) => {
      ti[0].value = ri[0].value;
      ti[1].value = ri[1].value;
      update_dRange();
    });
  });

  ti.forEach((z) => {
    z.addEventListener("input", (e) => {
      ri[0].value = ti[0].value;
      ri[1].value = ti[1].value;
      update_dRange();
    });
  });
  ti.forEach((z) => {
    z.addEventListener("change", (e) => {
      update_dRange(true);
    });
  });

  let update_dRange = (change = false) => {
    let def_min = parseFloat(ri[0].min);
    let def_max = parseFloat(ri[0].max);

    let minval = parseFloat(ri[0].value);
    let maxval = parseFloat(ri[1].value);

    let step_per_percentage = 100 / (def_max - def_min);

    if (def_min >= minval) {
      minval = def_min;
      if (change) {
        ti[0].value = def_min;
        ri[0].value = def_min;
      }
    }
    if (maxval <= def_min) {
      maxval = def_min + parseFloat(step);
      if (change) {
        ti[1].value = maxval;
        ri[1].value = maxval;
      }
    }
    range.style.left = (minval - def_min) * step_per_percentage + "%";
    range.style.right = 100 - (maxval - def_min) * step_per_percentage + "%";
  };
  update_dRange();
}
```

Have a good day. Enjoy!

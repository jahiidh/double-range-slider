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

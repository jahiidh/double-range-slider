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

let faq_box = document.querySelectorAll(".faq_box");

faq_box.forEach((box) => {
  box.addEventListener("click", () => {
    let faq_box_p = box.querySelector(".faq_box_p");
    faq_box_p.classList.toggle("block");

    let faq_box_h3 = box.querySelector(".faq_box_h3");
    faq_box_h3.classList.toggle("font_w");

    let icon = box.querySelector(".fa-chevron-down");
    icon.classList.toggle("rot_down");
    icon.classList.toggle("rot_up");
  });
});

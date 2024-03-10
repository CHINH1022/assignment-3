function handleSubmit() {
  //Lay gia tri cua input email va chuyen sang in thuong
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  //lay element cua the p hien thi loi
  const errorEmail = document.getElementById("error-email");

  //dieu kien la email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //Dung match de kiem tra email vua nhap
  const checkMail = emailValue.match(regex);
  //Lay phan chua thong tin user
  const content = document.querySelector("#personal-info .content");
  console.log("check section", content);

  //Lay element de kiem soat submit
  const submitControl = document.querySelector(".submit-email");
  if (checkMail) {
    content.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}

//AN THONG TIN
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (viewMore.classList.value.includes("view-less")) {
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  const parentelement = element.closest(".parent");
  const viewMore = parentelement.querySelector(".control-view");
  const noiDung = parentelement.querySelectorAll(".noidung");
  if (viewMore.classList.value.includes("view-more")) {
    noiDung.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("view-less");
    viewMore.innerHTML == "View less";
  } else {
    noiDung.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("view-less");
    viewMore.classList.add("view-more");
    viewMore.innerHTML == "View more";
  }
}

function Signup(event) {
  event.preventDefault();
  // Lấy giá trị từ ô nhập liệu
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;

  // Xóa thông báo lỗi hiện tại
  clearErrors();

  // Kiểm tra ô name và ô password không được để trống
  if (name.trim() === "") {
    displayError("nameError", "Vui lòng nhập tên người dùng.");
    return;
  }
  if (password.trim() === "") {
    displayError("passwordError", "Vui lòng nhập mật khẩu.");
    return;
  }

  // Hiển thị thông báo đăng nhập thành công
  alert("Chúc mừng bạn đăng nhập thành công!");
}

function displayError(elementId, errorMessage) {
  let errorElement = document.getElementById(elementId);
  errorElement.innerText = errorMessage;
  // Tìm ô input tương ứng
  var inputElement = document.getElementById(elementId.replace("Error", ""));
  if (inputElement) {
    inputElement.classList.add("error-input");
  }
}

function clearErrors() {
  var errorElements = document.getElementsByClassName("error");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].innerText = "";
  }
}
// // Kiểm tra tên người dùng và mật khẩu có đúng với dữ liệu từ indexdb hay không
// if (checkCredentials(name, password)) {
//   // Chuyển hướng đến trang quản lý người dùng
//   window.location.href = "management.html";
// } else {
//   // Hiển thị thông báo lỗi
//   document.getElementById("passwordError").innerHTML = "Tên người dùng hoặc mật khẩu không chính xác.";
// }

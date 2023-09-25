// viet bang js thuần
// function validateForm() {
//     let nameInput = document.getElementById("name").value;
//     let emailInput = document.getElementById("email").value;
//     let phoneNumberInput = document.getElementById("phonenumber").value;
//     let sexInputs = document.getElementsByName("sex");
//     let usernameInput = document.getElementById("nameuser").value;
//     let passwordInput = document.getElementById("password").value;
//     let confirmPasswordInput = document.getElementById("confirmpassword").value;

//     // Xóa thông báo lỗi cũ
//     clearErrors();

//     // Kiểm tra tính hợp lệ của ô #name
//     if (nameInput.trim() === "") {
//       displayError("nameError", "Họ và tên không được bỏ trống.");
//       return false;
//     } else if (nameInput.length < 5) {
//       displayError("nameError", "Họ và tên phải có ít nhất 5 ký tự.");
//       return false;
//     }

//     // Kiểm tra tính hợp lệ của ô #phonenumber
//     if (phoneNumberInput.trim() === "") {
//       displayError("phonenumberError", "Số điện thoại không được bỏ trống.");
//       return false;
//     } else if (phoneNumberInput.length < 10 || phoneNumberInput.length > 12 || phoneNumberInput.charAt(0) !== "0") {
//       displayError("phonenumber", "Số điện thoại không hợp lệ.");
//       return false;
//     };

//     // Kiểm tra tính hợp lệ của ô #email
//     if (emailInput.trim() === "") {
//        displayError("emailError", "Email không được bỏ trống.");
//        return false;
//     } else if (!emailInput.includes("@") || !emailInput.includes(".com")) {
//        displayError("emailError", "Email không hợp lệ.");
//        return false;
//      };

//      // Kiểm tra tính hợp lệ của ô #sex
//     var selectedSex = false;
//     for (var i = 0; i < sexInputs.length; i++) {
//       if (sexInputs[i].checked) {
//         selectedSex = true;
//         break;
//       }
//     }
//     if (!selectedSex) {
//       displayError("sexError", "Vui lòng chọn giới tính.");
//       return false;
//     }

//     // Kiểm tra tính hợp lệ của ô #nameuser
//     if (usernameInput.trim() === "") {
//       displayError("nameuserError", "");
//       return false;
//     } else if (usernameInput.length < 6) {
//       displayError("nameuserError", "Tên người dùng phải có ít nhất 6 ký tự.");
//       return false;
//     }

//     // Kiểm tra tính hợp lệ của ô #password
//     if (passwordInput.trim() === "") {
//       displayError("passwordError", "Mật khẩu phải có ít nhất 8 ký tự.");
//       return false;
//     } else if(passwordInput.length < 8 || !/[A-Z]/.test(passwordInput) || !/[a-z]/.test(passwordInput) || !/[@#$&]/.test(passwordInput) || !/\d/.test(passwordInput)) {
//       displayError("passwordError", "Mật khẩu không đáp ứng yêu cầu bảo mật. Mật khẩu phải có chứa ít nhất 8 ký tự, chứa ít nhất 1 ký tự viết hoa, 1 ký tự viết thường, 1 ký tự đặt biệt trong dãy (@#$&) và 1 ký tự số.");
//     }

//     // Kiểm tra tính hợp lệ của ô #confirmpassword
//     if (confirmPasswordInput !== passwordInput) {
//       displayError("confirmpasswordError", "Mật khẩu xác nhận không khớp.");
//       return false;
//     }

//     // nếu tất cả hợp lệ thì hiện alert dk thành công
//     alert(" Chúc mừng bạn đả đăng ký thành công!");
//     return true;
//   }

//   function displayError(elementId, errorMessage) {
//   var errorElement = document.getElementById(elementId);
//   errorElement.innerText = errorMessage;
//   errorElement.style.display = "block";
//   errorElement.style.color = "red";
//   errorElement.style.marginTop = "5px";
//   errorElement.style.fontSize = "14px";

// // Tìm ô input tương ứng
//   var inputElement = document.getElementById(elementId.replace("Error", ""));
//    if (inputElement) {
//    inputElement.classList.add("error-input");
//    }
// }

//   function clearErrors() {
//     var errorElements = document.getElementsByClassName("error");
//     for (var i = 0; i < errorElements.length; i++) {
//       errorElements[i].innerText = "";
//       errorElements[i].style.display = "none";
//     }
// }
// viết bằng j query
function Signin() {
  let nameInput = $("#name").val();
  let emailInput = $("#email").val();
  let phoneNumberInput = $("#phonenumber").val();
  let sexInputs = $("input[name='sex']");
  let usernameInput = $("#nameuser").val();
  let passwordInput = $("#password").val();
  let confirmPasswordInput = $("#confirmpassword").val();

  // Xóa thông báo lỗi cũ
  clearErrors();

  // Kiểm tra tên
  if ($.trim(nameInput) === "") {
    displayError("nameError", "Họ và tên không được bỏ trống.");
    return false;
  } else if (nameInput.length < 5) {
    displayError("nameError", "Họ và tên phải có ít nhất 5 ký tự.");
    return false;
  }

  // Kiểm tra số điện thoại
  if ($.trim(phoneNumberInput) === "") {
    displayError("phonenumberError", "Số điện thoại không được bỏ trống.");
    return false;
  } else if (
    phoneNumberInput.length < 10 ||
    phoneNumberInput.length > 12 ||
    phoneNumberInput.charAt(0) !== "0"
  ) {
    displayError("phonenumberError", "Số điện thoại không hợp lệ.");
    return false;
  }

  // Kiểm tra email
  if ($.trim(emailInput) === "") {
    displayError("emailError", "Email không được bỏ trống.");
    return false;
  } else if (!emailInput.includes("@") || !emailInput.includes(".com")) {
    displayError("emailError", "Email không hợp lệ.");
    return false;
  }

  // Kiểm tra giới tính
  var selectedSex = false;
  sexInputs.each(function () {
    if ($(this).is(":checked")) {
      selectedSex = true;
      return false;
    }
  });
  if (!selectedSex) {
    displayError("sexError", "Vui lòng chọn giới tính.");
    return false;
  }

  // Kiểm tra tên người dùng
  if ($.trim(usernameInput) === "") {
    displayError("nameuserError", "");
    return false;
  } else if (usernameInput.length < 6) {
    displayError("nameuserError", "Tên người dùng phải có ít nhất 6 ký tự.");
    return false;
  }

  // Kiểm tra mật khẩu
  if ($.trim(passwordInput) === "") {
    displayError("passwordError", "Mật khẩu phải có ít nhất 8 ký tự.");
    return false;
  } else if (
    passwordInput.length < 8 ||
    !/[A-Z]/.test(passwordInput) ||
    !/[a-z]/.test(passwordInput) ||
    !/[@#$&]/.test(passwordInput) ||
    !/\d/.test(passwordInput)
  ) {
    displayError(
      "passwordError",
      "Mật khẩu không đáp ứng yêu cầu bảo mật. Mật khẩu phải có chứa ít nhất 8 ký tự, chứa ít nhất 1 ký tự viết hoa, 1 ký tự viết thường, 1 ký tự đặt biệt trong dãy (@#$&) và 1 ký tự số."
    );
    return false;
  }


  if (confirmPasswordInput !== passwordInput) {
    displayError("confirmpasswordError", "Mật khẩu xác nhận không khớp.");
    return false;
  }

  var user = {
    name: nameInput,
    email: emailInput,
    phoneNumber: phoneNumberInput,
    sex: $("input[name='sex']:checked").val(),
    username: usernameInput,
    password: passwordInput
  };


  var request = indexedDB.open("myDatabase", 1);

  request.onerror = function(event) {
    console.log("Lỗi kết nối tới cơ sở dữ liệu IndexedDB");
  };

  request.onsuccess = function(event) {
    var db = event.target.result;


    var transaction = db.transaction(["users"], "readwrite");

 
    var usersStore = transaction.objectStore("users");


    var addUserRequest = usersStore.add(user);

    addUserRequest.onsuccess = function(event) {
      console.log("Lưu trữ thành công vào IndexedDB");
    };

    addUserRequest.onerror = function(event) {
      console.log("Lỗi khi lưu trữ vào IndexedDB");
    };

    transaction.oncomplete = function(event) {
      console.log("Giao dịch hoàn tất");
    };

    transaction.onerror = function(event) {
      console.log("Lỗi giao dịch");
    };

    db.close();
  };

  request.onupgradeneeded = function(event) {
    var db = event.target.result;

 
    if (!db.objectStoreNames.contains("users")) {
      db.createObjectStore("users", { autoIncrement: true });
    }
  };

  alert("Chúc mừng bạn đã đăng ký thành công!");
  return true;
}

function displayError(elementId, errorMessage) {
  var errorElement = $("#" + elementId);
  errorElement.text(errorMessage);
  errorElement.show();
  errorElement.css({
    color: "red",
    marginTop: "5px",
    fontSize: "14px",
  });

  // Tìm ô input tương ứng
  var inputElement = $("#" + elementId.replace("Error", ""));
  if (inputElement) {
    inputElement.addClass("error-input");
  }
}

function clearErrors() {
  $(".error").each(function () {
    $(this).text("");
    $(this).hide();
  });
}

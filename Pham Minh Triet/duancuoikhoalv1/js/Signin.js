function Signin(event) {
  event.preventDefault();
  let nameInput = $("#name").val();
  let emailInput = $("#email").val();
  let phoneNumberInput = $("#phonenumber").val();
  let sexInputs = $("input[name='sex']");
  let usernameInput = $("#nameuser").val();
  let passwordInput = $("#password").val();
  let confirmPasswordInput = $("#confirmpassword").val();

  // Xóa thông báo lỗi cũ
  clearErrors();
// Xóa lỗi error-input khi người dùng thay đổi giá trị trong ô input
$("input").on("input", function() {
  $(this).removeClass("error-input");
});
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
    displayError("nameuserError", "Tên người dùng không được bỏ trống.!");
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
// Tạo đối tượng user từ thông tin nhập vào

  var user = {
    name: nameInput,
    email: emailInput,
    phoneNumber: phoneNumberInput,
    sex: $("input[name='sex']:checked").val(),
    username: usernameInput,
    password: passwordInput
  };

// Mở kết nối với cơ sở dữ liệu IndexedDB
  var request = indexedDB.open("myDatabase", 1);
// Xử lý lỗi khi kết nối tới IndexedDB
  request.onerror = function (event) {
    console.log("Lỗi kết nối tới cơ sở dữ liệu IndexedDB");
  };
// Xử lý lỗi khi kết nối tới IndexedDB
  request.onsuccess = function (event) {
    var db = event.target.result;

// Bắt đầu giao dịch trên cơ sở dữ liệu
    var transaction = db.transaction(["users"], "readwrite");

  // Lấy object store "users"
    var usersStore = transaction.objectStore("users");

// Thêm user vào object store
    var addUserRequest = usersStore.add(user);
// Xử lý khi thêm user thành công
    addUserRequest.onsuccess = function (event) {
      console.log("Lưu trữ thành công vào IndexedDB");
    };
// Xử lý khi thêm user thất bại
    addUserRequest.onerror = function (event) {
      console.log("Lỗi khi lưu trữ vào IndexedDB");
    };
// Xử lý khi giao dịch hoàn tất
    transaction.oncomplete = function (event) {
      console.log("Giao dịch hoàn tất");
    };
// Xử lý lỗi trong quá trình giao dịch
    transaction.onerror = function (event) {
      console.log("Lỗi giao dịch");
    };
// Đóng kết nối tới IndexedDB
    db.close();
  };
// Xử lý khi cần nâng cấp cấu trúc cơ sở dữ liệu
  request.onupgradeneeded = function (event) {
    var db = event.target.result;

// Kiểm tra và tạo object store "users" nếu chưa tồn tại
    if (!db.objectStoreNames.contains("users")) {
      db.createObjectStore("users", { autoIncrement: true });
    }
  };
// hiển thị thông báo đăng ký thành công
  alert("Chúc mừng bạn đã đăng ký thành công!");
  return true;
}

function displayError(elementId, errorMessage) {
  var errorElement = $("#" + elementId);
  errorElement.text(errorMessage);
  errorElement.show();

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
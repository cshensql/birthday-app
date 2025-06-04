const FATHER_BIRTHDAY = "06-08"; // 设置爸爸生日：6月8日

const monthSelect = document.getElementById("monthSelect");
const daySelect = document.getElementById("daySelect");
const loginSection = document.getElementById("login-section");
const greetingSection = document.getElementById("greeting-section");
const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("errorMsg");

// 生成 1~31 日选项
for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.value = i.toString().padStart(2, "0");
  option.text = `${i}日`;
  daySelect.appendChild(option);
}

// 登录按钮点击事件
loginBtn.addEventListener("click", () => {
  const month = monthSelect.value;
  const day = daySelect.value;

  if (!month || !day) {
    errorMsg.textContent = "请完整选择月和日！";
    errorMsg.classList.remove("hidden");
    setTimeout(() => errorMsg.classList.add("hidden"), 3000);
    return;
  }

  const entered = `${month}-${day}`;
  if (entered === FATHER_BIRTHDAY) {
    loginSection.classList.add("hidden");
    greetingSection.classList.remove("hidden");
  } else {
    errorMsg.textContent = "生日输入错误，请重试！";
    errorMsg.classList.remove("hidden");
    setTimeout(() => errorMsg.classList.add("hidden"), 3000);
  }
});

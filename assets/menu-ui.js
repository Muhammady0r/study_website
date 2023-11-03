if (localStorage.getItem("logined") == 1) {
  for (let i of document.querySelectorAll(".user-email")) {
    i.textContent = localStorage.getItem("user-email");
  }
  for (let i of document.querySelectorAll(".user")) {
    i.classList.remove("hidden");
  }
  for (let i of document.querySelectorAll(".log-in")) {
    i.classList.add("hidden");
  }
  for (let i of document.querySelectorAll(".log-out")) {
    i.classList.remove("hidden");
  }
  if (document.querySelector(".user-name")) {
    document.querySelector(".user-name").textContent = `${localStorage.getItem(
      "user-name"
    )} ${localStorage.getItem("user-surname")}`;
    document.querySelector(".user").classList.remove("hidden");
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".login-warning").classList.add("hidden");
  }
}

const openMenu = (className) => {
  closeAll();
  document.querySelector(className).classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
};

const closeAll = () => {
  for (let i of document.querySelectorAll(".overlay-ui")) {
    if (!i.classList.contains("hidden")) {
      i.classList.add("hidden");
    }
  }
  document.querySelector(".overlay").classList.add("hidden");
};

const logout = () => {
  localStorage.removeItem("logined");
  localStorage.removeItem("user-email");
  localStorage.removeItem("user-name");
};

for (let i of document.querySelectorAll(".log-out")) {
  i.addEventListener("click", () => {
    logout();
    window.location.reload();
  });
}

document.querySelector(".menu-btn").addEventListener("click", () => {
  openMenu(".menu");
});

document.querySelector(".overlay").addEventListener("click", () => {
  closeAll();
});

document.addEventListener("keydown", (k) => {
  if (k.key == "Escape") {
    closeAll();
  }
});

for (let i of document.querySelectorAll(".login")) {
  i.addEventListener("click", () => {
    openMenu(".login-menu");
  });
}

document.querySelector(".login-btn").addEventListener("click", () => {
  if (
    !document.querySelector(".login-email").value.includes("@") ||
    !document.querySelector(".login-email").value.includes(".")
  ) {
    document.querySelector(".login-error").classList.remove("hidden");
    document.querySelector(".login-error").textContent = "Wrong email";
  } else if (document.querySelector(".login-name").value.length > 16) {
    document.querySelector(".login-error").classList.remove("hidden");
    document.querySelector(".login-error").textContent = "Name max lenth 16";
  } else if (document.querySelector(".login-surname").value.length > 16) {
    document.querySelector(".login-error").classList.remove("hidden");
    document.querySelector(".login-error").textContent = "Surname max lenth 16";
  } else if (document.querySelector(".login-email").value != "") {
    closeAll();
    localStorage.setItem(
      "user-email",
      document.querySelector(".login-email").value
    );
    localStorage.setItem(
      "user-name",
      document.querySelector(".login-name").value
    );
    localStorage.setItem(
      "user-surname",
      document.querySelector(".login-surname").value
    );
    localStorage.setItem("logined", 1);
    window.location.reload();
  }
});

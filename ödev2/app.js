const taskInput = document.getElementById("task");
const list = document.getElementById("list");
const successToast = document.querySelector(".toast.success");
const errorToast = document.querySelector(".toast.error");

// Yeni bir liste elemanı eklemek için fonksiyon
function newElement() {
  const inputValue = taskInput.value;
  if (inputValue === "") {
    showErrorToast("Listeye boş ekleme yapamazsınız!");
  } else {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue));
    list.appendChild(li);
    taskInput.value = "";
    showSuccessToast("Listeye eklendi.");
  }
}

// Toast mesajlarını göstermek için fonksiyonlar
function showSuccessToast(message) {
  const toastBody = successToast.querySelector(".toast-body");
  toastBody.textContent = message;
  const toastInstance = new bootstrap.Toast(successToast);
  toastInstance.show();
}

function showErrorToast(message) {
  const toastBody = errorToast.querySelector(".toast-body");
  toastBody.textContent = message;
  const toastInstance = new bootstrap.Toast(errorToast);
  toastInstance.show();
}

// Liste elemanını yapıldı olarak işaretlemek için fonksiyon
list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});

// Liste elemanını silmek için fonksiyon
list.addEventListener("contextmenu", function(event) {
  event.preventDefault();
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});

console.log("Frontend JS ishga tushdi");

function itemTemplate(item) {
  <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">${item.reja}</span>
    <div>
      <button
        data-id="${item._id}"
        class="edit-me btn btn-secondary btn-sm mr-1"
      >
        O'zgartirish
      </button>
      <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">
        O'chirish
      </button>
    </div>
  </li>;
  return ``;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: new_reja })
    .then((response) => {
      document
        .getElementById("item-list")
        .inserAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {});
});

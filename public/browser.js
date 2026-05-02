console.log("Frontend JS ishga tushdi");

function itemTemplate(item) {
  
  return ` <li 
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                <span class="item-text">${item.reja}</span>
                <div>
                    <button 
                    data-id="${item._id}" 
                    class="edit-me btn btn-secondary btn-sm mr-1">
                        Edit
                    </button>
                    <button 
                    data-id="${item._id}" 
                    class="delete-me btn btn-danger btn-sm">
                    Delete
                    </button>
                </div>
            </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form")
.addEventListener("submit", function (e) {
  e.preventDefault();
  // const new_reja = createField.value.trim();

  // if (!new_reja) {
  //   return;
  // }

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Please, try again!", err);
    });
});

document.addEventListener("click", function (e) {
  // dele oper
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if(confirm("Are You Sure to Delete?")) {
      // alert("You said yes")
      axios.post("/delete-item", {id: e.target.getAttribute("data-id")})
      .then((respose) => {
        console.log(respose.data);
        e.target.parentElement.parentElement.remove();
      })
      .catch((err) => {
        console.log("Please, Try Again!")
      });
    }
  }


  // edit operation
  if (e.target.classList.contains("edit-me")) {
    alert("You Pressed 'Edit' button!");
  }
});

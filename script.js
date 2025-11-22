document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const congviecInput = document.getElementById("congviec");
    const thoigianInput = document.getElementById("thoigian");

    const congviecText = congviecInput.value.trim();
    const thoigianText = thoigianInput.value.trim();

    if (congviecText && thoigianText) {
        const todoList = document.getElementById("todoList");
        const li = document.createElement("li");

        li.textContent = `${congviecText} - ${thoigianText}`;

        const deleteBtn = document.createElement("btn");
        deleteBtn.textContent = "delete";

        deleteBtn.addEventListener("click", function() {
            todoList.removeChild("li");
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        congviecInput.value = "";
        thoigianInput.value = "";
    }
});


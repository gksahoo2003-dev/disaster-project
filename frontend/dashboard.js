fetch("http://localhost:3000/all")
.then(res => res.json())
.then(data => {
    const list = document.getElementById("dataList");

    data.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.type} - ${item.location} - ${item.description}`;
        list.appendChild(li);
    });
});
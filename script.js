function submitData() {
    fetch("http://localhost:3000/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            type: document.getElementById("type").value,
            location: document.getElementById("location").value,
            description: document.getElementById("desc").value
        })
    })
    .then(res => res.text())
    .then(data => alert(data));
}
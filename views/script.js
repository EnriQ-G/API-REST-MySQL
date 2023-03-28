const HTMLResponse = document.querySelector("#container");

function fetchData() {
    const ul = document.createElement("ul");

    fetch("http://localhost:4000/api/language/")
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                const li = document.createElement("li");
                li.innerHTML = `${element.id} - ${element.name} - ${element.programmers}`;
                ul.appendChild(li);
            });
            HTMLResponse.innerHTML = "";
            HTMLResponse.appendChild(ul); 
        })
        .catch(error => {
            console.error(error);
        });
}

const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", function() {
    fetchData();
});
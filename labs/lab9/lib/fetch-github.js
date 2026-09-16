const username = "PRAWEENABUNKHAM";

fetch(`https://api.github.com/users/${username}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`GitHub API error status ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        const result = document.getElementById("result");
        const heading = document.createElement("h1");
        const link = document.createElement("a");
        
        link.href = data.html_url;
        link.target = "_blank";
        link.textContent = data.name || data.login;
        link.style.color = "#551a8b";
        heading.appendChild(link);

        const image = document.createElement("img");
        image.src = data.avatar_url;
        image.alt = data.name || data.login;

        image.width = 150;
        image.height = 150;
        image.style.border = "4px solid blue";
        image.style.borderRadius = "50%";
        image.style.objectFit = "cover";

        result.style.textAlign = "center";
        result.appendChild(heading);
        result.appendChild(image);
    })
    .catch(error => {
        alert(error.message);
    });
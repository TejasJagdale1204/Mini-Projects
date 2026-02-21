let url = "http://universities.hipolabs.com/search?country=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value.trim();

    if (!country) {
        alert("Please enter a country name");
        return;
    }
    console.log(country);

    let data = await getColleges(country);

    showCollege(data);
})

let input = document.querySelector("input");
input.addEventListener("keydown", function(event) {
    if(event.key==="Enter") {
        btn.click();
    }
})

function showCollege(data) {
    let list = document.querySelector("#list");
    list.innerText = "";

    if (data.length === 0) {
        let li = document.createElement("li");
        li.innerText = "No colleges found";
        list.appendChild(li);
        return;
    }

    for (col of data) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let result = await axios.get(url + country);
        return result.data;
    } catch (e) {
        return [];
    }
}

const list = document.querySelector("#list");
const observer = new MutationObserver(() => {
    
    const oldBehavior = list.style.scrollBehavior;
    list.style.scrollBehavior = "auto"; 
    list.scrollTop = 0; 
    list.style.scrollBehavior = oldBehavior; 
});

observer.observe(list, { childList: true });
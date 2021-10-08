import { baseUrl } from "./setting/api.js";
import displayMessage from "./components/common/displayMessage.js";

const thingsUrl = baseUrl + "things";
const filterButton = document.querySelector("#filterButton");
const inputFilter = document.querySelector(".input-filter");



(async function () {
    const container = document.querySelector(".things-container");

    try {
        const response = await fetch(thingsUrl);
        const json = await response.json();

        container.innerHTML = "";


        json.forEach(function (things) {
            container.innerHTML += `
                                <div class= container-div-result>
            
                                    <a class= "things" href= "index.html"?id=${things.id}>
                                    <h4>${things.name}</h4>
                                    <p>Price: ${things.Price}</p>
                                    </a>
                                    <p>Email: ${things.email}</p>
                                   <a href="index.html"> <button class= "button-back"> Back to homepage</button></a>
                                </div>
                                    `;
        });


        filterButton.addEventListener("click", () => {
            const value = inputFilter.value;

            const filteredList = json.filter(item => item.Price <= value)
            console.log(filteredList)
            container.innerHTML = ""
            filteredList.forEach(function (things) {

                container.innerHTML += `<a class = "things" href= "result.html"?id=${things.id}>
                                    <h4>${things.Name}</h4>
                                    <p>Price: ${things.Price}</p>
                                    </a>
                                    `;


            })

        });

    } catch (error) {
        console.log(error);
        displayMessage("error", error, "things-container")
    }
})();










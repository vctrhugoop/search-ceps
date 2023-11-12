const zipCodeSearch = document.getElementById("zip-code-search");
const btnSearch = document.getElementById("btn-search");
const formContant = document.querySelector(".form");
const dataWrapper = document.querySelector(".data-wrapper");
const city = document.getElementById("city");
const street = document.getElementById("street");
const district = document.getElementById("district");

function getData(data) {
  fetch(`https://viacep.com.br/ws/${data}/json/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      street.innerHTML = data.logradouro;
      city.innerHTML = data.localidade + "/" + data.uf;
      district.innerHTML = data.bairro;
    })
    .catch((err) => {
      console.log(err);
      alert("Zip code invalid");
    });
}

btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  data = zipCodeSearch.value;

  if (data === "") {
    alert("Please enter a zip code...");
  } else {
    dataWrapper.classList.remove("hidden");
    getData(data);
    zipCodeSearch.value = "";
  }
});

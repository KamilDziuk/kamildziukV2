const api_URL = "https://api.github.com/users/KamilDziuk/repos";

async function gitAPI()
{

let url =  await fetch(`${api_URL}`);
let showRepo = document.querySelector(".showRepo");
let lengthRepo = document.querySelector(".lengthRepo");

let data = await url.json();

 let textElement = "<ul>";
 data.forEach(element => {
  textElement += `<a href="${element.html_url}"><p>${element.name}</p></a>`;
 });
 textElement += "</ul>";
 showRepo.innerHTML = textElement;
 lengthRepo.innerHTML = data.length;
};
gitAPI();
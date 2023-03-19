let list = document.querySelector('ul');
const URL = "https://jsonplaceholder.typicode.com/posts/";

const getData = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  return data
}

document.addEventListener("DOMContentLoaded", async () => {
  let data = await getData(URL)
  data.forEach((el) => {
    if (el.title.length < 22) {
      list.insertAdjacentHTML(`beforeend`, `
      <li>
        <span>${el.title}</span>
      </li>`
      )
    }
  });
});
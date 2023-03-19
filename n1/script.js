const URL = "https://jsonplaceholder.typicode.com/posts/"

const getData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

getData(URL).then(console.log).catch(console.error);
var urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// const loopthrough = url => {
//     for (url of urls) {
//         console.log(url);
//     }
// }

// loopthrough()

var getData = async function(){
    const arrayOfPromise = urls.map(url => fetch(url));
    for await (let request of arrayOfPromise){
        const data = await request.json();
        console.log(data);
    }
}

getData()
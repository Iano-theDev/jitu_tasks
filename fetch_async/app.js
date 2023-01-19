// fetch('https://jsonplaceholder.typicode.com/todos/'), {
//     method: 'POST',
//     body: JSON.stringify({
//         name: 'title'
//     })
// }
//     .then(res => {
//         if (res.ok) {
//             console.log('SUCCESS!')
//         } else {
//             console.log("Not susccessful")
//         }
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))


fetch ('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        userId: 'userId',
        id: "id",
        title: "title",
        completed: "completed"
    })
}).then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))
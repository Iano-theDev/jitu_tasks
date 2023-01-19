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


// fetch ('https://jsonplaceholder.typicode.com/todos', {
//     method: '',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         userId: 'userId',
//         id: "id",
//         title: "title",
//         completed: "completed"
//     })
// }).then(res => {
//     return res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))
const container = document.querySelector('.container');

fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
    return response.json();
}).then((data) => {
    // console.log(data);
    data.forEach((item) => {
        const titleCard = document.createElement('div');
        titleCard.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.completed}</p>
        `;
        container.appendChild(titleCard);
    })
});
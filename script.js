/*const json = '{"name": "Maurel", "age": 28}';

console.log(typeof(json))
console.log(json)
let obj = JSON.parse(json)

console.log(obj.name)
console.log('---')*/


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users?page=1');

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const datas  = JSON.parse(xhr.response).data;
        datas.forEach(user => {
            user.name = `${user.first_name} ${user.last_name}`
        })
        console.log(datas)
    };
})

xhr.send();

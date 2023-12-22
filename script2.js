let users = []

const getList = (token) => {
    const newXHR = new XMLHttpRequest();
    newXHR.open('GET', 'https://reqres.in/api/users?page=1');
    newXHR.setRequestHeader('Autorisation', token);
    newXHR.addEventListener('readystatechange', function(){
        if(newXHR.readyState === 4){
            if(newXHR.status === 200){
                users = JSON.parse(newXHR.response).data
                console.log(users)
            }else{
                alert('error')
            }
        }
    });
    newXHR.send()
}

const sendForm = (email, password) => {
  setTimeout(() => {
    const token = 'ffghthfzszsz654412dsvcds';
    // Votre code ici
    getList(token)
  }, 2000)
}
const getUsers=()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=>res.json())
    .then(data=>displayUser(data))
}
const displayUser=user=>{
    document.getElementById('name').innerText=user.results[0].name.title+ ' ' + user.results[0].name.first + ' '+ user.results[0].name.last
    const gender=user.results[0].gender;
    document.getElementById('gender').innerText=gender;
    const location=user.results[0].location.country;
    document.getElementById('location').innerText=location;
    const container=document.getElementById('container');
    const div=document.createElement('div');
    div.innerHTML=`
    <img src='${user.results[0].picture.large}'>
    `
    container.appendChild(div);
}
getUsers();
import { createPath } from "react-router-dom"

// add user 
export function addUser(params){
    return fetch('http://localhost:5000/api/user/signup', {
        method:'POST',
        body: JSON.stringify(params),
        headers :{ 'Content-Type' : 'application/json; charset=utf-8' },
    })
    .then(function(response){
        return response.json
    })
    .catch(function(err){
        console.log(err)
    })
}

// user log in
export function userLogin(params){
    return fetch('http://localhost:5000/api/user/signin', {
        method:'POST',
        body: JSON.stringify(params),
        headers: { 'Content-Type':'application/json; charset=utf-8'},
    })
    .then(function (response){
        return response.json()
    })
    .catch(function(err){
        console.log(err)
    })
}

// verify if user is connected
export async function userAuth() {
    if (!localStorage.getItem('token')) {
        return false;
    }
    return fetch('http://localhost:5000/api/user/auth', {
        method: 'POST',
        body: JSON.stringify({ token: localStorage.getItem('token') }),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
        .then(function (response) {
            return response.json()
        })
        .catch(function (error) {
            console.warn(error)
        })

}

// retrieve articles
export function getArticles(){
    return fetch('http://localhost:5000/api/post',{
        method:'GET',
        headers:{ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': localStorage.getItem('token')}
    })
    .then(function (res){
        return res.json()
    })
    .catch(function(err){
        console.log(err)
    })
}

// add article
export function addArticle(params){
    let data = new FormData()
    data.append('post', JSON.stringify(params.post))
    data.append('images', params.post.imageUrl)
    data.append('content', params.post.content)
    data.append('posterId', params.post.posterId)

    console.log('params' + JSON.stringify(params))
    return fetch('http://localhost:5000/api/post',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{'Authorization': localStorage.getItem('token')}
    })
    .then(function(res){
        return res.json()
    })
    .catch(function(err){
        console.log(err)
    })
}

// modify article
export function modifyArticle(params){
    let data = new FormData()
    data.append('post', JSON.stringify(params.post))
    data.append('images', params.imageUrl)

    return fetch('http://localhost:5000/api/post' + params.post.id,{
        method:'PUT',
        body:data,
        headers:{'Authorization':localStorage.getItem('token')}
    })
    .then(function(res){
        return res.json()
    })
    .catch(function(err){
        console.log(err)
    })
}

// delete article
export function deleteArticle(params){
    return fetch('http://localhost:5000/api/post' + params.post.id,{
        method:'DELETE',
        headers:{'Authorization':localStorage.getItem('token')}
    })
    .then(function(res){
        return res.json()
    })
    .catch(function(err){
        console.log(err)
    })
}

export function addLike(params){
    let data = new FormData()
    return fetch('http://localhost:5000/api/post/:id/like',{
        method:'POST',
        header:{'Authorization':localStorage.getItem('token')}
    })
    .then(function(res){
        return res.json()
    })
    .catch(function(err){
        console.log(err)
    })
}
export function postUser(params) {
    return fetch('http://localhost:5000/api/user/signup', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });
}
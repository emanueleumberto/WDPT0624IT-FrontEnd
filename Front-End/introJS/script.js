
/* document.addEventListener('DOMContentLoaded', () => {
    let div = document.querySelector('div#app');
}) */



/* let xhr = new XMLHttpRequest(); // 0
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users') // 1
xhr.send() // 2
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            setTimeout(() => {
                let data = JSON.parse(xhr.responseText)
                console.log(data)
                div.innerHTML = "<p>num risultati: " + data.length + "</p>"; 
            }, 1000)
            
        } else {
            console.log("Errore: " + xhr.status)
        }
        
    }
} */


const miaPromise = new Promise((resolve, reject) => {
    let p = false;
    setTimeout(() => {
        if(p) {
            resolve("Promise risolta!!!")
        } else {
            reject("Promise rigettata!!!")
        }
    }, 5000)
})

miaPromise
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log("FINE"))




function miaFetch() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest(); // 0
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users') // 1
        xhr.send() // 2
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    setTimeout(() => {
                        let data = JSON.parse(xhr.responseText)
                       resolve(data);  // La promise è risolta e dentro ha i dati
                    }, 1000)
                    
                } else {
                    //console.log("Errore: " + xhr.status)
                    reject("Errore: " + xhr.status)
                }
                
            }
        }   
    })
}


//console.log(miaFetch())

miaFetch().then(data => console.log(data)).catch(err => console.log(err))

/* fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data)) */
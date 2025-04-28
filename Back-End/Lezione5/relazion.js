/* Relazione MongoDB */

/* Referencing | Embedding */


// Collection mongoDB
let user = [
    {
        _id: db9dc4a21197aca5e208,
        name: "Giuseppe",
        lastname: "Verdi",
        age: 35,
        address: { // Embedding
            street: "via abc 12",
            city: "Roma",
            state: "Italia"
        },
       /* address_id: 1, // Referencing */
       posts: [1, 2]

    },
    {
        _id: db9dc4a21197aca5e209,
        name: "Mario",
        lastname: "Rossi",
        age: 21,
        address: { // Embedding
            street: "via abc 12",
            city: "Roma",
            state: "Italia"
        },
        /* address_id: 1, // Referencing  */
        posts: []
    },
    {
        _id: db9dc4a21197aca5e210,
        name: "Francesca",
        lastname: "Neri",
        age: 19,
        address: { // Embedding
            street: "via test 2",
            city: "Milano",
            state: "Italia"
        },
        /* address_id: 2 // Referencing  */
        posts: [3]
    }

]

let address = [
    {
        _id: 1,
        street: "via abc 22",
        city: "Roma",
        state: "Italia"
    },
    {
        _id: 2,
        street: "via test 2",
        city: "Milano",
        state: "Italia"
    }
]

let posts = [
    {
        _id: 1,
        title: "First Post",
        body: "Lorem Ipsum",
        date: "28-04-2025",
        comments: []
    },
    {
        _id: 2,
        title: "Second Post",
        body: "Lorem Ipsum",
        date: "28-04-2025",
        comments: []
    } ,
    {
        _id: 3,
        title: "First Post",
        body: "Lorem Ipsum",
        date: "28-04-2025",
        comments: []
    }, 
    
]
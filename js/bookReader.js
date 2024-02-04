let userReadingData = {
    books: [
        { title: 'The catier in the Rye', author: 'J.D. Salinger', progress: 30 },
        { title: 'To kill a Mockingbird', author: 'Harper Lee', progress: 50 },
        { title: '1984', author: 'George Orwell', progress: 10 }
    ],

    appConfig: {
        blackMode: true,
        fonstSize: 12,
        language: 'English'
    }
}

console.log('Books in Progress:');
for (let i = 0; i < userReadingData.books.length; i++) {
    let book = userReadingData.books[i];
    console.log(`${book.title} by ${book.author} - Progress: ${book.progress}%`);
}

console.log('App Config:')
for (let key in userReadingData.appConfig){
    console.log(`${key}: ${userReadingData.appConfig[key]}`);
}
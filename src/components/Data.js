import React from 'react'
import Card from './Card'


const data = ["Furites", "Stocks", "Dresses", "Shirts", "Books"];
console.log(data);
const testData = data.map((data) => {
    return `<p>${data}</p>`
}).join()
console.log(testData)

function Data() {

  return (
    <div className="dataProp">
        <h3>Dealing with Props</h3>
        <section name="" id="" className='data-props'>
        
        <Card
           bookTitle= "Book One"
           bookAutor="Brad Travis"
           bookISBN="3434"
           bookPrice={23232}
        />
        <Card
           bookTitle= "Book Two"
           bookAutor="Brad Travis"
           bookISBN="3434"
           bookPrice={23232}
        />
        <Card
           bookTitle= "Book Three"
           bookAutor="Brad Travis"
           bookISBN="3434"
           bookPrice={23232}
        />
        <Card
           bookTitle= "Book Four"
           bookAutor="Brad Travis"
           bookISBN="3434"
           bookPrice={23232}
        />
        <Card
           bookTitle= "Book Five"
           bookAutor="Brad Travis"
           bookISBN="3434"
           bookPrice={23232}
        />
    </section>
    </div>
  )
}

export default Data
const cards = document.querySelector('.cards');
const input = document.querySelector('#input_search');
const button = document.querySelector('#btn_search');
    
button.addEventListener('click', () => {
        
    let newData = async () => { 
        const apiData = await fetch(`/api/search?keyword=${input.value}`)//fetch a nuestra api
        const data = await apiData.json();
        console.log(data)
        return data;
    }
    (async () => {
        const info = await newData()//el click deberia llamar a la funcion
        info.forEach(course => {
            // Se crea la courseCard, con titulo
            const courseCard = document.createElement('div')
            courseCard.setAttribute('class', 'card')
            const title = document.createElement('h3')
            title.innerHTML = course.courseTitle
            const price = document.createElement('p');
            price.innerHTML = course.coursePrice
            const image = document.createElement('img')
            image.src = course.courseImage

            const description = document.createElement('p')
            description.innerHTML = course.courseDescription
            
            //To father, appendChild son
            courseCard.appendChild(image)
            courseCard.appendChild(title)
            courseCard.appendChild(description)
            courseCard.appendChild(price)
            //This "cards" is on home.pug
            cards.appendChild(courseCard);
        });
    })();
});
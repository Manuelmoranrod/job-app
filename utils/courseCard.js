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
            //To father, appendChild son
            courseCard.appendChild(title)
            //This "cards" is on home.pug
            cards.appendChild(courseCard);
        });
    })();
});
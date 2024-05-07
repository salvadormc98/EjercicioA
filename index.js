function getCharacters(done){
    const results = fetch("https://hp-api.onrender.com/api/characters");

    results 
    .then(Response.json())
    .then(data=>{
        done(data)
    });
}
getCharacters(data=>{
    data.results.foreach(personaje=>{
        const article = document.createRange().createContextualFragment(`
        <article>
        <h2>${personaje.name}</h2>
        <span>${personaje.status}</span>
        <span>${personaje.alternate_names}</span>
        <span>${personaje.species}</span>
        <span>${personaje.gender}</span>
        <span>${personaje.house}</span>
        <span>${personaje.dateOfBirth}</span>
        <span>${personaje.yearOfBirth}</span>
        <span>${personaje.wizard}</span>
        <span>${personaje.ancestry}</span>
        <span>${personaje.eyeColour}</span>
        <span>${personaje.wand}</span>
        <div class="image-container">
        <img src="${personaje.image}" alt="personaje">
        </div>

        <article/>`);

        const main =document.querySelector("main");
        main.append(article);
    });
});
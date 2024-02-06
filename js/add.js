let render = pokemons.slice(0,20)

let PokiFn = (Pokemon) => {

    Pokemon.forEach(element => {
        let item = document.createElement('li')
        item.classList.add('item')

        let img = document.createElement('img')
        img.classList.add('img')
        img.setAttribute("src",element.img)
        item.append(img)

        let h3 = document.createElement('h3')
        h3.classList.add("candy")
        h3.textContent = element.candy
        item.append(h3)

        let type = document.createElement('span')
        type.classList.add('type')
        type.textContent = element.type
        item.append(type)

        let button = document.createElement('button')
        button.classList.add('button')
        button.textContent = "👍"
        item.append(button)

        button.addEventListener('click', () => {
            button.textContent = "👍"
        if (button.classList.toggle('rotate')) {
            buttons.textContent ++  
        } else {
            buttons.textContent -= 1;
        }
        })


        list.appendChild(item)
    });
}

PokiFn(render)
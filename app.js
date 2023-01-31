// ДЗ:
// создать json файл и заполнить его массивом объектов. Каждый объект должен содержать цену, название товара и путь к изображению
 
// написать GET запрос при помощи XHR и получить этот массив объектов

// При помощи метода map показать на экране все продукты
let data = []

const requestCreation = () => {
    // const request = new XMLHttpRequest() //создание запроса
    // request.open("GET","data.json") // ОБъявление метода запроса. Open принимает метод запроса и его путь URL
    // request.setRequestHeader("Content-type", "application/json") //Задание заголовка
    // request.send()
    // request.addEventListener("load", () => {
    //     console.log(request.response)
    //     data = JSON.parse(request.response)

        fetch('data.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.cars.map((item, i) => {
                let price = item.price
                let name = item.name
                let link = item.URL
                const card = document.createElement('div')
                card.classList.add("card")
                card.classList.add(`card${i}`)
    
                const nameTag = document.createElement('div')
                nameTag.classList.add("name")
                nameTag.classList.add(`name${i}`)
                nameTag.style.marginTop = "10px"
                nameTag.style.fontSize = "20px"
                nameTag.style.fontWeight = "700"
                nameTag.style.color = "#fffced"
                nameTag.innerHTML = name
    
                const priceTag = document.createElement('div')
                priceTag.classList.add("price")
                priceTag.classList.add(`price${i}`)
                priceTag.style.marginTop = "10px"
                priceTag.style.fontWeight = "300"
                priceTag.style.color = "#fffced"
                priceTag.innerHTML = price
    
                const image = document.createElement('div') 
                image.classList.add("car-image")
                image.style.backgroundImage = `url(${link})`
    
                card.append(image)
                card.append(nameTag)
                card.append(priceTag)
    
                const wrapper = document.querySelector(".wrapper")
                wrapper.append(card)
                console.log(card)
                })
        });

        
        // })
}

requestCreation()



const button = document.getElementById("submit")
let colorScheme = document.getElementById("color-scheme")
let colorSelector = document.getElementById("color-selector")
const columns = document.getElementById("columns")
let colorTwo = "000000"
let mode = "monochrome"

function fetchData(){
fetch(`https://www.thecolorapi.com/scheme?hex=${colorTwo}&mode=${mode}`)
.then(res => res.json())
.then(data => {
    
    let parameters = data
    let colors = parameters.colors
    
    console.log(parameters)
    
    let firstColorHex = colors[0].hex.value
    let secondColorHex = colors[1].hex.value
    let thirdColorHex = colors[2].hex.value
    let fourthColorHex = colors[3].hex.value
    let fiftColorHex = colors[4].hex.value
    
    let firstImg = colors[0].image.bare
    let secondImg = colors[1].image.bare
    let thirdImg = colors[2].image.bare
    let fourthImg = colors[3].image.bare
    let fiftImg = colors[4].image.bare
    
    const columns = document.getElementById("columns")
 
    columns.innerHTML= `
                <div class="col">
                <img src="${firstImg}"><br>
                ${firstColorHex}
                </div>
                <div class="col">
                <img src="${secondImg}"><br>
                ${secondColorHex}
                </div>
                <div class="col">
                <img src="${thirdImg}"><br>
                ${thirdColorHex}
                </div>
                <div class="col">
                <img src="${fourthImg}"><br>
                ${fourthColorHex}
                </div>
                <div class="col">
                <img src="${fiftImg}"><br>
                ${fiftColorHex}
                </div> 
    `
    
    })
}

fetchData()

button.addEventListener("click", clicked)

function clicked(event){
    
    colorOne = colorScheme.value
    colorTwo = colorOne.substring(1)
    mode = colorSelector.value
    event.preventDefault()

fetchData()
} 
    







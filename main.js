/* Header* */
let header = document.createElement('header')
let logo = document.createElement('div')
let menu_div = document.createElement('div')
let menu = document.createElement('ul')

/**Header Classes */
header.className = 'website-header'
logo.className = 'logo'
menu_div.className = 'menu'

/**Header Content */
logo.innerHTML = "<p>Elzero</p>"
menu.innerHTML = "<li>Home</li> <li>About</li> <li>Service</li> <li>Content</li>"

/**Header Styles */

header.style.height = '10vh'
header.style.display = 'flex'
header.style.justifyContent = 'space-between'
header.style.alignItems = 'center'
header.style.background = '#fff'

/**Logo Styles */
logo.style.fontSize = '20px'
logo.style.fontWeight = '600'
logo.style.color = 'rgb(17, 101, 74)'
logo.style.paddingLeft = '20px'

/**Menu Styles */
menu.style.display = 'flex'
menu.style.gap = '30px'
menu.style.listStyle = 'none'
menu.style.fontSize = '15px'
menu.style.fontWeight = '500'
menu.style.paddingRight = '20px'

/**Append To Header */
menu_div.append(menu)
header.append(logo)
header.append(menu_div)
document.body.append(header)

//**Content */

let content = document.createElement('div')
/**Content Container style */

content.style.height = '80vh'
content.style.background = '#888'
content.style.display = 'flex'
content.style.flexWrap = "wrap"
content.style.justifyContent = 'space-evenly'
content.style.padding = '30px 0px'

//**Items */
for (let i = 0; i < 15; i++) {
    let item = document.createElement('div')
    item.className = "item"
    let index = document.createElement('span')
    index.innerText = i + 1
    item.appendChild(index)
    let itemContent = document.createElement('p')
    itemContent.innerText = 'Product'
    item.appendChild(itemContent)
    item.style.display = "flex"
    item.style.flexDirection = "column"
    item.style.alignItems = "center"
    item.style.justifyContent = "center"
    item.style.color = "#000"
    item.style.background = "#fff"
    item.style.width = "30%"
    item.style.height = "19%"
    index.style.fontSize = "25px"
    index.style.fontWeight = "600"
    itemContent.style.fontSize = "18px"
    itemContent.style.fontWeight = "500"
    content.append(item)
}
//** items Styles*/
document.body.append(content)

/***Footer */
let footer = document.createElement('div')
footer.innerText = 'Copyright 2023'
footer.style.height = '10vh'
footer.style.background = 'rgb(17, 101, 74)'
footer.style.color = '#fff'
footer.style.fontSize = '20px'
footer.style.display = 'flex'
footer.style.justifyContent = 'center' 
footer.style.alignItems = 'center' 
document.body.append(footer)
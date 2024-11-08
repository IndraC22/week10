/**
 * Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
 * A Bootstrap styled table representing your choice of data.
 * A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit
 */

/**
 * What do we need?
   my button when clicking should add info to the table
   
   How do I get info? 
   from the input fields and their value
   Need: firstName, lastName, favoriteColor that is stored in a variable
   find a way to get the # value
   get values from the form when we submit, then append the info to the table.
   we need to get values with getElementById
   we need ID's on our values
*/

//want to create a node..tr node.. to append to my form

const formButton = document.getElementById('formSubmit')

let number = 0

formButton.addEventListener('click', (event) => {
    event.preventDefault()
    //variables to hold the values of the form
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let favoriteSport = document.getElementById('favoriteSport').value

    let newTableRow = document.createElement('tr')

    let numberNode = document.createElement('td')
        numberNode.innerHTML = number
        newTableRow.append(numberNode)



    let firstNameNode = document.createElement('td')
    firstNameNode.innerHTML = firstName
    newTableRow.append(firstNameNode)

    let lastNameNode = document.createElement('td')
    lastNameNode.innerHTML = lastName 
    newTableRow.append(lastNameNode)

    let favoriteSportNode = document.createElement('td')
    favoriteSportNode.innerHTML = favoriteSport
    newTableRow.append(favoriteSportNode)

    document.getElementById('tBody').appendChild(newTableRow)

    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('favoriteSport').value = ''
        
    number++

})
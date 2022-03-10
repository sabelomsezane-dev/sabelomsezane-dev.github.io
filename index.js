let search = document.getElementById("search");
search.addEventListener("keyup", generateNames)
function generateNames () {
    //Getting input from search box
    let inputValues = document.getElementById("search").value.toUpperCase();

    //Targeting the Unordered list 
    let ul = document.getElementById("names");

    //Targerting all the list items within unordered list
    let li = ul.querySelectorAll("li.list-group-item");

    //Looping through the list-group-item 
    for( let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        // Make validation of the search
        if(a.innerHTML.toUpperCase().indexOf(inputValues) > -1) {
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }

    }
    
}
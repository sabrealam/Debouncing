let movienames = document.querySelector('#moviename'); 
let suggest = document.querySelector('#suggest');
let suggest1 = document.querySelector('#suggest1');
let data = [];
window.addEventListener('load', function(){
    alert('Search For A Movies And Meals \nClick On The Suggestion To Get Redirect To The More Details Page')
})
async function makeAPI(){ 
    try {
        let res =await fetch(`https://www.omdbapi.com/?s=${movienames.value}&apikey=92a49ce9`);
          data = await res.json();  
        if(data.Response === 'True' ){
            suggest.style.display = 'block'; 
            createHyperLink(data.Search) 
        }else{
            document.querySelector('#render').innerHTML = null;
            document.querySelector('#suggest').innerHTML = "Movie Not Found";
        } 
    } catch (err) {
        console.log(err);
    }
    
}


function createHyperLink(moviesList){
    console.log(moviesList); 
    document.querySelector('#render').innerHTML = null;
    moviesList.forEach(ele=>{
       let a = document.createElement('a');
        let br = document.createElement('br');
        a.href = `https://www.omdbapi.com/?t=${movienames.value}&apikey=92a49ce9`;
        a.innerHTML = ele.Title;
        a.target = "_blank" ;
        suggest.append(a,br)
        let render = document.querySelector('#render');

        let card = document.createElement('div');

        let poster = document.createElement('img');
        poster.src = ele.Poster;

        let h3 = document.createElement('h3');
        h3.innerHTML = ele.Title;

        let h5 = document.createElement('h5');
        h5.innerHTML = ele.Type;

        let p = document.createElement('p');
        p.innerHTML = ele.Year;
        
        card.append(poster,h3,h5,p);
        render.append(card);
         
    })  
} 
 

let clr;
var count = 0;
function debounce(callback,deley){
    if(clr){
        clearTimeout(clr);
    }
    clr =  setTimeout(() => {
        suggest.innerHTML = null;
        callback(); 
     }, deley);
}

 
let data1 = [];
async function makeAPI1(){ 
        try {
            let mealname = document.querySelector('#mealname'); 
            let res =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealname.value}`);
            data1 = await res.json(); 
             
            if(data1.meals !== 'null'){
                createHyperLink1(data1.meals) 
            } else if(data1.meals == 'null') {
                document.querySelector('#render').innerHTML = null;
                document.querySelector('#suggest1').innerHTML = "Meal Not Found";
            }
             
        } catch (error) {
            document.querySelector('#render').innerHTML = null;
            document.querySelector('#suggest1').innerHTML = "Meal Not Found"; 
        }
}  
let clr1;
var ct  = 0;
function debounce1(callback,deley){
 
    if(clr1){
        clearTimeout(clr1);
    }
    clr1 =  setTimeout(() => {
        suggest1.innerHTML = null;
        callback();
       
     }, deley);
}
 

function createHyperLink1(mealList){  
    document.querySelector('#render').innerHTML = null;
   mealList.forEach(e=>{
        let a = document.createElement('a');
        let br = document.createElement('br');
        a.href = `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.strMeal}`;
        a.innerHTML = e.strMeal;
        a.target = "_blank" ;
        suggest1.append(a,br) 
        let render = document.querySelector('#render');

        let card = document.createElement('div');

        let poster = document.createElement('img');
        poster.src = e.strMealThumb;

        let h3 = document.createElement('h3');
        h3.innerHTML = e.strMeal;

        let h5 = document.createElement('h5'); 
        
        card.append(poster,h3,h5);
        render.append(card);
      })
    
      
}

 

window.addEventListener('keyup',function(event){   
    if(event.key === 'Enter'){
     this.location.reload(); 
    }
}) 
 

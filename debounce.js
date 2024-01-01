let movienames = document.querySelector('#moviename'); 
let suggest = document.querySelector('#suggest');
let suggest1 = document.querySelector('#suggest1');
let data = [];
async function makeAPI(){ 
    try {
        let res =await fetch(`https://www.omdbapi.com/?t=${movienames.value}&apikey=92a49ce9`);
          data = await res.json();  
        if(data.Response === 'True' ){
            suggest.style.display = 'block';
            createHyperLink()
            count++;
            document.querySelector('#one').innerHTML = `You Have Made Total ${count} Requests For This Movie Search`;
            document.querySelector('.p1').innerHTML +=  "✔️";
        }else{
            alert('We Did Not Find Any Movie With This Keyword')
        } 
    } catch (err) {
        console.log(err);
    }
    
}


function createHyperLink(){ 
    let a = document.createElement('a');
        let br = document.createElement('br');
        a.href = `https://www.omdbapi.com/?t=${movienames.value}&apikey=92a49ce9`;
        a.innerHTML = data.Title;
        a.target = "_blank" ;
        suggest.append(a,br)
      
}

function check(){
    let suggest1 = document.querySelectorAll('#suggest > a');
    return suggest1;
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
            if(data1.meals.length >= 1){
                suggest1.style.display = 'block';
                ct++;
                createHyperLink1()
                document.querySelector('#two').innerHTML = `You Have Made Total ${ct} Requests For This Searching`;
                document.querySelector('.p2').innerHTML +=  `✔️`;
            }else{
                alert('We Did Not Find Anything With This Keyword')
            }
            // console.log(data1);
        } catch (error) {
            console.log(error);
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
 

function createHyperLink1(){ 
    data1.meals.forEach(e=>{
        let a = document.createElement('a');
        let br = document.createElement('br');
        a.href = `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.strMeal}`;
        a.innerHTML = e.strMeal;
        a.target = "_blank" ;
        suggest1.append(a,br) 
      })
    
      
}













window.addEventListener('keyup',function(event){   
    if(event.key === 'Enter'){
     this.location.reload(); 
    }
}) 
 

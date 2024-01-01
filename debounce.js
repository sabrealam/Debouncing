async function makeAPI(){
    try {
        let movienames = document.querySelector('#moviename'); 
        let res =await fetch(`https://www.omdbapi.com/?t=${movienames.value}&apikey=92a49ce9`);
        let data = await res.json();
        if(data.Response === 'True' ){
            count++;
            document.querySelector('label').innerHTML = `You Have Made Total ${count} Requests For This Searching`;
            document.querySelector('p').innerHTML +=  "🥛";
        }else{
            alert('No')
        }
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
let clr;
var count = 0;
function debounce(callback,deley){
    if(clr){
        clearTimeout(clr);
    }
    clr =  setTimeout(() => {
        callback(); 
     }, deley);
}



async function makeAPI1(){ 
        try {
            let mealname = document.querySelector('#mealname'); 
            let res =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealname.value}`);
            let data = await res.json();
            if(data !== null){
                count++;
                document.querySelector('label').innerHTML = `You Have Made Total <u>${count}</u> Requests For This Searching`;
                document.querySelector('p').innerHTML +=  "🥛";
            }else{
                alert('No')
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
}  
function debounce1(callback,deley){
 
    if(clr){
        clearTimeout(clr);
    }
    clr =  setTimeout(() => {
        callback();
       
     }, deley);
}
 
// window.addEventListener('keyup',function(event){
//     // let r = event.getModifierState("CapsLock");
//     let r1 = event.getModifierState("Enter");
//     // console.log(event.button);
//     // console.log(r);
//     console.log(event.key);
//     // console.log(r1);
//     if(event.key === 'Enter'){
//      this.location.reload(); 
//     }
// }) 
 

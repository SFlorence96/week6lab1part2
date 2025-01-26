let post = [ 
  { id : 1 , title : "Blog Post 1" , authors : "Author A" , date : "2023-11-15" , src: "https://placehold.co/300x300"} ,  
  { id : 2 , title : "Blog Post 2" , authors : "Author B" , date : "2023-12-01" , src: "https://placehold.co/300x300"},  
] ; 

let section = document.getElementById("section") ; 

for (let i = 0 ; i < post.length ; i ++)  
{  let bootstrapCard = 
<div class="card" style="width: 18rem;">
  <img src="https://placehold.co/600x400" class="card-img-top" alt="This is alt text"> </img>
  <div class="card-body">
    <h5 class="card-title">${post[i].title}</h5>
    <p class="card-text">${post[i].date}</p>
    <p class="card-text">${post[i].authors}</p>
  </div> 
</div>  ;   
}
   


section.innerHTML += bootstrapCard ; 
const accesskey ="BggmJDW6yNJEJjJPZwEhV1VpOr6n7mzxTlIFML2zPLg";


const SearchForm = document.getElementById("search-form");
const SearchBox = document.getElementById("search-box");
const SearchResult = document.getElementById("search-result");
const ShowMoreBtn = document.getElementById("show-more-btn");

let keyword ="";
let page=1;

async function searchImages() {
    keyword= SearchBox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12 `;

    const response =await fetch(url);
    const data =await response.json();

    if(page === 1){
        SearchResult.innerHTML ="";
    }

    const results= data.results;

    results.map((result) =>{
        const image =document.createElement("img"); 
        image.src=result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href =result.links.html;
        imagelink.target ="_blank";
        
        imagelink.appendChild(image);
        SearchResult.appendChild(imagelink);

    })
    ShowMoreBtn.style.display="block";
  
}
SearchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();

});

ShowMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})
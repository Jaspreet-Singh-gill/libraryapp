
let arr = [{"title":"The odin project",
            "author":"the odin community",
            "pages":600,
            "message":"",
            "id":crypto.randomUUID(),
            "read":false,

}];


function Book(title,author,pages,message){
    this.title=title;
    this.author = author;
    this.pages = pages;
    this.message = message;
    this.id = crypto.randomUUID();
    this.read =false;
}


function createCard(object){
    let card = document.querySelector(".card");

    card = card.cloneNode(true);

    let cardContainer = document.querySelector(".cardContainer");
    let cardDelbutton = card.querySelector(".buttons>#del");
    let checkBox = card.querySelector(".buttons>div>#read");

    let span = card.querySelectorAll(".right>div>span");
    span[0].textContent = object.title;
    
    span[1].textContent= object.author;
    span[2].textContent = object.pages;



    cardContainer.appendChild(card);


    cardDelbutton.addEventListener("click",function(){
        deleteBook(object.id);
        cardContainer.removeChild(card);
    });

    checkBox.addEventListener("click",function(){
        makeReadTrue(object.id);
    });



}



function deleteBook(id){
    let i = 0;
    for( i = 0; i<arr.length;i++){
        if(arr[i].id == id){
            arr.splice(i,1);
            return;
        }
    }
}


function makeReadTrue(id){
    let i = 0;
    for( i = 0; i<arr.length;i++){
        if(arr[i].id == id){
            arr[i].read =true;
            return;
        }
    }

}


function createBook(){
    // let titleInput = document.querySelector(".titleForm");
    // let authorInput = document.querySelector(".authorForm");
    // let pages = document.querySelector(".pageForm");
    // let message = document.querySelector(".messageForm");

    // let obj = new Book(titleInput.value,authorInput.value,pages.value,pages.value,message.value);
    let obj = new Book("master","apprentaice",445," hello");

    arr.push(obj);
    createCard(obj);

}


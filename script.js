
// let arr = [{"title":"The odin project",
//             "author":"the odin community",
//             "pages":600,
//             "message":"",
//             "id":crypto.randomUUID(),
//             "read":false,

// }];


class LibraryBook{
    #arr = [{"title":"The odin project",
            "author":"the odin community",
            "pages":600,
            "message":"",
            "id":crypto.randomUUID(),
            "read":false,

    }];


    // Book(title,author,pages,message){
    //     this.title=title;
    //     this.author = author;
    //     this.pages = pages;
    //     this.message = message;
    //     this.id = crypto.randomUUID();
    //     this.read =false;
    // }

    createBook(title,author,pages,message){
        let obj = new Book(title,author,pages,message);
        this.#arr.push(obj);
        return obj;

    }

    deleteBook(id){
        let i = 0;
        for( i = 0; i<this.#arr.length;i++){
            if(this.#arr[i].id == id){
                this.#arr.splice(i,1);
                return;
            }
        }
    }


    makeReadTrue(id){
        let i = 0;
        for( i = 0; i<this.#arr.length;i++){
            if(this.#arr[i].id == id){
                this.#arr[i].read =true;
                return;
            }
        }

    }
}


const mySection = new LibraryBook();


class Book{
    constructor(title,author,pages,message){    
        this.title=title;
        this.author = author;
        this.pages = pages;
        this.message = message;
        this.id = crypto.randomUUID();
        this.read =false;
    }
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
        mySection.deleteBook(object.id);
        cardContainer.removeChild(card);
    });

    checkBox.addEventListener("click",function(){
        mySection.makeReadTrue(object.id);
    });



}



// function deleteBook(id){
//     let i = 0;
//     for( i = 0; i<arr.length;i++){
//         if(arr[i].id == id){
//             arr.splice(i,1);
//             return;
//         }
//     }
// }


// function makeReadTrue(id){
//     let i = 0;
//     for( i = 0; i<arr.length;i++){
//         if(arr[i].id == id){
//             arr[i].read =true;
//             return;
//         }
//     }

// }


function createBook(){
    let titleInput = document.querySelector("#book-title");
    let authorInput = document.querySelector("#book-author");
    let pages = document.querySelector("#book-pages");
    let message = document.querySelector("#message");

    let obj = mySection.createBook(titleInput.value,authorInput.value,pages.value,message.value);

    // arr.push(obj);
    createCard(obj);
    titleInput.value = "";
    authorInput.value = "";
    pages.value = "";
    message.value ="";
    distroyForm();

}

function formAppear(){
    let dialog = document.querySelector("dialog");
    dialog.showModal();
}

let plus = document.querySelector("#createCard");

plus.addEventListener("click",formAppear);

function distroyForm(){
    let dialog = document.querySelector("dialog")
    dialog.close();
}
let cancelForm  =document.querySelector("#cancelForm");
cancelForm.addEventListener("click",function(e){
        e.preventDefault();
        distroyForm();

});


let submit =document.querySelector("form");
submit.addEventListener("submit",function(e){
    createBook();


});


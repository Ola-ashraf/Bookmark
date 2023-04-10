var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");

var bookMarkList =[];
if(localStorage.getItem("sites") != null){
    bookMarkList = JSON.parse(localStorage.getItem("sites"));
    display();
}

function submit(){
   
    if(siteNameInput.value == "" && siteUrlInput.value == ""){
        document.getElementById("nameError").classList.replace("d-none","d-block");
        document.getElementById("urlError").classList.replace("d-none","d-block");
    }else{
        var webSites = {
            name:siteNameInput.value,
            url:siteUrlInput.value
        }
        bookMarkList.push(webSites);
        localStorage.setItem("sites",JSON.stringify(bookMarkList));
        display();
        clearForm();
    }

}
function display(){
    var temp ="";
    for(i=0; i<bookMarkList.length ; i++)
    {
        temp +=`<div class="createPage">
        <div class="row">
            <div class="col-4">
                <h2>`+bookMarkList[i].name+`</h2>
            </div>
            <div class="col-8">
                <a class="btn btn-primary" href="`+bookMarkList[i].url+`" target="_blank">vsite</a>
                <button onclick="deleteWebSite(`+i+`)" class="btn btn-danger">delete</button>
            </div>
        </div>
        
    </div>`;
    }
    document.getElementById("bookmarkList").innerHTML = temp;
}

function checkName(name) {
    for (var i = 0; i < bookMarkList.length; i++) {
        if (bookMarkList[i].name === name)
            return false;
    }
    return true;
}

function checkUrl(url) {
    for (var i = 0; i < bookMarkList.length; i++) {
        if (bookMarkList[i].url === url)
            return false;
    }
    return true;
}


function deleteWebSite(index){
    bookMarkList.splice(index,1);
    localStorage.setItem("sites",JSON.stringify(bookMarkList));
    display();
}

function clearForm(){
    siteNameInput.value = "",
    siteUrlInput.value = ""
}

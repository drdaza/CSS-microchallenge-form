function app(){
    ObtainInfo();
}
app();
function ObtainInfo(){
    let buttonSubmit = document.getElementById("submit-button");
    buttonSubmit.addEventListener("click", ()=>{
        let listInfo = document.getElementsByClassName("information-form");
        for (let index = 0; index < listInfo.length; index++) {
            console.log(listInfo[index].name);
            console.log(listInfo[index].value);
            
        }
        printInfo(listInfo);
    });
}
function printInfo(list){
    
}
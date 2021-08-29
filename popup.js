let q=document.getElementById("searchName")
console.log(q);
var port = chrome.runtime.connect(
    {name: "knock"}
    );
document.getElementById('click1').onclick = function() {                //searching the entered text

    if(q.value=="")
    {
        alert(" enter some thing to search")
    }
    else{
          chrome.tabs.create({
            url: ('http://google.com/search?q='+q.value),
            
          });
          notify();
} 
};   
function notify(){
     port.postMessage({
        msg_org: "lol!!",
        key:q.value
    });
}  
document.getElementById('click2').onclick =()=>{
    port.postMessage({
      printing:true
    });

}



 function adduser(){
    user_name=document.getElementById("input1").value;
    localStorage.setItem("user_name",user_name);
    window.location="chat_app_main_page.html"
 }
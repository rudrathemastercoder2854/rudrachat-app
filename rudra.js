
const firebaseConfig = {
    apiKey: "AIzaSyAJli39Q_wdo5njJfePtmt-jrHyPzNS0FU",
    authDomain: "chat-app-e4d01.firebaseapp.com",
    databaseURL: "https://chat-app-e4d01-default-rtdb.firebaseio.com",
    projectId: "chat-app-e4d01",
    storageBucket: "chat-app-e4d01.appspot.com",
    messagingSenderId: "539991590040",
    appId: "1:539991590040:web:4de44e390765f468b23ced",
  };
 firebase.initializeApp(firebaseConfig);
  

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WELCOME  "+user_name+"!";
function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"Adding Room Name"
});
localStorage.setItem("room_name" , room_name);

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

   //End code
   });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="chatapp_message_page.html";
}
function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="chatapp_index.html";
}

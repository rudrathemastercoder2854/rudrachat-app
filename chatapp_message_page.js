
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
room_name=localStorage.getItem("room_name");
function send(){
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });
 document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img id='blue_tick'class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4  id='message' class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+ like+"onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();
function update_like(firebase_message_id){
console.log("CLICKED ON LIKE BUTTON"+firebase_message_id);
button_id=firebase_message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(firebase_message_id).update({
 like:updated_likes
});
}
function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location.replace("chat_app_main_page.html");
}

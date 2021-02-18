
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCLZyvoeTub6DhqEaARWYexDBSb7CYzv9s",
    authDomain: "kwitter-7d929.firebaseapp.com",
    projectId: "kwitter-7d929",
    storageBucket: "kwitter-7d929.appspot.com",
    messagingSenderId: "126426572166",
    appId: "1:126426572166:web:b6229b8f6b1c4182047807",
    measurementId: "G-0W2YLQL9SP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addRoom()
		{
			room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

      localStorage.setItem("room_name" , room_name)

      window.location = "kwitter_page_html";
		}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log ("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['names'];
      message = message_data['meassage'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name +"<img class = 'user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + messgae + "</h4>";
      like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id'>";
      span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like : "+ like +"</span></button><hr>";

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row ;
      //End code

       function redirectToRoomName(name)
       {
         console.log(name) ;
         localStorage.setItem("room_name" , name)
         window.location = "kwitter_page_html";
       }
       function updateLike(message)
       {
         console.log("clicked on like button - " + message_id);
         button_id = message_id;
         likes= document.getElementById(.button_id).value;
         updated_Likes = Number(likes) + 1;
         console.log(updated_likes);

         firebase.database().ref("room_name").child(message_id).update({
           like = updated_Like
         });
       }
       function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
            window.location = "index.html";
        }
        

      });});}
getData();

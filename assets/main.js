
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAy3Ug8fGXOWF9X3avG89f0kCl5Ah9I0Ck",
    authDomain: "a-beautiful-world-e57be.firebaseapp.com",
    databaseURL: "https://a-beautiful-world-e57be.firebaseio.com",
    projectId: "a-beautiful-world-e57be",
    storageBucket: "a-beautiful-world-e57be.appspot.com",
    messagingSenderId: "731337683506",
    appId: "1:731337683506:web:b99c41b8a9649d7a6b022b"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

// picks random element from list

function rand(items) {
    return items[~~(items.length * Math.random())];
}


/* THE WORLD */

var database = firebase.database();

var trees = ["🌲", "🌳"];
var flowers = ["🌺", "🌼", "🌹","🌸"];


function generate_land(size, type){
    
    var num = Math.random()
    //console.log(num);
    
    // size = vertical lines of world
    for(let j = 0; j < size; j++){
        
        var landscape = "";
        
        // 8 = horizontal length of world
        for(let i = 0; i < 20; i++){

            var num = Math.random();
            
            if(0.1 < num && num < 0.13){
                landscape += rand(trees);
            } else if(0 < num && num < 0.02){
                landscape += rand(flowers);
            }
            else{
                landscape += " ";
            }

        }
               
    landscape += "\n";
    $("#land").append(landscape);
        
    }
               
               
    
}


generate_land(10);
$("#land").text();


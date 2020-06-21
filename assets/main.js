

// picks random element from list

function rand(items) {
    return items[~~(items.length * Math.random())];
}


/* THE WORLD */


var trees = ["🌲", "🌳"];
var flowers = ["🌺", "🌼", "🌹","🌸"];


function generate_land(size, type){
    
    console.log(Math.random());
    
    // size = vertical lines of world
    for(let j = 0; j < size; j++){
        
        var landscape = "";
        
        // 8 = horizontal length of world
        for(let i = 0; i < 16; i++){

            if(0.1 < Math.random() < 0.2){
                landscape += rand(trees);
            } else{
                landscape += " ";
            }
            

        }
               
    landscape += "\n";
    $("#land").append(landscape);
        
    }
               
               
    
}


generate_land(10);
$("#land").text();



// picks random element from list

function rand(items) {
    return items[~~(items.length * Math.random())];
}


/* THE WORLD */


var trees = ["🌲", "🌳"];
var flowers = ["🌺", "🌼", "🌹","🌸"];


function generate_land(size, type){
    
    var num = Math.random()
    //console.log(num);
    
    // size = vertical lines of world
    for(let j = 0; j < size; j++){
        
        var landscape = "";
        
        // 8 = horizontal length of world
        for(let i = 0; i < 12; i++){

            var num = Math.random();
            
            if(0.1 < num && num < 0.15){
                landscape += rand(trees);
            } else if(0 < num && num < 0.05){
                console.log(num);
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

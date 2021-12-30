class Form{
    

    constructor(){
    
    }

    preload(){
        Iform = loadImage("8.jpg");
     
     
    }
    hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.Iform.hide();
    }
    preload(){
        Iform = loadImage("8.jpg");
     
     
    }
    display(){ 
        var Iform;
        //image(Iform,0,0,displayWidth - 20, displayHeight-30)
        var title = createElement('h2') 
        title.html("Black Days"); 
        title.position(130, 0); 
        var input = createInput("Name"); 
        var button = createButton('log in'); 
        
        input.position(130, 160); 
        button.position(250, 200); 
        button.mousePressed(function(){ input.hide();
             button.hide();
             Iform.hide();
              var name = input.value();
               //playerCount+=1;
                player.update(name) 
                //player.updateCount(playerCount); 
                var greeting = createElement('h2'); 
                greeting.html("Hola " + name +"eres un crak")
                 greeting.position(displayWidth - 20, displayHeight-30)
                });       
        }
    }
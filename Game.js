class Game {
    constructor(){
  
    }
  
    //getState(){
     // var gameStateRef  = database.ref('gameState');
     // gameStateRef.on("value",function(data){
      //   gameState = data.val();
    //  })
  
   // }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
       // var playerCountRef = await database.ref('playerCount').once("value");
      
       //playerCount = playerCountRef.val();
          //player.getCount();
        
        form = new Form()
        form.display();
      }
  
      //midificar las imagenes de de los carros en las queyo ponga para el juego

      //car1 = createSprite(100,200);
      //car1.addImage("car1",car1_img);
      
    }
  
    play(){
      form.hide();
      Iform.hide();

      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
      if(player.distance > 3860){
        gameState = 2;
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }
  
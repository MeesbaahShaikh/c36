class Game{

constructor()
{ }


getState()
{
//it will read value of gameState from the database

var gameStateRef=database.ref("gameState");
gameStateRef.on("value",function(data){
gameState=data.val();
console.log(gameState)
});

}


update(state)
{
    database.ref("/").update({

        'gameState':state
    })
}

start()
{
if(gameState==0)
{
form=new Form ();

player=new player();
player.getCount();
form.display();


}

}


play()
{


}






};
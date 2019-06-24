var stock_songs = [
       {
         "artist" : "AC/DC" ,
         "song" : "thynderstruck" ,
         "price" : 1.99


       }, 
       {
           "artist" : "the cure",
           "song" : "friday i'm in love",
           "price" : 25
       },
       {
         "artist" : "rammstein",
         "song" :"du hast",
         "price" : 2

       }

    ]

 var user_song = prompt("escribe el titulo de la cancion para saber si esta en stock");
 var stock = false;

     for (var i = 0; i < stock_songs.length; i++){
     if(user_song === stock_songs[i].song){
     stock = true;
     break;

     }
}
if (stock){
    console.log("la cancion"+user_song +"ha sido encontrada");    

}else{
    console.log("la cancion"+user_song +"no ha sido encontrada");
    
}

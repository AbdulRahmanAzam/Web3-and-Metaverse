var alien_color : string = 'green';

// alien color is not green color
if(alien_color === "green"){
    console.log("The player just earned 5 points for shooting the alien");
}

if(alien_color !== "green"){
    console.log("The player just earned 10 points");
}

if(alien_color === alien_color.toLowerCase()){
    console.log("The alien color is in lower case");
}else{
    console.log("Alien color is not in lower case form");
}


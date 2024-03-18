var alien_color : string = 'green';

if(alien_color === 'green')
    console.log("The player just earned 5 points");

if(alien_color === alien_color.toLowerCase()){
    console.log("This condition also passes ");
}else if(alien_color === alien_color.toUpperCase()){
    console.log("failed to pass");
}
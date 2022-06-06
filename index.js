function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue === 199) {
    return 'This one is on me!';

  } else if (someValue > 2000) {
    return 'I will gladly take your thirty bucks.';

  } else if (someValue >= 2501) {
    return 'No can do.';

  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city ? 'Ok, sounds good.' : 'No go.');

}


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;

    case 'not as generous':
      return 'Thank you.';
      break;
  
    default:
      return 'Bye.';
  }
}
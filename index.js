function scuberGreetingForFeet(feet){
  let message;
  if (feet < 400) {
    message = 'This one is on me!';
  } else if (feet < 2000) {
    message = 'That will be twenty bucks.';
  } else if (feet < 2500) {
    message = 'I will gladly take your thirty bucks.';
  } else {
    message = 'No can do.';
  }
  return message;
}

function ternaryCheckCity(city){
  let isNYC = (city === 'NYC');
  return (isNYC ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tip){
  let message;
  switch (tip) {
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default:
      message = 'Bye.';
      break;
  }
  return message;
}
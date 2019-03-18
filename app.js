//Pair coding
//Names and input

let hacker1 = 'Eddie';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Sylvie';
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
if(hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`);
}

// Loops
let newStr = '';
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    newStr += hacker1[i]
  } else {
   newStr += hacker1[i] + ' ';
  }
}

console.log(hacker1.split('').join(','))

console.log(newStr.toUpperCase());

let reverseStr = '';
for (let i = hacker2.length-1; i >= 0; i--) {
  reverseStr += hacker2[i];
  
}
console.log(reverseStr);


if (hacker1 > hacker2) {
  console.log(`The driver's name goes first`);
} else if (hacker2 > hacker1) {
  console.log(`Yo, the navigator goes first definitely`);
} else {
   console.log(`What?! You both got the same name?`);
}


function checkStr(str) {
  if (str.replace(/[^a-zA-Z0-9]/g,'') == str.replace(/[^a-zA-Z0-9]/g,'').split('').reverse().join('')) {
    console.log('it is true!!!')
  } else {
    console.log('noooooo it is not');
  }
}

checkStr("ka,yak");

//Count words
const words = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac vulputate lorem. Mauris maximus lorem metus, at feugiat dui tincidunt a. Phasellus eu ligula sed ante gravida gravida commodo nec neque. Aenean fringilla nisi eget tellus vulputate tincidunt. Vivamus nec mattis felis. Aenean sed nibh risus. Donec convallis pretium est, vel congue est egestas non. Aliquam tincidunt porttitor nibh, non laoreet ligula ornare quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec viverra nisi purus, eu volutpat urna porta rhoncus. Mauris rutrum iaculis ex, sit amet accumsan nisi egestas vel. Donec magna lorem, consequat ac ante eget, porttitor ultricies augue. Etiam ac nisi vitae ligula dictum condimentum a at ante. Pellentesque et pulvinar quam. Donec at erat eget dui dapibus tempus. Integer iaculis fringilla dui, ac ultricies dui efficitur et. Ut blandit, nibh nec pulvinar maximus, nisl erat dignissim orci, id elementum elit justo dictum libero. Donec suscipit at nulla quis aliquet. Suspendisse potenti. Donec lorem eros, rutrum id aliquam nec, blandit id nisl. Quisque at massa elit. Aliquam consectetur ligula et tellus tristique, eget scelerisque elit pellentesque. Pellentesque nisi sapien, tincidunt sed luctus at, pellentesque nec mauris. Vivamus posuere in dui eleifend volutpat. Maecenas dolor quam, venenatis interdum sem in, tincidunt pharetra elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fringilla lorem sem, porttitor sagittis sapien commodo fermentum. Vestibulum et dolor erat. In ullamcorper porta pulvinar. Nullam iaculis urna sed elementum rhoncus. Nulla in nulla a nulla consectetur elementum ac at dolor. Fusce consectetur aliquam nisi vel dapibus. Phasellus aliquam condimentum metus, dignissim fermentum urna laoreet at. Maecenas sagittis volutpat velit a lacinia. Sed posuere viverra ipsum, dapibus faucibus enim eleifend ac.'

function countWords(words) {
   console.log(words.length);
}

function countLatin(words) {
  let etNum = (words.match(/et/g) || []).length;
  return etNum;
}

countWords(words);
countLatin(words);
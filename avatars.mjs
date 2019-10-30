let types = ['male', 'female', 'human', 'bottts', 'avataaars', 'gridy']
let avatars = [];
let name;
let age;
let type;
let imageURL;

function Avatar (name, age, type, imageURL) {
  this.name = name;
  this.age = Math.floor(Math.random() * 120);
  this.type = type;
  this.image = imageURL;
}

function makeOnLoadAvatars () {
  for (let i = 0; i < 5; i++) {
    name = 'jkbo';
    age = '';
    type = types[Math.floor(Math.random() * types.length)];
    imageURL = 'https://avatars.dicebear.com/v2/' + type + '/' + name + '.svg';
    avatars.push(new Avatar(name, age, type, imageURL));
  }
}


function randomName () {
  let randomString = '';
  let randomASCII;
  for (let j = 0; j < 7; j++) {
    randomASCII = Math.floor((Math.random() * 25) + 97);
    randomString += String.fromCharCode(randomASCII);
  }
  return randomString;
};
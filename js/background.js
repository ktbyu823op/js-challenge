const imgLinks = [
  "https://images.alphacoders.com/133/1339726.png",
  "https://images7.alphacoders.com/489/489340.jpg",
  "https://wallpapers.com/images/hd/library-background-xkh9vqzcdoxcs7v7.jpg",
];

const randomNumber = Math.floor(Math.random() * imgLinks.length);

const choosenImage = imgLinks[randomNumber];

document.body.style.backgroundImage = `url(${choosenImage})`;

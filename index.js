console.log("using veet");
var photo = document.getElementById("photo");
var author = document.getElementById("author");
var photoid = document.getElementById("photoid");
fetch('https://picsum.photos/v2/list?page=2&limit=100')
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
console.log(response);
    return response.json();
  })
  .then( json => {console.log(json)
  var pic = json[Math.floor(Math.random()*json.length)];
    console.log(pic);
    console.log(pic.author);
    console.log(pic.id);
    console.log(pic.url);
    photo.setAttribute("src", pic.download_url);
    author.textContent=pic.author;
    photoid.textContent=pic.id;
}
  );
//   .catch( err => console.error(`Fetch problem: ${err.message}`) );
// API Pseudocode
// Grab 100 images https://picsum.photos/v2/list?page=2&limit=100
// Choose 1 image from returned list var item = items[Math.floor(Math.random()*items.length)];
// Display the chosen image, author, and image ID on the page
// Create img tag, paragraph tag in HTML
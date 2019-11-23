const url = "https://dog.ceo/api/breeds/image/random/3";
let dogBtn = document.getElementById('dogBtn');

function getDogPicture() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let count = 1;
      JSON.parse(this.responseText).message.forEach((message) => {
        let img = document.getElementById(`img${count}`);
        img.setAttribute('src', message);
        img.setAttribute('alt', "dog picture");

        count++
      });
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

dogBtn.addEventListener('click', getDogPicture);

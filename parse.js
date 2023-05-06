const myList = document.querySelector('#parsejs')
const myRequest1 = new Request("xml.json")
const hazaurl = document.querySelector('#hazar')


var myPlayer = videojs('#my-video');
myPlayer.autoplay(true);
myPlayer.loop(true);
myPlayer.fluid(true);

fetch(myRequest1)
  .then(reponse => reponse.json())
  .then((data) => {
    for (const product of data.tvshow) {

      const listItem = document.createElement("p");
      listItem.append(`${product.titre} - ${product.url}`);
      myList.appendChild(listItem);
      let numberOfChannel = data.tvshow.length;
      document.querySelector('#compteurChaine').innerText = numberOfChannel;




        // randam channel
        randomplayer.addEventListener("click", function () {
          test();
        });
  
        function test() {
          var m3u = []
          data.tvshow.forEach(element => {
            m3u.push(element)
          });
          var values = m3u
          var valueToUse = values[Math.floor(Math.random() * values.length)];
          let pos = m3u.indexOf(valueToUse);
          // let index = m3u.findIndex(element => element === valueToUse);
          console.table(m3u[pos]);
          titretv.innerText = `${m3u[pos].titre}`
          

          myPlayer.src(m3u[pos].url);
          console.log(m3u[pos].url)
        }










        


    }
  })
  .catch(console.error);










const myList1 = document.querySelector('#parsejs2')
const myRequest11 = new Request("xml.json")


fetch(myRequest11)
  .then(reponse => reponse.json())
  .then((data) => {
    for (const product of data.vod) {
      const listItem = document.createElement("p");

      listItem.append(`${product.titre} - ${product.url}`);

      myList1.appendChild(listItem);
    }
  })
  .catch(console.error);
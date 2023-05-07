const myList = document.querySelector('#parsejs')
const myRequest1 = new Request("xml.json")
const hazaurl = document.querySelector('#hazar')


var myPlayer = videojs('#my-video');




myPlayer.ready(function () {


  //full
  fullplayser.addEventListener("click", function () {
    fullplayer();
  });

  function fullplayer() {
    if (myPlayer.isFullscreen()) {
      myPlayer.exitFullscreen();
    } else {
      myPlayer.requestFullscreen();
    }
  };


  //pause
  pauseplayser.addEventListener("click", function () {
    attendreplayer();
  });
  function attendreplayer() {

    if (myPlayer == myPlayer.paused()) {

      myPlayer.play();
    } else {
      myPlayer.pause();
    }
  };

  //play
  myPlayer.ready(function () {
    playplayser.addEventListener("click", function () {
      lectureplayer();
    });
    function lectureplayer() {
      myPlayer.play();
    };


    //close
    closeplayser.addEventListener("click", function () {
      fermerplayer();
    });
    function fermerplayer() {
      myPlayer.dispose();
    };
  });
});

fetch(myRequest1)
  .then(reponse => reponse.json())
  .then((data) => {
    for (const product of data.tvshow) {

      const listItem = document.createElement("div");
      listItem.classList.add('series-frame');
      listItem.setAttribute("class", `series-frame ${product.color}`);




      listItem.append(product.titre);
      myList.appendChild(listItem);

      let numberOfChannel = data.tvshow.length;
      document.querySelector('#compteurChaine').innerText = numberOfChannel;




      // randam channel
      randomplayer.addEventListener("click", function () {
        test();
      });

      function test() {

        myPlayer.autoplay(true);
        myPlayer.loop(true);
        myPlayer.fluid(true);

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



      //Passing this object as the argument to a onclick function
      listItem.addEventListener("click", function () {
        parseplayer();
      });


      function parseplayer() {
        myPlayer.autoplay(true);
        myPlayer.loop(true);
        myPlayer.fluid(true);

        let montitre = document.querySelector("#titretv");
        montitre.innerText = `${product.titre}`



        myPlayer.src(`${product.url}`);


      };






    }
  })
  .catch(console.error);










const myList1 = document.querySelector('#parsejs2')
const myRequest11 = new Request("xml.json")


fetch(myRequest11)
  .then(reponse => reponse.json())
  .then((data) => {
    for (const vod of data.vod) {
      const listItem = document.createElement('div');

      listItem.append(`${vod.titre} - ${vod.url}`);

      myList1.append(listItem);




      //Passing this object as the argument to a onclick function
      listItem.addEventListener("click", function () {
        parseplayer2();
      });


      function parseplayer2() {
        
        var myPlayer2 = videojs('#my-video');
        const listVod = document.createElement('div');
        myList1.append(listVod);
        listVod.classList.add('flex');


        const createVod = document.createElement('video-js');
        myList1.append(createVod);
        createVod.setAttribute("id", "my-video")
        createVod.setAttribute("data-setup", "{}")




        myPlayer2.autoplay(true);
        myPlayer2.loop(true);
        myPlayer2.fluid(true);

        myPlayer2.src(vod.url);
        console.log(vod.url)




      };





    }
  })
  .catch(console.error);

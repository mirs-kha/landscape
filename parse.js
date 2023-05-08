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



      const myList1 = document.querySelector('#parsejs2')
      const myRequest11 = new Request("xml.json")



            var idModal = `myModal-${vod.id}`
            var idbtn = `myBtn-${vod.id}`
            var closeModal = `close-${vod.id}`



            const passe = document.createElement('div');
            passe.setAttribute("id", "myMet");
            passe.classList.add("listefilms");
            passe.innerHTML = `${vod.titre} - ${vod.url}`
            myList1.append(passe)

            const btn1 = document.createElement('button')
            btn1.setAttribute("id", idbtn)
            btn1.innerHTML = `cliquer pour voir ${vod.titre} avec ${idbtn} + ${idModal}`
            passe.append(btn1)



            const btnModal = document.createElement('div')
            btnModal.setAttribute("id", idModal)
            btnModal.classList.add("modal")

            const myModal = document.createElement('div')
            myModal.setAttribute("class", "modal-content")

            const span1 = document.createElement('span')
            span1.classList.add(closeModal)
            span1.innerHTML = "&times;"
            myModal.append(span1)

            const content = document.createElement('p')
            content.innerHTML = (`${vod.titre}`)
            myModal.append(content)
            btnModal.append(myModal)

            passe.append(btnModal)
            passe.append(btnModal)



            btn1.addEventListener("click", function () {
              ouvrirModal();

            });

            function ouvrirModal() {
              
              btnModal.style.display = "block"
              btnModal.style.color = "black"

              console.log(vod.url)
                      var myPlayer2 = videojs('#my-video');
              myPlayer2.autoplay(true);
              myPlayer2.loop(true);
              myPlayer2.fluid(true);
      
              let montitre = document.querySelector("#titretv");
              montitre.innerText = `${vod.titre}`
      
      
              myPlayer2.loadMedia({
                artist: 'Disney',
                album: 'Oceans',
                title: vod.titre,
                description: 'Journey in to the depths ... and race with dolphins at play.',
                poster: 'https://vjs.zencdn.net/v/oceans.png',
                src: [{
                  src: vod.url,
                  type: 'application/x-mpegURL'
                }, {
                  src: vod.url,
                  type: 'video/mp4'
                }]
              })
             



            };


            span1.addEventListener("click", function () {
              fermerModal()
            })

            function fermerModal() {
              btnModal.style.display = "none";
            }
          }


        })
        .catch(console.error);






      // function parseplayer2() {

      //   var myPlayer2 = videojs('my-video', {
      //     sources: [{
      //       src: 'http://parkpay.live:8080/movie/overkill/dB2hBKSxdP/296063.mkv',
      //       type: 'video/mp4'
      //     }, {
      //       src: 'http://parkpay.live:8080/movie/overkill/dB2hBKSxdP/296063.mkv',
      //       type: 'video/webm'
      //     }]
      //   });
      //   const listVod = document.createElement('div');
      //   myList1.append(listVod);
      //   listVod.classList.add('flex');





      //Passing this object as the argument to a onclick function
      // btn2.addEventListener("click", function () {
      //   parseplayer2();
      // });


      // function parseplayer2() {
      //   var myPlayer2 = videojs('#my-video');
      //   myPlayer2.autoplay(true);
      //   myPlayer2.loop(true);
      //   myPlayer2.fluid(true);

      //   let montitre = document.querySelector("#titretv");
      //   montitre.innerText = `${vod.titre}`



      //   myPlayer2.src(`${vod.url}`);


      // };




      // };


























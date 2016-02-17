  (function(){
    "use strict";

    var Moosipurk = function(){
      // SINGELTON PATTERN(4 rida)
      if(Moosipurk.instance){
        return Moosipurk.instance;
      }
      Moosipurk.instance = this; // this viitab moosipurgile
      //console.log(this);
      this.routes = Moosipurk.routes;
      // KÕIK MUUTUJAD, mis on üldised ja muudetavad
      this.currentRoute = null; //hoian meeles mis Lehel olen(home-view)

      this.click_count= 0;
      //panen rakenduse tööle

      this.init();
    };
    //kirjeldatud kõik lehed
    Moosipurk.routes= {
      "home-view":{
        render: function(){
          // käivitan siis kui jõuan lehele
          console.log('JS avalehel');

          //kui jõuan avalehele siis käivitub timer, mis hakkab trükkima kulunud sekundeid
          // divi sisse #counter
          // hakkab 0-st
        }
      },
      "list-view":{
        render: function(){
          console.log('JS loendil');
        }
      },
      "manage-view":{
        render: function(){
          console.log('JS haldusel');
        }
      }
    };

    Moosipurk.prototype = {
      //kõik moosipurgi funktsioonid tulevad siia sisse
      init: function(){
        console.log('rakendus käivitus');
        // siia tuleb esialgne loogika
        window.addEventListener('hashchange', this.routeChange.bind(this));
        // vaatan mis lehel olen
        console.log(window.location.hash);
        if(!window.location.hash){
          window.location.hash="#home-view";
        }else{
          //hash oli olemas, käivitan routeChange funktsiooni
          this.routeChange();

        }
        // hakka kuulama hiireklõpse
        this.bindMouseEvents();
      },
      bindMouseEvents:function(){
        document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));
      },
      addNewClick: function(event){
        //console.log(event);
        this.click_count++;
        console.log(this.click_count);
      },
      routeChange: function(){


        this.currentRoute = window.location.hash.slice(1);
        // kas leht on olemas
        if(this.routes[this.currentRoute]){
          //da
          console.log('>>>>>>>' + this.currentRoute);
          //käivitan selle lehe jaoks ettenähtud javascripti
          this.routes[this.currentRoute].render();
        }else{
          // 404?

          console.log('404');
          window.location.hash = 'home-view';
        }
      }
    };
    window.onload=function (){
      var app= new Moosipurk();
      var app2= new Moosipurk();
    };
   })();

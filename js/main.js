$(document).ready(function() {

  $("#infoartista").click(function() {
    $("#artistamostrado").remove();
    $.getJSON("https://api.spotify.com/v1/artists/3whuHq0yGx60atvA2RCVRW",
      function(json) {
        var div = $("#main").append("<div id='artistamostrado'><h1>Olly Murs</h1><a href='"+json.uri+"' ><img src='"+json.images[1].url+"'/></a></div>");
      });
  });

  $("#buscaralbum").click(function() {
    $(".buscados").remove();
    if ($("#album").val().trim()==""){
      window.alert("No ha introducido nada en el campo de texto");
    }
    else{
      $.getJSON("https://api.spotify.com/v1/search?q="+$("#album").val()+"&offset=0&limit=20&type=album",
        function(json) {
          //console.log(document.getElementById("album").value);
          //console.log(json.albums.items[1].name);
          $.each(json.albums.items, function(index, data) {
              //console.log(data.name);
              var div = $("#main").append("<div class='buscados'><a href='"+data.uri+"' ><img src='"+data.images[1].url+"'/></a><p>"+data.name+"</p></div>");
          });
        });
    }
  });

  $("#buscarplaylist").click(function() {
    $(".buscadosart").remove();
    if ($("#playlist").val().trim()==""){
      window.alert("No ha introducido nada en el campo de texto");
    }else{
    $.getJSON("https://api.spotify.com/v1/search?query="+$("#playlist").val()+"&offset=0&limit=20&type=playlist",
      function(json) {
        $(".buscados").remove();
        $.each(json.playlists.items, function(index, data) {
            //console.log(data.name);
            var div = $("#main").append("<div class='buscados'><a href='"+data.uri+"' ><img src='"+data.images[0].url+"'/></a><p>"+data.name+"</p></div>");
          });
      });
    }
  });


  $("#buscarartista").click(function() {
    $(".buscadosart").remove();
    if ($("#campo").val().trim()==""){
      window.alert("No ha introducido nada en el campo de texto");
    }else{
      $.getJSON("https://api.spotify.com/v1/search?query="+$("#campo").val()+"&offset=0&limit=20&type=artist",
        function(json) {
          //console.log(this.response);
          $.each(json.artists.items, function(index, data) {
            var div2 = $("#main").append("<div class='buscadosart'><a href='"+data.uri+"'><p>"+data.name+"</p></a></div>");
            //console.log(json.artists[i].name);
            //console.log(json.artists[i].href);
          });
      });
    }
  });


  $("#buscarcancion").click(function() {
    $(".buscados2").remove();
    if ($("#cancion").val().trim()==""){
      window.alert("No ha introducido nada en el campo de texto");
    }else{
      $.getJSON("https://api.spotify.com/v1/search?query="+$("#cancion").val()+"&offset=0&limit=20&type=track",
        function(json) {
          $(".buscados2").remove();
          $.each(json.tracks.items, function(index, data) {
                console.log(data.name);
                var div = $("#main").append("<div class='buscados2'><a href='"+data.preview_url+"' target='_blank'><p>"+data.name+" por "+data.artists[0].name+"</p></a><a href="+data.uri+"> Ir a Spotify</a></div>");
          });
      });
    }
  });
});

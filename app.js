const options = {
    method: 'POST',
    headers: {
      cookie: '__cf_bm=ys1I7iME4ilkWaBPrRACocCvpqyzEm5rSNMVjUVkjTM-1671499852-0-AeSQ87LeK%2BgHeFBZcmY973s4RUV7Obemcd5Kd5MTgX9QJomttA5puuOz7bopRnQT76%2Fzzd82rUwK7EqgFSTVDzs%3D',
      'Client-ID': 'm88rppt9usp7pq1px2sum1wsygb8hl',
      Authorization: 'Bearer eh43crox11qawt95yhfvfido0v0o2u',
      'Content-Type': 'application/json',
      
    },
    body: 'fields name, genres.name, screenshots.url, artworks.url; where platforms = 19; limit 100;'
  };
  
  fetch('https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games', options)
    .then(response => response.json())
    .then(response => {

        var sortButton = document.getElementsByClassName("sortButton");
        
        
        $(sortButton).click(function() 
        {
          var sort = response[Math.floor(Math.random() * response.length)];
          var sortResultContainer = document.getElementsByClassName("sortContainer");

            $(".sortContainer").html(`<h2>${sort.name}</h2>
            </br>
            
            <span>${sort.genres[0].name}</span>`);

        })
            
        
        

        // console.log(response[Math.floor(Math.random() * response.length)])
    })
    .catch(err => console.error(err));
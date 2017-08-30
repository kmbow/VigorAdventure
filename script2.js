    console.log(key);
    $( document ).ready(function() {
        $("#button").on("click", function(event){
            //var searchQuery= $(this).attr("data-name");
            //Get the data from maps , eg. names of the restaurants around
            //Plug restaurants name "around" in the query and retrieve necessary data
            //Parse data in html
            //the query is the link to the api and the research parameters separated by ?
            console.log("clicked");
            
            var test;
            for(x =0;x< key.length;x++){
                test = key[x].trim();
                test = test.replace(/\s/g, '-');
                test = test.replace("'", "");
                test = test.toLowerCase();
                
                  
                console.log(test);
                  
                 console.log(queryURL);
                
            
            
            var queryURL= "https://api.nutritionix.com/v1_1/search/"+test+"?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=9ac0d341&appKey=9871c93636f9f7bbf609bbe5b650f84b"
            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function(response){
                //data recieved 
                
                // console.log(response.hits[1].fields.brand_name);
                //  console.log(response);

                 
                
                //   console.log(response.hits[0].fields.item_name);
                //   console.log(response.hits[0].fields.nf_calories);  
                

                
                
                 
                   
                // console.log(response);
                for (i=0;i<test.length;i++){
                console.log(response.hits[i].fields.item_name);
                console.log(response.hits[i].fields.brand_name);
                console.log(response.hits[i].fields.nf_calories);
                var cardDiv = $("<div class='p2-card-1'>").css("float","left");;
                var p1 = $("<p>").text("Restaurant: " + response.hits[i].fields.brand_name);
                var p2 = $("<p>").text("Menu Item: " + response.hits[i].fields.item_name);
                var p3 = $("<p>").text("Calories: " + response.hits[i].fields.nf_calories);
                var space = $("<br>");

                cardDiv.append(p1);
                cardDiv.append(p2);
                cardDiv.append(p3);
                $("#results").append(cardDiv);
                
            
            }
                // console.log(response[x].hits[x].fields.item_name);
                // console.log(response[x].hits[x].fields.brand_name);
                // console.log(response[x].hits[x].fields.nf_calories);    
            })}})
            
    });
    
    

    
        

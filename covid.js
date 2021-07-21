var data;
    function details() {
      // Create a request variable and assign a new XMLHttpRequest object to it.
      var request = new XMLHttpRequest();

      // Open a new connection, using the GET request on the URL endpoint
      request.open(
        "GET",
        "https://api.covid19india.org/state_district_wise.json",
        true
      );
      request.onload = function () {
        // Begin accessing JSON data here
        data = JSON.parse(this.response);
        console.log(Object.keys(data));
      };
      // Send request
      request.send();
    }
    function getValue() {
      var stat = document.covid.state.value;//Assigning the name of the state 
      var district = document.covid.output.value;//Assigning the name of the district
      //Parsing all the data in the API to get the details of the given state and district
      Object.keys(data).map((state) => {
        if (stat == state) {
          var states = data[stat];
          console.log(states.districtData[district]);
          var d1=states.districtData[district];
          var res="<p>"+district+"</p>"
          var act="<p>"+d1.active+"</p>"
          var con="<p>"+d1.confirmed+"</p>"
          var dec="<p>"+d1.deceased+"</p>"
          var rec="<p>"+d1.recovered+"</p>"
          //Displaying the details in Table
          
          document.getElementById("res").innerHTML=res;
          document.getElementById("act").innerHTML=act;
          document.getElementById("con").innerHTML=con;
          document.getElementById("dec").innerHTML=dec;
          document.getElementById("rec").innerHTML=rec;
          //Displaying the whether is safer or not
          if(d1.active==0)
          {
              document.getElementById("safe").innerHTML="<p>"+district+" is <b style='color:green;'>Safer</b> to visit</p";
          }
          else{
              document.getElementById("safe").innerHTML="<p>"+district+" is <b style='color:red;'>Not Safer</b> to visit</p>";
          
          }
        }
      });
    }
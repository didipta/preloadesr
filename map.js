// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en

const findlocation = () =>{
   
    const success = (position)=>{
        console.log(position);
        const latitude=position.coords.latitude;
        const longitude=position.coords.longitude;
        const geoapiurl=`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=b412ca48b1fd44f480d2ca7a0279bef3`;
       
      fetch(geoapiurl)
      .then(res=>res.json())
      .then(data=>{
          console.log(data.results[0].components);
          const a=data.results[0].components.suburb;
           document.getElementById("locationname").innerHTML=a;
      })

    // $.ajax({
    //     url: geoapiurl,
    //     type: 'GET',
    //     success: function(res) {
    //         console.log(res);
    //         alert(res);
    //     }
    // })
//b412ca48b1fd44f480d2ca7a0279bef3

    // $.get( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ latitude + "," + longitude +"&sensor=false", function(data) {
    //                 console.log(data);
    //               })

    }
    const error = () =>{
        console.log("error");
    }
    navigator.geolocation.getCurrentPosition(success,error);
}

document.querySelector(".mapbutton").addEventListener('click',findlocation);





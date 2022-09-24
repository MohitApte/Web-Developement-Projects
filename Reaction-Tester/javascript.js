 var start = new Date().getTime();
    
    function makeShapeAppear()
    {
        start = new Date().getTime();

        document.getElementById("shape").style.display = "block";
        document.getElementById("shape").style.top =  Math.random(50)*450 + "px";
        document.getElementById("shape").style.left =  Math.random(50)*200 + "px";
        document.getElementById("shape").style.width =  Math.random(50)*200 + "px";
        document.getElementById("shape").style.height =  Math.random(80)*200 + "px";
        document.getElementById("shape").style.backgroundColor = getRandomColor();
        if(Math.random()<0.5)
        {
             document.getElementById("shape").style.borderRadius = "50%";
        }
        else{
            document.getElementById("shape").style.borderRadius = "0";
        }

    }
    
    function getRandomColor() 
    {
    var letters = '0123456789ABCDEF';

    var color = '#';

    for (var i = 0; i < 6; i++ ) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

    }


    function setShapeAfterDelay()
    {
      setTimeout(makeShapeAppear, Math.random()*3000);
    }
    setShapeAfterDelay();
    document.getElementById("shape").onclick = function()
    {
        document.getElementById("shape").style.display = "none";
        var end = new Date().getTime();
        setShapeAfterDelay();
      
       var Time = ((end-start)/1000);
       document.getElementById("time").innerHTML = " "+ Time+" "+"seconds";

    }
 
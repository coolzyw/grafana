<canvas id="myCanvas" width="1000" height="500">
</canvas>


<canvas id="canvas" width="1000" height="600"> </canvas>
<input type="number" id="myNumber" value="">

<button onclick="myFunction()">Try it</button>
<button onclick="hello()">Show! </button>
<button onclick="hi()">Clear! </button>

<form action="" onsubmit="mytest()">
  Enter name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>


<div id="root"> </div>

<script>

function mytest() {
    alert("The form was submitted");
}

function hi(){
   console.log("clear button");
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  console.log("canvas width", myCanvas.width, " canvas height ", myCanvas.height);
  ctx.clearRect(0, 0,myCanvas.width, myCanvas.height);
}
  
function hello(){
  console.log("works!!!!");
 var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = 'rgb(200, 0, 0)';
ctx.fillRect(10, 10, 80, 50);
//ctx.clearRect(0, 0, canvas.width, canvas.height);
}


</script>


<script> 
var x= 2;
console.log(x);
myFunction();

function myFunction() {
    x = document.getElementById("myNumber").value;
    var y = document.getElementById("myNumber").value;
    console.log("test y value ", y); 
    console.log("test x value", x);
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        console.log(x);
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i=0; i<y; i++){
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10+80*i, 80, 50);
        ctx.fillStyle = 'rgb(100, 10, 50)';
        ctx.fillRect(600, 10+80*i, 80, 50);
        }
}
}
console.log("outside function scope ", x);


var canvas = document.getElementById('canvas');
if (canvas.getContext) {
        console.log(x);
        var ctx = canvas.getContext('2d');
        for (var i=0; i<2; i++){
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10+80*i, 80, 50);
        ctx.fillRect(600, 10+80*i, 80, 50);
        }
}

</script>
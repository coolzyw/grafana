// machine number
function initial() {
    var canvas = document.getElementById('canvas');
    x = document.getElementById('init').value;
    if (canvas.getContext) {
        console.log(x);
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < x; i++) {
            ctx.fillStyle = 'rgb(200, 0, 0)';
            ctx.fillRect(10, 10 + 80 * i, 80, 50);
            ctx.fillStyle = "black";
            ctx.font = "bold 12px Arial";
            var word_1 = "BD_" + i;
            ctx.fillText(word_1, 10+80/4,10 + 80 * i+50/2 );
            ctx.fillStyle = 'rgb(100, 10, 50)';
            ctx.fillRect(300, 10 + 80 * i, 80, 50);
            ctx.fillStyle = "white";
            ctx.font = "bold 12px Arial";
            var word_2 = "Dae_" + i;
            ctx.fillText(word_2, 300+80/4,10 + 80 * i+50/2 );
        }
    }
}


// one daemon is down
function down_one_daemon(){
    var canvas = document.getElementById('canvas');
    down_machine = document.getElementById('down').value;
    if (canvas.getContext) {
        console.log(x);
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(105, 105, 105)';
        ctx.fillRect(300, 10 + 80 * down_machine, 80, 50);
    }
}


// pop up one daemon
function pop_one_daemon(){
    var canvas = document.getElementById('canvas');
    up_machine = document.getElementById('down').value;
    if (canvas.getContext) {
        console.log(x);
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(100, 10, 50)';
        ctx.fillRect(300, 10 + 80 * up_machine, 80, 50);
        ctx.fillStyle = "white";
        ctx.font = "bold 12px Arial";
        var word_2 = "Dae_" + up_machine;
        ctx.fillText(word_2, 300+80/4,10 + 80 * up_machine+50/2 );
    }
}


// one daemon is down
function down_one_bd(){
    var canvas = document.getElementById('canvas');
    down_bd = document.getElementById('down').value;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(10, 10 + 80 * down_bd, 80, 50);
    }
}


// pop up one daemon
function pop_one_bd(){
    var canvas = document.getElementById('canvas');
    up_bd = document.getElementById('down').value;
    if (canvas.getContext) {
        console.log(x);
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10 + 80 * up_bd, 80, 50);
        ctx.fillStyle = "black";
        ctx.font = "bold 12px Arial";
        var word_1 = "BD_" + up_bd;
        ctx.fillText(word_1, 10 + 80 / 4, 10 + 80 * up_bd + 50 / 2);
    }
}

// link between two machine
function link(){
    var canvas = document.getElementById('canvas');
    var left = document.getElementById('left').value;
    var right = document.getElementById('right').value;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(10 + 80, 10 + 80 * left + 50/2);
        ctx.lineTo(300, 10 + 80 * right + 50/2);
        ctx.stroke();
    }
}

function clear_link(){
    var canvas = document.getElementById('canvas');
    var left = document.getElementById('left').value;
    var right = document.getElementById('right').value;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(10 + 80, 10 + 80 * left + 50/2);
        ctx.lineTo(300, 10 + 80 * right + 50/2);
        ctx.fillStyle = 'rgb(255, 255, 255)';
    }
}


function handleMouseDown(e){
    // tell the browser we're handling this event
    e.preventDefault();
    e.stopPropagation();
  
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);
  
    for(var i=0;i<hexes.length;i++){
      var h=hexes[i];
      ctx.beginPath();
      ctx.moveTo(h.points[0].x,h.points[0].y);
      for(var j=1;j<h.points.length;j++){
        ctx.lineTo(h.points[j].x,h.points[j].y);
      }
      ctx.closePath();
      //if(ctx.isPointInPath(mouseX,mouseY)){ window.open(h.url, '_blank'); }
      if(ctx.isPointInPath(mouseX,mouseY)){ alert('Navigate to: '+h.url); }
    }
  }
/*
// canvas related variables
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var cw=canvas.width;
var ch=canvas.height;
function reOffset(){
    var BB=canvas.getBoundingClientRect();
    offsetX=BB.left;
    offsetY=BB.top;        
}
var offsetX,offsetY;
reOffset();
window.onscroll=function(e){ reOffset(); }


ctx.lineWidth=2;

// linear interpolation -- needed in setClosestLine()
var lerp=function(a,b,x){ return(a+x*(b-a)); };

// vars to track which line is closest to the mouse
var closestLineIndex=-1;
var closestX,closestY;

// make some random lines and save them in lines[]
var n=5;
var lines=[];
var randomX=function(){return(Math.random()*cw*.67);}
var randomY=function(){return(Math.random()*ch*.67);}
var lastX=randomX();
var lastY=randomY();
for(var i=0;i<n;i++){
    var x=Math.random()*cw*.67;
    var y=Math.random()*ch*.67;
    var dx=x-lastX;
    var dy=y-lastY;
    var line={
        x0:lastX,
        y0:lastY,
        x1:x,
        y1:y,
        weight:Math.round(Math.random()*20),
        // precalc often used values
        dx:dx,
        dy:dy,
        dx2dy2:dx*dx+dy*dy,
    };
    lines.push(line);
    lastX=x;
    lastY=y;
}


redraw();

$("#canvas").mousedown(function(e){handleMouseDown(e);});
$("#canvas").mousemove(function(e){handleMouseMove(e);});


//////////////////////////////
// functions

// Find the index of the line closest to mx,my
function setClosestLine(mx,my) {
    //
    closestLineIndex=-1;
    var minDistanceSquared=100000000;
    //
    // examine each line & 
    // determine which line is closest to the mouse (mx,my)
    for(var i=0;i<lines.length;i++){
        var line=lines[i];
        var dx=line.x1-line.x0;
        var dy=line.y1-line.y0;
        var t=((mx-line.x0)*line.dx+(my-line.y0)*line.dy)/line.dx2dy2;
        var x=lerp(line.x0, line.x1, t);
        var y=lerp(line.y0, line.y1, t);
        var dx1=mx-x;
        var dy1=my-y;
        var distSquared=dx1*dx1+dy1*dy1;
        if(distSquared<minDistanceSquared){
            minDistanceSquared=distSquared;
            closestLineIndex=i;
            closestX=x;
            closestY=y;
        }
    }
};

// clear & redraw all lines
function redraw(){
    
    // clear the canvas
    ctx.clearRect(0,0,cw,ch);
    
    // draw all lines
    ctx.strokeStyle='black';
    for(var i=0;i<lines.length;i++){   
        var line=lines[i];
        ctx.beginPath();
        ctx.moveTo(line.x0,line.y0);
        ctx.lineTo(line.x1,line.y1);
        ctx.stroke();
    }

    // draw the line closest to the mouse in red
    if(closestLineIndex<0){return;}
    var line=lines[closestLineIndex];
    ctx.strokeStyle='red';
    ctx.beginPath();
    ctx.moveTo(line.x0,line.y0);
    ctx.lineTo(line.x1,line.y1);
    ctx.stroke();
}

// On mousemove, find line closest to mouse
function handleMouseMove(e){
  e.preventDefault();
  e.stopPropagation();

  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

  setClosestLine(mouseX,mouseY);

  redraw();

}

// On mousedown, remove line that was closest to mouse
function handleMouseDown(e){
    e.preventDefault();
    e.stopPropagation();

    if(closestLineIndex>=0){
        lines.splice(closestLineIndex,1);
        redraw();
    }
}

*/

var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var cw=canvas.width;
var ch=canvas.height;
function reOffset(){
  var BB=canvas.getBoundingClientRect();
  offsetX=BB.left;
  offsetY=BB.top;        
}
var offsetX,offsetY;
reOffset();
window.onscroll=function(e){ reOffset(); }
window.onresize=function(e){ reOffset(); }

var isDown=false;
var startX,startY;

var hexes=[];
hexes.push({
  points:[{x:10,y:10},{x:10,y:10+80},{x:10+50,y:10},{x:10+50,y:10+80}],
  url:'http://128.110.96.95:3000/d/000000003/general-info?refresh=10s&orgId=1',
});

//draw();

$("#canvas").mousedown(function(e){handleMouseDown(e);});

function draw(){
  for(var i=0;i<hexes.length;i++){
    var h=hexes[i];
    ctx.beginPath();
    ctx.moveTo(h.points[0].x,h.points[0].y);
    for(var j=1;j<h.points.length;j++){
      ctx.lineTo(h.points[j].x,h.points[j].y);
    }
    ctx.closePath();
    ctx.stroke();
  }
}


function handleMouseDown(e){
  // tell the browser we're handling this event
  e.preventDefault();
  e.stopPropagation();

  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

  for(var i=0;i<hexes.length;i++){
    var h=hexes[i];
    ctx.beginPath();
    ctx.moveTo(h.points[0].x,h.points[0].y);
    for(var j=1;j<h.points.length;j++){
      ctx.lineTo(h.points[j].x,h.points[j].y);
    }
    ctx.closePath();
      if (ctx.isPointInPath(mouseX, mouseY)) { alert('Navigate to: ' + h.url); }
      var windowObjectReference;
      var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
      windowObjectReference = window.open(h.url, "detailed page", strWindowFeatures);
  }
}

//D3
//squilite
//voltdb swap activities
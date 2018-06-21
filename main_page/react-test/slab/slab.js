// block device slab graph
// initial();
var hexes = [];
var slab = [];
var mapped_slab = [1, 2, 3, 4, 7];
function initial() {
    var canvas = document.getElementById('canvas');
    hexes = [];
    slab = [];
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var width = canvas.width;
        var height = canvas.height;
        var left_margin = width / 15;
        var top_margin = height / 15;
        var rectangle_height = height / 15 * 10;
        var rectangle_width = width / 15 * 10;
        // background color
        ctx.strokeStyle = "black";
        ctx.fillStyle = "rgba(255, 255, 0, .5)";
        roundRect(ctx, left_margin, top_margin, rectangle_width, rectangle_height, 40, true);
        // text
        ctx.fillStyle = "black";
        ctx.font = "bold 20px Arial";
        var word_1 = "Infiniswap Block Device";
        ctx.fillText(word_1, left_margin + rectangle_width / 2.8,
            top_margin + rectangle_height / 8);
        // every slab
        var slab_number = document.getElementById('init').value;
        var slab_width = rectangle_width / slab_number;
        for (var i = 0; i < slab_number; i++) {
            ctx.strokeStyle = "black";
            var found = mapped_slab.find(function (element) {
                return element == i;
            });
            if (typeof found == 'undefined'){
                ctx.fillStyle = "grey";
            }
            else{
                ctx.fillStyle = "rgb(135, 206, 250)";
            }
            roundRect(ctx, left_margin + i * slab_width + slab_width / 8, top_margin + rectangle_height / 4,
                slab_width / 5 * 4, rectangle_height / 2, 20, true);
        }
        // evict button
        for (var i = 0; i < slab_number; i++) {
            var item = {};
            item.points = [];
            item.points.push({ x: left_margin + i * slab_width + slab_width / 4 * 1.2, y: top_margin + rectangle_height / 4 * 2.8 + rectangle_height / 10 });
            item.points.push({ x: left_margin + i * slab_width + slab_width / 4 * 1.2 + slab_width / 2, y: top_margin + rectangle_height / 4 * 2.8 + rectangle_height / 10 });
            item.points.push({ x: left_margin + i * slab_width + slab_width / 4 * 1.2 + slab_width / 2, y: top_margin + rectangle_height / 4 * 2.8 + rectangle_height / 10 + rectangle_height / 18 });
            item.points.push({ x: left_margin + i * slab_width + slab_width / 4 * 1.2, y: top_margin + rectangle_height / 4 * 2.8 + rectangle_height / 10 + rectangle_height / 18 });
            item.url = 'http://128.110.96.95:3000/d/000000003/general-info?refresh=10s&orgId=1';
            hexes.push(item);
        }
        for (var i=0;i<slab_number;i++){
            var item = {};
            item.points = [];
            item.points.push({ x: left_margin + i * slab_width + slab_width / 8, y: top_margin + rectangle_height / 4 });
            item.points.push({ x: left_margin + i * slab_width + slab_width / 8 + slab_width / 5 * 4, y: top_margin + rectangle_height / 4 });
            item.points.push({ x: left_margin + i * slab_width + slab_width / 8 + slab_width / 5 * 4, y: top_margin + rectangle_height / 4 + rectangle_height / 2});
            item.points.push({ x: left_margin + i * slab_width + slab_width / 8, y: top_margin + rectangle_height / 4 + rectangle_height / 2});
            item.url = 'http://128.110.96.95:3000/d/000000003/general-info?refresh=10s&orgId=1';
            slab.push(item);
        }
        draw(mapped_slab);
        //draw_slab(mapped_slab);
        // slab title
        for (var i = 0; i < slab_number; i++) {
            ctx.fillStyle = "black";
            ctx.font = "bold 14px Arial";
            var word_2 = i;
            ctx.fillText(word_2, left_margin + slab_width * i + slab_width / 3 + slab_width / 8,
                top_margin + rectangle_height / 2);
        }
    }
}


function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
        var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
    if (stroke) {
        ctx.stroke();
    }
}


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width;
var ch = canvas.height;
var width = canvas.width;
var height = canvas.height;


function reOffset() {
    var BB = canvas.getBoundingClientRect();
    offsetX = BB.left;
    offsetY = BB.top;
}
var offsetX, offsetY;
reOffset();
window.onscroll = function (e) { reOffset(); }
window.onresize = function (e) { reOffset(); }

var isDown = false;
var startX, startY;


$("#canvas").mousedown(function (e) { handleMouseDown(e); });

function draw(mapped_slab) {
    console.log("hello");
    for (var i = 0; i < hexes.length; i++) {
        var found = mapped_slab.find(function (element) {
            return element == i;
        });
        if (typeof found == 'undefined'){
            continue;
        }
        var h = hexes[i];
        ctx.beginPath();
        ctx.moveTo(h.points[0].x, h.points[0].y);
        for (var j = 1; j < h.points.length; j++) {
            ctx.lineTo(h.points[j].x, h.points[j].y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = 'rgb(255,105,180)';
        ctx.fillRect(h.points[0].x, h.points[0].y,
            h.points[1].x - h.points[0].x, h.points[3].y - h.points[0].y);
        // fill slab

        // fill evict
        ctx.fillStyle = "white";
        ctx.font = "bold 10px Arial";
        var word_1 = "EVICT";
        var evict_width = h.points[1].x - h.points[0].x;
        var evict_height = h.points[3].y - h.points[0].y;
        ctx.fillText(word_1, h.points[0].x + evict_width / 8,
            h.points[0].y + evict_height / 4 * 3);
    }
}

function draw_slab(mapped_slab) {
    console.log("hello");
    for (var i = 0; i < slab.length; i++) {
        var h = slab[i];
        ctx.beginPath();
        ctx.moveTo(h.points[0].x, h.points[0].y);
        for (var j = 1; j < h.points.length; j++) {
            ctx.lineTo(h.points[j].x, h.points[j].y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = 'rgb(255,105,180)';
        ctx.fillRect(h.points[0].x, h.points[0].y,
            h.points[1].x - h.points[0].x, h.points[3].y - h.points[0].y);
    }
}


function handleMouseDown(e) {
    // tell the browser we're handling this event
    e.preventDefault();
    e.stopPropagation();

    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    for (var i = 0; i < hexes.length; i++) {
        var h = hexes[i];
        ctx.beginPath();
        ctx.moveTo(h.points[0].x, h.points[0].y);
        for (var j = 1; j < h.points.length; j++) {
            ctx.lineTo(h.points[j].x, h.points[j].y);
        }
        ctx.closePath();
        if (ctx.isPointInPath(mouseX, mouseY)) {
            var windowObjectReference;
            var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
            alert("send a web socket to infiniswap");
        }
    }

    for (var i = 0; i < slab.length; i++) {
        var h = slab[i];
        ctx.beginPath();
        ctx.moveTo(h.points[0].x, h.points[0].y);
        for (var j = 1; j < h.points.length; j++) {
            ctx.lineTo(h.points[j].x, h.points[j].y);
        }
        ctx.closePath();
        if (ctx.isPointInPath(mouseX, mouseY)) {
            var word = "";
            var found = mapped_slab.find(function (element) {
                return element == i;
            });
            if (typeof found == 'undefined'){
                word = "not mapped slab"
            }
            else{
                word = "navigate to daemon " + i;
            }
            var windowObjectReference;
            var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
            alert(word);
        }
    }

}
var pic = document.getElementById("one");

var lastX;
var lastY;
var first = 0;

var dot = function(e){
    var c1cle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    
    c1cle.setAttribute("cx", mouseX);
    c1cle.setAttribute("cy", mouseY);
    c1cle.setAttribute("r", 10);

    if( first == 0 ){
	first = 1;
    }
    else{
	var l1ne = document.createElementNS("http://www.w3.org/2000/svg", "line");
	l1ne.setAttribute("x1",lastX);
	l1ne.setAttribute("x2",mouseX);
	l1ne.setAttribute("y1",lastY);
	l1ne.setAttribute("y2",mouseY);
	l1ne.setAttribute("stroke","black");
	pic.appendChild(l1ne);
    }
    pic.appendChild(c1cle);
    lastX = mouseX;
    lastY = mouseY;
}

pic.addEventListener("click",dot);

for (int i =0; i<3; i++) 
{
	var child = document.createElement("li");
	var text = document.createTextNode("Item");
	child.appendChild(text);

	var parent = document.getElementById("test");
	parent.appendChild(child);
}
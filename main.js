menu_list_array = [["Veg Margherita Pizza",'<img id="im1" src="pizzaImg.png">'],
                        ["Chicken Tandoori Pizza",'<img id="im1" src="pizzaImg.png">'],
                        ["Veg Supreme Pizza",'<img id="im1" src="pizzaImg.png">'],
                        ["Paneer Tikka Pizza",'<img id="im1" src="pizzaImg.png">'],
                        ["Deluxe Veggie Pizza",'<img id="im1" src="pizzaImg.png">'],
                        ["Veg Extravaganza Pizza",'<img id="im1" src="pizzaImg.png">'],
                        ["Old shoes",'<img id="im1" src="https://www.kindpng.com/picc/m/30-308107_old-shoes-clipart-png-transparent-png.png">']];

    
    function getmenu(){
        var htmldata="";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i][0] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
    }

    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg.png">'
        var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+menu_list_array[i][1]+ menu_list_array[i][0]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
		// https://www.kindpng.com/picc/m/30-308107_old-shoes-clipart-png-transparent-png.png
    }

function add_top(){
	var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}

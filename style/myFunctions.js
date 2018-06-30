function plus() {
    		document.getElementById("qty").stepUp(1);
    	}
    	function minus() {
    		document.getElementById("qty").stepDown(1);
    	}
    	function chain() {
    		let x;
    		x =  document.getElementById("item").value;
    		if (x === "banana") {
    			x = "299";
    		
    		document.getElementById("price").value = x;}
    		else if (x === "melon") {
    			x = "399";
    		
    		document.getElementById("price").value = x;}
    		else if (x === "apples") {
    			x = "199";
    		
    		document.getElementById("price").value = x;}
    		else {
    			return false;
    		}
    	}
		
let array = new Array();
function add_element() {
    item = document.getElementById("item").value;
    price = document.getElementById("price").value;
    qty = document.getElementById("qty").value;
    document.getElementById('item').value='';
    document.getElementById('price').value='';
    document.getElementById('qty').value='1';
    let arrItem = "";
    let arrPrice = "";
    let arrQty = "";
    let arrSubtotal = "";
    let arrTotal = 0;

    if (item != ""){
        array.push({key: "value", 
            item: item,
            price: price,
            quantity: qty});
        
        
        for (i = 0; i < array.length; i++) {
            arrItem += array[i].item + "<br>";
            arrPrice += "N" + array[i].price + ".00" + "<br>";
            arrQty += array[i].quantity + "<br>";
            arrSubtotal += "N" + array[i].quantity*array[i].price + ".00" + "<br>";
            if(parseInt(array[i].price))
                arrTotal += parseInt(array[i].price)*parseInt(array[i].quantity);
            document.getElementById('dispitem').innerHTML =arrItem;
            document.getElementById('dispprice').innerHTML =arrPrice;
            document.getElementById('dispqty').innerHTML =arrQty;
            document.getElementById('dispsub').innerHTML =arrSubtotal;
            document.getElementById('disptotal').innerHTML = "N" + arrTotal + ".00" ;
            
        }
        
        
    }
}
function clear(){
            array = [0];
}
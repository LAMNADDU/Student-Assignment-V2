const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


//celsius and fahrenheit formula
let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit'); 


celsius.oninput = () => {
    let output = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
};

fahrenheit.oninput = () => {
    let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(output.toFixed(2));
};

//meters to feet and vice versa formula XD
let meters = document.getElementById('meters');
let feet = document.getElementById('feet'); 

meters.oninput = () => {
    let output = (parseFloat(meters.value)) *3.2808;
    feet.value = parseFloat(output.toFixed(2));
};

feet.oninput = () => {
    let output = (parseFloat(feet.value)) /3.2808;
    meters.value = parseFloat(output.toFixed(2));
};

//simple payrool logic

                 // Initialize cart      
                 function initcart(){
                    cart=[];
                    document.getElementById("items").value=cart.length;
                    document.getElementById("cart").innerHTML="";
            
                        
                }
            
                // Clear Cart
                function clearcart(){
                    var toclear;
            
                    toclear=confirm("Delete all item(s) from cart ?");
            
                    if (toclear) {
                         initcart();
                    }
                        
                }
            
                // Add item to cart
                function addtocart(){
                     
                     var cartitem = {
                         "item": "1",
                         "price": 0,
                         "qty": 1,
                         "amount": 0,
                        "itemamount" : function itemamount(){
                             return Math.round(this.price*this.qty*100)/100;  
                           },
                           "netpay" : function netpay(){
                             return Math.round(this.price*this.qty*100)/100-this.amount;  
                           }
                    
                        };
                        
                        
                      cartitem.item=document.getElementById("itemdesc").value;
                      cartitem.qty=document.getElementById("qty").value;
                      cartitem.price=document.getElementById("price").value;
                      cartitem.amount=document.getElementById("amount").value;
                     
                
            
                      console.log(cartitem.item);
                      console.log(cartitem.qty);
                      console.log(cartitem.price);
                      console.log(cartitem.amount);
                     
                
            
                       cart.push(cartitem);
                      //cart[cart.length]=cartitem;
            
                      console.log(cart.length);
                      document.getElementById("items").value=cart.length;
            
                      showcart();
            
                }
                
                
                // Delete item from chart
                function deleteitem(){
                    var todelete;
                    var itemno;
            
                    itemno=document.getElementById("delitem").value;
            
                    todelete=confirm("Delete item no. "+itemno+"?");
            
                    if (todelete) {
            
                         cart.splice(itemno-1,1);
                         document.getElementById("items").value=cart.length;
                         showcart();   
                    }
            
                }
            
                // Show the contents of the cart
                function showcart(){
            
                    var i,l,carttext,totalamount,ln;
                    var theader,tbody,tb,tfooter;
            
                
                    // Generate table header;
                    theader ="<thead>";
                    theader+="<tr>";
                    theader+="<th>No.</th>";
                    theader+='<th style="text-align:left" >Employee Name</th>';
                    theader+="<th>Days Worked</th>";
                    theader+='<th style="text-align:right">Daily Rate</th>';
                    theader+="<th>Gross Pay</th>";
                    theader+="<th>Deduction Amount</th>";
                    theader+="<th>Net Pay</th>";
                    theader+="</tr>";
                    theader+="</thead>";
                    
                    // Generate Table Body
                    l = cart.length;
                  
                    
                  //  for (i=0,totalamount=0,carttext="",tbody='<tbody id="cart">';i<l;i++){
                    for (i=0,totalamount=0,carttext="",tbody='';i<l;i++){
                        ln=i+1;
                        tbody += "<tr>"
                            +'<td>'+ln+' </td>'
                            +'<td>'+cart[i].item+' </td>'
                            +'<td style="text-align:right">'+cart[i].qty+'</td>'
                            +'<td style="text-align:right">'+cart[i].price+'</td>'
                            +'<td style="text-align:right">'+cart[i].itemamount()+'</td>'  
                            +'<td style="text-align:right">'+cart[i].amount+'</td>'  
                            +'<td style="text-align:right">'+cart[i].netpay()+'</td>' 		
                            +"</tr>";
                        
            
                    }
            
                   // tbody += "</tbody>";
            
                    // Generate table footer;
                    tfooter ="<tfoot>";
                    tfooter+="<tr>";
                     tfooter+='<th></th>';
                    tfooter+='<th style="text-align:left"></th>';
                    tfooter+='<th></th>';
                    tfooter+='<th></th>';
                    tfooter+='<th></th>';
                    tfooter+='<th></th>';
                    tfooter+='<th></th>';
                    tfooter+="</tr>";
                    tfooter+="</tfoot>";
            
                   console.log(theader+tbody+tfooter);
                    document.getElementById("cart").innerHTML=
                       '<table>'+theader+tbody+tfooter+'</table>';
            
            
                }
              
            // Global variable
            var cart = []; 
            
            
            
        //factorial shite

        // 
  function factorial()
  {
  var n = document.getElementById("num").value;
  var i, f=1;
  for(i=1; i<=n; i++) f *= i;
  document.getElementById("fact").innerHTML = f;
  }


                        function sumMo()
                        {
                        var n = document.getElementById("num1").value;
                        var i, f=0;
                        for(i=1; i<=n; i++) f += i;
                        document.getElementById("sum").innerHTML = f;
                        }
        
        
       // income calculator script

       function range () {
        var x=document.getElementById("total").value;
        if(x==0) {
            alert("Palihog kog butang sa kadakon, salamat");
        }

    
     else {
        var t=document.getElementById("price").value;
        var q=x*t/100;

        document.getElementById("remaining").value=-q;
        document.getElementById("income__tax").value=q;
    }
    }

       var p = document.getElementById("price"),
                res = doument.getElementById("result");

            p.addeventListener("input",function(){
                res.innerHTML = " " + p.value;
            }, false);  
            
  
  
  
            
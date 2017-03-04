//counter button code

 var button=document.getElementById('counter');
 button.onclick=function(){
    
    
    // create a request object
    
 var request=new XMLHttprequest();
    
    
    //Capture the response and store it in a variable
    
 request.onreadystatechange = function(){            //if request state changes then execute this function
 
     if (request.readyState === XMLHttpRequest.DONE){  //checks the req current state & if its XMLHttpRequest.Done(req successfully completed,                                                we want to take some action .If req not done yet,then ignore)
     
          if(request.status ===200){                  //if req status is 200,req is successfully completed
          
                   var counter= request.responseText;          //gives access to the response value
                   var span=document.getElementById('count');
                   span.innerHTML=counter.toString();
          }

     }
     
 }; 
  
  
      //make a request

request.open('GET','http://sarikau.imad.hasura-app.io/counter',true);
request.send(null);
      
     
 };     

    
    
    
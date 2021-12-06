$.ajax({
  type: 'POST',
  url: "pycee2.py",
  data: {param: "p1.py"}, //passing some input here
  dataType: "text",
  success: function(response){ //do something with resualt
     output = response;
     alert(output);
  }
}).done(function(data){
console.log(data);
alert(data);
});


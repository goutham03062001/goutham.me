$("#add_user").submit(function(event)
{
    alert("User created successfully");
})

$("#update_user").submit(function(event){
    event.preventDefault();
    var unindexedArray = $(this).serializeArray();
    console.log(unindexedArray);
})
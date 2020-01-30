<<<<<<< HEAD




$("#deletePhilly").on("click", function() {
    console.log("click")
    $.ajax({
        method: "POST",
        url: "/delete"
    }).done(function(data){
        console.log(data)
    })
    window.location = "/"
})
$("#deleteHouston").on("click", function() {
=======
$("#delete").on("click", function() {
>>>>>>> parent of 2c59060... houston db
    console.log("click")
    $.ajax({
        method: "POST",
        url: "/delete"
    }).done(function(data){
        console.log(data)
    })
    window.location = "/"
})

$("#scrape").on("click", function () {
    $.ajax({
        method: "GET",
        url: "/scrape",
    }).done(function (data) {
        console.log(data)
        window.location = "/"
    })
});

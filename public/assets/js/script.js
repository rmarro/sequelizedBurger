$(function () {
    $(document).on("click", ".devour-button", function (event) {
        event.preventDefault();
        var id = $(this).val();
        console.log(id)
    
        // Send the PUT request with the id of button clicked
        $.ajax("/burgers/update/" + id, {
            type: "PUT",
        }).then(
            function () {
                location.reload();
            }
        );
    });
});
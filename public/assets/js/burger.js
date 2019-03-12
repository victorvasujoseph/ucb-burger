$(function() {
  $(".submit").on("click", function() {
    event.preventDefault();
    let newBurger = {
      burger_name: $("#textarea").val().trim(),
        devoured:0
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });

    $(".to-devour").on("click", ".change-devour", function() {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");

      var newDevouredState = {
        devoured: newDevour
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(function() {
        console.log("changed devoured state to", newDevour);
        $(".to-devour").load(location.href + " .to-devour>*", "");
        $(".devoured").load(location.href + " .devoured>*", "");
      });
    });
});

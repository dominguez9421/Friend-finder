# Friend-finder
Friend Finder - Node and Express Servers  Overview In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.


<!-- <-- <footer class="footer">
    <div class="container">
      <p><a href="/friendfinder/app/data/friends.js"> API Friends List</a> | <a href="#">Github Repo</a></p>
    </div>
  </footer>
  </div>


  <script type="text/javascript">
    // Chosen CSS
    var config = {
      ".chosen-select": {},
      ".chosen-select-deselect": {
        allow_single_deselect: true
      },
      ".chosen-select-no-single": {
        disable_search_threshold: 10
      },
      ".chosen-select-no-results": {
        no_results_text: "Oops, nothing found!"
      },
      ".chosen-select-width": {
        width: "95%"
      }
    };

    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }

    // Capture the form inputs
    $("#submit").on("click", function (event) {
      event.preventDefault();

      // Form validation
      function validateForm() {
        var isValid = true;
        $(".form-control").each(function () {
          if ($(this).val() === "") {
            isValid = false;
          }
        });

        $(".chosen-select").each(function () {

          if ($(this).val() === "") {
            isValid = false;
          }
        });
        return isValid;
      }

      // If all required fields are filled
      if (validateForm()) {
        // Create an object for the user"s data
        var userData = {
          name: $("#name").val(),
          photo: $("#photo").val(),
          scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
          ]
        };

        var currentURL = window.location.origin;



        // AJAX post the data to the friends API.
        $.post(currentURL + "/api/friends", userData, function (data) {
          if (data) {

            //   // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#matchName").text(data.name);
            $("#matchImg").attr("src", data.photo);

            //   // Show the modal with the best match
            $("#resultsModal").modal("toggle");
          }

        });
      } else {
        alert("Please fill out all fields before submitting!");
      }

      return false;
    }); -->
 -->

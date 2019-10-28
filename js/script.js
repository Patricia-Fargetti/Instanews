document.addEventListener("DOMContentLoaded", function(event) {
  console.log("hello");
  $("#btn").on("change", function(event) {
    const selector = $(this)
      .val()
      .toLowerCase();
    console.log(selector);

    $.ajax({
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/${selector}.json?api-key=dhjSMeUrdWCaf0NTHIwDqpEMTZBa3QV4`,
      dataType: "json"
    }).done(function(nytArticles) {
      console.log(nytArticles);
      const results = nytArticles.results;
      $("#story-list").empty();

      $.each(results, function(index, value) {
        console.log(value);

        const abstract = value.abstract;
        const img = value.multimedia[4].url;

        $("#story-list").append(
          `
          <li class='stories' style='background-image:url(${img});'>
              ${abstract}
           
          </li>
          `
        );
      }); // end of .each
    }); // end of .done
  });
});

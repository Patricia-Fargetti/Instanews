$(".btn").on("change", function(event) {
  const selector = $(event.currentTarget)
    .find(".selector")
    .val();
  event.preventDefault();

  $.getJSON(
    "https://api.nytimes.com/svc/topstories/v2/{section}.json?api-key=dhjSMeUrdWCaf0NTHIwDqpEMTZBa3QV4",

    function(data) {
      console.log(data);

      console.log(selector);
      $.each(data.section, function(index, value) {
        console.log(value, index);
      });
    }
  );
});

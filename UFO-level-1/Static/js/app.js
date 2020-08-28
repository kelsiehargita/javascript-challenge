// from data.js
var tableData = data;
var tbody = d3.select("tbody")
var button = d3.select("#filter-btn");
var form = d3.select("form");

// add data to table
tableData.forEach(sighting => {
  var row = tbody.append("tr");

  Object.entries(sighting).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
  });
});


// Create event handlers 
button.on("click", FilterData);
form.on("submit",FilterData);

function FilterData() {
  d3.event.preventDefault();

  tbody.html("")

  var inputElement = d3.select("#inputDefault");
  var inputValue = inputElement.property("value");
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  filteredData.forEach(sighting => {
    var row = tbody.append("tr");
    console.log(sighting);

    Object.entries(sighting).forEach(function([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
 
 
};

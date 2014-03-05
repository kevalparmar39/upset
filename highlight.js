

function mouseoverColumn(d, i) {

  d3.selectAll(".connection, .combination rect, .setSize")
    .style("opacity", .3)
  
  d3.selectAll(".connection.diagonal").filter(function(dd, ii) { return ii == i;})
    .style("opacity", 1)

  d3.selectAll(".combination").selectAll("rect").filter(function(dd, ii) { return ii == i; })
    .style("opacity", 1)      

  d3.selectAll(".connection.vertical").filter(function(dd, ii) { return ii == i;})
    .style("opacity", 1)

  d3.selectAll(".setSize").filter(function(dd, ii) { return ii == i;})
    .style("opacity", 1)

}

function mouseoutColumn(d, i) {

 	d3.selectAll(".connection, .combination rect, .setSize").style("opacity", 1)      

}

function mouseoverRow(d, i) {

  d3.selectAll(".row")
    .style("opacity", .3)

  d3.selectAll(".row").filter(function(dd, ii) { return ii == i;})
    .style("opacity", 1)

}

function mouseoutRow(d, i) {

 	d3.selectAll(".row").style("opacity", 1)      

}

function mouseoverCell(d, i) {

	mouseoverColumn(d, i);
	mouseoverRow(d, d3.selectAll(".row").data().indexOf(d3.select(this).node().parentNode.parentNode.__data__))

}

function mouseoutCell(d, i) {

	mouseoutColumn(d, i);
	mouseoutRow(d, d3.selectAll(".row").data().indexOf(d3.select(this).node().parentNode.parentNode.__data__))

}
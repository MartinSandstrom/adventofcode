var searchRow = 3010;
var searchColumn = 3019;

var row = 1;
var column = 1;
var code = 20151125;

while ((row !== searchRow) || (column !== searchColumn)) {
	code = (code * 252533) % 33554393;

	if (row === 1) {
		row = column + 1;
		column = 1;
	} else {
		column++;
		row--;
	}
	console.log(row, column);
}

console.log('Answer: ', code);

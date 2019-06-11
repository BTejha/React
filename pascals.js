"use strict";

function showPascalTriangle() {
    $('#pascal').html = '';
    var noOfRows = $('#numRows').val();
    $('.child-block').empty();
    var array = createTriangle(+noOfRows);
    for (var i = 0; i < array.length; i++) {
        var insertDiv = document.createElement('div');
        insertDiv.className = "child-block";
        for (var j = 0; j < array[i].length; j++) {
            var span = document.createElement('span');
            span.innerHTML = array[i][j];
            span.className = "span-block";
            insertDiv.appendChild(span);
        }
        document.getElementById("pascal").appendChild(insertDiv);
    }
}

function createTriangle(n) {
    var array = [];
    var tmp;
    for (var i = 0; i < n; i++) {
        array[i] = [];
        for (var j = 0; j <= i; j++) {
            if (j == i) {
                array[i].push(1);
            } else {
                tmp = (!!array[i - 1][j - 1] ? array[i - 1][j - 1] : 0) + (!!array[i - 1][j] ? array[i - 1][j] : 0);
                array[i].push(tmp);
            }
        }
    }
    return array;
}

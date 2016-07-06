/**
 * 
 */
function seachRSS(){
	var text = $("#search_bar").val();
	$("#searchResult").empty();
	var baseName = "filesBase3",	storeName = "filesStore";
	var db = openDatabase(baseName, '1', 'Test_DB', 200000);
	db.transaction(function (tx){
		tx.executeSql("SELECT * FROM "+ storeName + " WHERE title LIKE '%" +text +"%'", [], function(tx, results){
			if(results.rows.length == 0)
				$("#searchResult").append('<li class="title">Nothing found</li>');
			else{
				for(i=0;i<results.rows.length;i++){
					var item = results.rows.item[i];
					$("#searchResult").append('<li class="title">'+ item['title'] +'</li>');
				}
			}
		}, function(e){console.log(e)});
	});
}
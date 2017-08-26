var fdb = new ForerunnerDB();
var db = fdb.db("my db");
var accountCollection = db.collection('account');

accountCollection.load();

$("#submit").click(function(){
	var date = $("#date").val();
	var category = $("#category").val();
	var item = $("#item").val();
	var cost = $("#cost").val();

	accountCollection.insert({
		date : date,
		category : category,
		item : item,
		cost : cost
	});

	accountCollection.save();
	alert("Complete")

	$("#date").val("");
	$("#category").val("");
	$("#item").val("");
	$("#cost").val("");
});
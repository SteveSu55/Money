var fdb = new ForerunnerDB();
var db = fdb.db("my db");
var accountCollection = db.collection('account');
accountCollection.load();

function createAccountHTMLStrings(date,category,item,cost){
	return"<tr><td>"+date+"</td><td>"+category+"</td><td>"+item+"</td><td>"+cost+"</td><td>"
}

setTimeout(function() {
            var account = accountCollection.find({}, {
                $orderbyBy: {"date": -1},
                $limit: 10
            }
            );
for (var i = 0 ; i < account.length; i++) {
	$("#account").append(createAccountHTMLStrings(account[i].date,account[i].category,account[i].item,account[i].cost))
}
        },500);
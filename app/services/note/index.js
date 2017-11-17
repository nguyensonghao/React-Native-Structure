export default class NoteService {
	insertCate (db, value) {
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				let query = "INSERT INTO cate_note(id, title) values(" + this.createKey() + ", '" + value + "')"
	            tx.executeSql(query, [], (tx, results) => {
	            	resolve(true);
	            }, error => {
	            	alert(JSON.stringify(error));
	            	reject(error);
	            });
	        });
		})
	}

	createKey () {
		let date = new Date().getTime().toString();
		return parseInt(date.substr(4, 13));
	}
}
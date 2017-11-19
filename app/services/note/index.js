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

	insertNote (db, value) {
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
	            tx.executeSql("INSERT INTO note(id, cate_id, title, content, date, status) VALUES(?, ?, ?, ?, ?, ?)", [this.createKey(), value.cate_id, value.title, value.content, value.date, 1], (tx, results) => {
	            	resolve(true);
	            }, error => {
	            	alert(JSON.stringify(error));
	            	reject(error);
	            });
	        });
		})
	}
}
export default class SqliteService {
	static find (db, table, id) {
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				let query = 'SELECT * FROM '+ table + ' WHERE id = ' + id
	            tx.executeSql(query, [], (tx, results) => {
	            	if (results && results.rows.item(0)) {
	            		resolve(results.rows.item(0));
	            	} else {
	            		resolve(null);
	            	}
	            });
	        });
		})
	}

	static delete (db, table, id) {
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				let query = 'DELETE  FROM '+ table + ' WHERE id = ' + id
	            tx.executeSql(query, [], (tx, results) => {
	            	resolve(true);
	            }, error => {
	            	reject(error);
	            });
	        });
		})
	}

	static all (db, table) {
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				let query = 'SELECT * FROM '+ table;
	            tx.executeSql(query, [], (tx, results) => {
	            	let result = [];
	            	for (let i = 0; i < results.rows.length; i++) {
            			result.push(results.rows.item(i))
            		}
            		resolve(result);
	            }, error => {
	            	reject(error);
	            });
	        });
		})
	}
}
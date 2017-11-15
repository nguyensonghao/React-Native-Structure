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
}
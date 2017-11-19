import { Alert, ToastAndroid } from 'react-native';

export default class UtilService {
	static alertError (message) {
		alert('Thông báo', message, 'Đóng');
	}

	static alert (title, message) {
		Alert.alert(
		  	title,
		  	message,
		  	[{text: 'Đóng'}]
		)
	}

	static toast (message) {
		ToastAndroid.show(message, ToastAndroid.SHORT);
	}

	static convertNiceDate (date) {
		var hours = date.getHours();
		var minute = date.getMinutes();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var d = date.getDate();
		month = month < 10 ? '0' + month : month;
		d = d < 10 ? '0' + d : d;
		hours = hours < 10 ? '0' + hours : hours;
		minute = minute < 10 ? '0' + minute : minute;
		return hours + ":" + minute + " - " + d + "/" + month + "/" + year;
	}
}
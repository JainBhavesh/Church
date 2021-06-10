import Snackbar from 'react-native-snackbar';

export function showToast(message, color = "red") {
    // Toast.showWithGravity(message, Toast.LONG, Toast.BOTTOM);
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: color,
        numberOfLines: 10,
    });
}

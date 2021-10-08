const SharedService = {
  getEmptyImagePlaceholder() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAMAAADaaRXwAAAAkFBMVEXY2Nimpqa+vr7ExMS8vLzJycm6urq5ubnX19etra3T09Ourq7W1tbU1NTS0tKsrKyvr6/R0dHQ0NCxsbGwsLCrq6vNzc20tLTV1dXFxcWysrLOzs7Dw8O9vb2qqqrGxsa7u7vAwMCpqanKysq2trbIyMizs7O1tbXPz8+/v7/BwcHMzMyoqKi3t7e4uLjCwsLnzYKKAAADBElEQVR4XuzAMQEAAADCIPunNsYeWAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODs3etu2kAQR/EOScj6BgXMxZhrEtJc2/d/u1baD5PESnaRPNpKOecR+AkkxoK/a0/NhUHNqXUAnF15nItZ82MJwHlNMzEtmwJwTpMbMe5mAkB8rhDzCgdAdBuxTzYARFeIffITgNhy8c22A4O2M/HlAES28B61s/F2tQdZABDZrQc5WIEfPMgtAJFdeZBLK5BLD3IFwDcBAQQQQACp9o+Hwebh/wABpF2KL9u75CCAuIFo91ViEEDcb3lblqcFAeRR3jcrU4IA0srHjilBAFl2QF6qdCCAVNKtSQcCyF66vaYDAeRRutUBgIflygoEkKF0Gwc8dlKvjEAAuZRuxZce052IzFY2IIA8Sbd1yMOLWIAA8izdtl95zEVUpHcQQNxOOi2CHl7EAoTTydM5n1iTuWjr0gAEkDKLfIOoh4oYgHBcnL7Iuy7CHipiAMLzkMVONPnzucdYPnZfGoDwxHCkB8bs9lOPkXp0RHoBAUR7Ho5F5OaucbEeKtInCCCaq/SlDXtoy9IABJBQo0wkLGIPAoh6xIrYgwCSZ/JVv5wxCCDxHipiDwKIesSK2IMAkhcS7s7ZgAAyWY/O8lARCxBAJmMZvxOp1CMk0isIIHoeyd6IVD8ltlfXHwgg6qEi6hHXoF8QQPQ8kuXqEd91XyCA6HlERbxHAhBA1EMr/olUtSQCAUTPIyqyqiURCCDqoRW1JAABJPD1LwUIIOqRHgQQ9UgPAoieR9KDANI9j6QHAUQ90oMAoh7pQQAJeaQH4Sdt6UEAuQYEEAIkECAECCAEiGmApA8QQPbD3tp/TxD+SBkQQAABBBAGXYjJI0bBiNm882NYkpheZZyYmO/uLwbuybWn5sKg5tS6v+3AMQEAAADCIPunNsYeWAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBrNTMp6EjJUwAAAABJRU5ErkJggg==";
  },

  hasAllowedChars(string, regEx) {
    return regEx.test(String(string));
  },

  fieldIsInValid(stringEmpty, stringTouched, stringValid) {
    let feedbackMessage;
    let isInValid;

    if (!stringValid && stringTouched) {
      feedbackMessage = "Please use allowed characters only";

      isInValid = true;
    } else if (stringEmpty && stringTouched) {
      feedbackMessage = "Field must not be empty";
      isInValid = true;
    } else {
      isInValid = false;
    }

    return [isInValid, feedbackMessage];
  },
};

export default SharedService;

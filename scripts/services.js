app.factory ('Calculator', function () {
  // constructor
  function Calculator () {}

  // συνάρτηση υπολογισμού του ρεύματος με γνωστά την αντίσταση και την τάση
  Calculator.prototype.Ohms_I = function (R, V, units) {
    // δήλωσε μία μεταβλητή που θα κρατά το ρεύμα και αρχικοποίησέ τη σε 0
    let I = 0;
    // στην περίπτωση που η παράμετρος R δεν είναι 0 τότε
    if (R != 0) I = V / R; // υπολόγισε την τιμή του ρεύματος

    // άν πρέπει να εμφανίσουμε μονάδες μέτρησης στο αποτέλεσμα
    if (units == true) I = I + ' Α'; // μορφοποίησε το αποτέλεσμα σε μορφή συμβολοσειράς με μονάδα μέτρησης

    return I; // επέστρεψε την τιμή του ρεύματος
  };
  // συνάρτηση υπολογισμού της τάσης με γνωστά την αντίσταση και το ρεύμα
  Calculator.prototype.Ohms_V = function (R, I, units) {
    // δήλωσε μια μεταβλητή που θα κρατά το αποτέλεσμα
    let V = R * I; // υπολόγισε το αποτέλεσμα της τάσης

    // άν πρέπει να εμφανίσουμε μονάδες μέτρησης στο αποτέλεσμα
    if (units == true) V = V + ' V'; // μορφοποίησε το αποτέλεσμα σε μορφή συμβολοσειράς με μονάδα μέτρησης

    return V; // επέστρεψε το αποτέλεσμα
  };
  // συνάρτηση υπολογισμού της αντίστασης με γνωστά την τάση και το ρεύμα
  Calculator.prototype.Ohms_R = function (V, I, units) {
    // δήλωσε μία μεταβλητή που θα κρατά την τιμή της αντίστασης
    let R = 0;
    // άν η παράμετρος I δέν έχει την τιμή 0
    if (I != 0) R = V / I; // υπολόγισε την αντίσταση απο τις παραμέτρους

    // άν πρέπει να εμφανίσουμε μονάδες μέτρησης στο αποτέλεσμα
    if (units == true) R = R + ' Ω'; // μορφοποίησε το αποτέλεσμα σε μορφή συμβολοσειράς με μονάδα μέτρησης

    return R; // επέστρεψε την τιμή της αντίστασης
  };

  // συνάρτηση εμβαδού τριγώνου
  Calculator.prototype.triangle_area = function (a, h, units) {
    // δήλωση εμβαδού
    let E = 0;

    E = a * h / 2; // υπολογισμός

    // εμφάνιση μονάδας
    if (units == true) E = E + ' cm^2';

    return E; // επιστροφή τιμής εμβαδού
  };

  // συνάρτηση υπολογισμού ύψους τριγώνου
  Calculator.prototype.triangle_height = function (a, E, units) {
    // δήλωση ύψους
    let h = 0;
    // η βάση δεν πρέπει να είναι =0
    if (a != 0) h = 2 * E / a; // υπολογισμός

    // εμφάνιση μονάδας
    if (units == true) h = h + ' cm';

    return h; // επιστροφή τιμής
  };

  // συνάρτηση υπολογισμού βάσης τριγώνου
  Calculator.prototype.triangle_base = function (h, E, units) {
    // δήλωση βάσης
    let a = 0;
    // το ύψος δεν πρέπει να είναι =0
    if (h != 0) a = 2 * E / h; // υπολογισμός

    // εμφάνιση μονάδας
    if (units == true) a = a + ' cm';

    return a; // επιστροφή τιμής
  };

  return Calculator;
});

app.factory ('Converter', function () {
  // constructor
  function Converter () {}

  Converter.prototype.celsiusToFahrenheit = function (C, accuracy) {
    let F = parseFloat (C) * 9 / 5 + 32;
    F = F.toFixed (accuracy);

    return F;
  };

  Converter.prototype.celsiusToKelvin = function (C, accuracy) {
    let K = parseFloat (C) + 273.15;
    K = K.toFixed (accuracy);

    return K;
  };

  Converter.prototype.kelvinToCelsius = function (K, accuracy) {
    let C = parseFloat (K) - 273.15;
    C = C.toFixed (accuracy);

    return C;
  };

  Converter.prototype.kelvinToFahrenheit = function (K, accuracy) {
    let F = parseFloat (K) * 9 / 5 - 459.67;
    F = F.toFixed (accuracy);

    return F;
  };

  Converter.prototype.fahrenheitToCelsius = function (F, accuracy) {
    let C = (parseFloat (F) - 32) * 5 / 9;
    C = C.toFixed (accuracy);

    return C;
  };

  Converter.prototype.fahrenheitToKelvin = function (F, accuracy) {
    let K = (parseFloat (F) + 459.67) * 5 / 9;
    K = K.toFixed (accuracy);

    return K;
  };

  // converter mm to meters
  Converter.prototype.MmToMeters = function (input) {
    let output = input * 0.001;
    return output;
  };
  // converter cm to meters
  Converter.prototype.CmToMeters = function (input) {
    let output = input * 0.01;
    return output;
  };
  // converter kilometres to meters
  Converter.prototype.KmToMeters = function (input) {
    let output = input * 1000;
    return output;
  };

  // converter yards to meters
  Converter.prototype.YardsToMeters = function (input) {
    let output = input * 0.9144;
    return output;
  };

  // converter feet to meters
  Converter.prototype.FeetToMeters = function (input) {
    let output = input * 0.3048;
    return output;
  };

  // converter inches to meters
  Converter.prototype.InchesToMeters = function (input) {
    let output = input * 0.0254;
    return output;
  };

  // converter meters to mm
  Converter.prototype.MetersToMM = function (input) {
    let output = input * 1000;
    return output;
  };

  // converter meters to mm
  Converter.prototype.MetersToCm = function (input) {
    let output = input * 100;
    return output;
  };

  // converter meters to km
  Converter.prototype.MetersToKm = function (input) {
    let output = input * 0.001;
    return output;
  };

  // converter meters to yards
  Converter.prototype.MetersToKm = function (input) {
    let output = input * 1.09361;
    return output;
  };

  // converter meters to feet
  Converter.prototype.MetersToFeet = function (input) {
    let output = input * 3.28084;
    return output;
  };

  // converter meters to inches
  Converter.prototype.MetersToFeet = function (input) {
    let output = input * 39.3701;
    return output;
  };

  return Converter;
});

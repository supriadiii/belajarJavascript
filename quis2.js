let score = 90

// Evaluasi nilai score menggunakan pernyataan if-else
if (score >= 90) {
    result = 'Selamat! Anda mendapatkan nilai A.';
  } else if (score >= 80 && score < 90) {
    result = 'Anda mendapatkan nilai B.';
  } else if (score >= 70 && score < 80) {
    result = 'Anda mendapatkan nilai C.';
  } else if (score >= 60 && score < 70) {
    result = 'Anda mendapatkan nilai D.';
  } else {
    result = 'Anda mendapatkan nilai E.';
  }

  console.log(result);
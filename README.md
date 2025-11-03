# Hands-On-Web-Component


Nama : Miera Ardiyanti Farica

NIM : 24/534436/PA/22665



Apa yang akan terjadi, jika pada custom web component kita tidak menggunakan shadow DOM?

==> Tanpa shadow DOM, CSS bisa bocor dan struktur internalnya tercampur dengan halaman utama.

a. CSS leaks in: Style di halaman utama atau dari komponen lain bisa menimpa style yang sudah di definisikan di dalam komponen kustom.

b. CSS leaks out: Style yang didefinisikan di dalam komponen kustom bisa mempengaruhi elemen di luar komponen itu sendiri.



Fungsi shadow DOM:

a. Enkapsulasi: Shadow DOM menciptakan "bayangan" terpisah dari DOM utama. Elemen dan style di dalam Shadow DOM sepenuhnya terisolasi dari sisa dokumen.

b. Pemisahan gaya: Ini memastikan bahwa style yang ditentukan untuk komponen kustom hanya berlaku di dalam komponen tersebut dan tidak bocor ke luar, begitu juga sebaliknya.

c. Menghindari konflik: Dengan enkapsulasi, user tidak perlu khawatir tentang konflik nama kelas atau ID dengan elemen lain di halaman, yang membuat pengembangan lebih terprediksi dan aman.

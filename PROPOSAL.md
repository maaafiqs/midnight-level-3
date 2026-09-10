# Product Proposal

## What is the product, and who uses it?

**MediCrypt ZK** adalah platform pertukaran rekam medis dan verifikasi kelayakan klaim kesehatan terdesentralisasi yang melindungi kerahasiaan riwayat klinis pasien.

Target penggunanya mencakup:

* **Pasien:** Individu yang ingin membuktikan status kesehatan (misalnya bukti vaksinasi, ketiadaan penyakit bawaan tertentu, atau kualifikasi uji klinis) kepada pihak ketiga tanpa membuka seluruh riwayat rekam medis mereka.
* **Penyedia Layanan Kesehatan (Rumah Sakit, Klinik, Lab):** Fasilitas medis yang menerbitkan atestasi klinis secara tepercaya dan dapat diverifikasi tanpa risiko kebocoran data terpusat.
* **Perusahaan Asuransi Kesehatan:** Penilai polis yang memverifikasi keabsahan klaim dan riwayat pra-kondisi secara kriptografis tanpa melanggar undang-undang privasi data kesehatan.
* **Penyelenggara Riset & Uji Klinis:** Peneliti yang menyaring populasi pasien sesuai kriteria inklusi studi klinis secara anonim.

## Why Midnight specifically?

Menyimpan atau mereferensikan catatan kesehatan di jaringan transparan (seperti Ethereum atau L1 publik standar) berisiko membocorkan data klinis ke seluruh dunia dan melanggar regulasi ketat seperti HIPAA, GDPR, dan UU Perlindungan Data Pribadi (PDP).

Midnight dirancang dengan pendekatan **rational privacy** yang ideal untuk sektor medis:

* **Dual-State & Client-Side Proofs:** Menggunakan bahasa kontrak **Compact**, kalkulasi ZK diproses di perangkat lokal pengguna (*proof server*). Data sensitif (diagnosis, resep, identitas) tetap berada di perangkat pasien sebagai *private state*, sementara jaringan hanya memverifikasi ZK-SNARK.
* **Selective Disclosure:** Pasien dapat memberikan akses baca (*read keys*) secara terenkripsi kepada dokter baru atau auditor regulasi tanpa membuka akses tersebut ke publik.
* **Biaya Transaksi Terprediksi:** Memanfaatkan sistem *shielded dual-token* (NIGHT/DUST) sehingga rumah sakit dan penjamin asuransi dapat mengestimasikan anggaran komputasi *on-chain* secara terukur.

## Data Model

| Data Point | Type | Disclosed To |
| --- | --- | --- |
| Status Validitas Klaim / Kelayakan (True/False) | Public ledger | Everyone |
| Komitmen Kriptografis Atestasi Faskes (Merkle Root Hash) | Public ledger | Everyone |
| Status Pencabutan Atestasi (*Revocation Status*) | Public ledger | Everyone |
| Detail Diagnosis Klinis, Hasil Tes Lab, & Riwayat Obat | Private witness | No one (Tersimpan lokal di sisi klien) |
| Identitas Lengkap Pasien (NIK / SSN, Nama, Tanggal Lahir) | Private witness | No one |
| Catatan Rekam Medis Utuh untuk Rujukan Tertentu | Private witness (selective) | Dokter Penerima / Auditor Resmi berizin |

## Mainnet Feasibility

**Yes, highly realistic to reach Mainnet by Level 6.**

* **Arsitektur Sirkuit Sederhana:** Logika kontrak hanya berfokus pada verifikasi tanda tangan digital faskes (*issuer attestation*), pengecekan pencabutan (*nullifier/revocation check*), dan pembuktian ambang batas (*threshold matching*) pada Compact.
* **Kesiapan Tooling:** Midnight menyediakan framework Compact, SDK TypeScript (`midnight-js`), serta proof server lokal yang langsung mendukung alur pembuatan ZK-proof di browser atau aplikasi mobile pengguna.
* **Roadmap yang Terukur:** Tahap Level 6 berfokus pada penyelesaian MVP fungsional di testnet dan migrasi ke target mainnet yang sudah aktif di lingkungan federasi stabil (*Kūkolu phase*). Tidak diperlukan sirkuit kriptografi kustom yang rumit di luar pustaka standar bawaan Midnight, sehingga waktu audit dan deployment berjalan cepat.
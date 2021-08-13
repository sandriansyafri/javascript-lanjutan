class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi = this.energi + porsi;
        return `energi kamu sekarang adalah ${this.energi}`;
    }
}

const sandrian = new Mahasiswa("sandrian", 100);
const hafid = new Mahasiswa("hafid", 200);

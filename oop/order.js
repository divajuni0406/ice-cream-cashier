export class Order {
  constructor() {
    this.totalTopping = 0;
    this.cupSizePrice = 0;
  }

  calculatePriceDefault(cupSize) {
    let self = this;

    for (let i = 0; i < cupSize.length; i++) {
      if (cupSize[i].checked) {
        self.cupSizePrice = parseInt(cupSize[i].value);
        self.grandTotal();
      }
    }
  }

  calculateSize(cupSize) {
    let self = this;

    for (let i = 0; i < cupSize.length; i++) {
      cupSize[i].addEventListener("click", (e) => {
        self.cupSizePrice = parseInt(e.target.value);
        self.grandTotal();
      });
    }
  }

  calculateTopping(topping) {
    let self = this;

    for (let index = 0; index < topping.length; index++) {
      topping[index].addEventListener("click", (e) => {
        if (e.target.checked) {
          self.totalTopping += parseInt(e.target.value);
        } else {
          self.totalTopping -= parseInt(e.target.value);
        }

        self.grandTotal();
      });
    }
  }

  grandTotal() {
    const totalPrice = document.querySelector("#total-price");
    let grandTotal = this.cupSizePrice + this.totalTopping;
    totalPrice.innerHTML = this.formatRupiah(grandTotal.toString(), "Rp");
  }

  formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
  }
}

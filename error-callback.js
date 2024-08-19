function makeCoffee(name, callback) {
  const estimationTime = 5000;
  let isSuccess = false;

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(
    `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`
  );

  setTimeout(() => {
    // Penentuan hasil dari proses asinkron
    const number = Math.random();
    if (number > 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      callback(new Error("Gagal membuatkan kopi."), null);
      return;
    }

    console.log("Pramusaji selesai membuat kopi.");
    callback(null, name);
  }, estimationTime);
}

function sendCoffee(name, callback) {
  const estimationTime = 2000;
  let isSuccess = false;

  console.log("Pramusaji sedang mengantarkan kopi pesanan");

  setTimeout(() => {
    // Penentuan hasil dari proses asinkron
    const number = Math.random();
    if (number > 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      callback(new Error("Gagal mengantarkan kopi."), null);
      return;
    }

    console.log("Pramusaji sudah sampai ke meja.");
    callback(name, null);
  }, estimationTime);
}

// start
const order = "Kopi Espresso";

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
  if (makeCoffeeError) {
    // Do something with error
    console.error(makeCoffeeError);
    return;
  }

  sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
    if (sendCoffeeError) {
      // Do something with error
      console.error(sendCoffeeError);
      return;
    }

    console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
    console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
  });
});

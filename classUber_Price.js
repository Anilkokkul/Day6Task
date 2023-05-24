class Uber_Price {
    constructor(distance) {
      this.distance = distance;
      
    }
    getPrice() {
      return (this.distance ) *30;
    }
  }
  
  let uber = new Uber_Price(10);
  const UberPrice = uber.getPrice();
  console.log(UberPrice);
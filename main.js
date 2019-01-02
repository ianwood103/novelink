var donationAmount;

function dollarAmount(amount) {
  if (amount === 1) {
    $('#one-dollar').addClass('checked');
    $('#five-dollar').removeClass('checked');
    $('#ten-dollar').removeClass('checked');
    $('#twentyfive-dollar').removeClass('checked');
    donationAmount = 1;
  }
  if (amount === 5) {
    $('#five-dollar').addClass('checked');
    $('#one-dollar').removeClass('checked');
    $('#ten-dollar').removeClass('checked');
    $('#twentyfive-dollar').removeClass('checked');
    donationAmount = 5;
  }
  if (amount === 10) {
    $('#ten-dollar').addClass('checked');
    $('#five-dollar').removeClass('checked');
    $('#one-dollar').removeClass('checked');
    $('#twentyfive-dollar').removeClass('checked');
    donationAmount = 10;
  }
  if (amount === 25) {
    $('#twentyfive-dollar').addClass('checked');
    $('#five-dollar').removeClass('checked');
    $('#ten-dollar').removeClass('checked');
    $('#one-dollar').removeClass('checked');
    donationAmount = 25;
  }

  if (amount > 100) {
    console.log("Nigga you crazy");
  }
  console.log(donationAmount);
}

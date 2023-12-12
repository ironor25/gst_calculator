const gstRates = {
  'Books': 5,
  'Mobiles': 12,
  'Food': 12,
  'Laptops': 18,
  'Soap': 12.5,
  'Perfume': 16.5,
  'Medicines': 0,
  'T-Shirt': 12.5,
  'Pants': 12.5,
  'Shirt': 12.5,
  'Bed Sheet': 12.5,
  'Dress': 12.5,
  'Watch': 12.5,
  'Footwear': 12.5,
  'Lingerie': 12.5,
  'Scarf': 12.5,
  'Sandal': 12.5,
  'Cloth': 12.5,
  'Tissue Pys': 12.5,
  'Bicycle': 12.5,
  'Bags': 12.5,        
  'Car': 12.5,
  'House': 12.5,
  'thong': 12.5,
  'Keyboard': 12,
  'Business Equipment': 12.5,
  'E-Cigarette':0.5,
  'Mobile Charger': 12.5,
  'Mobile Access': 12.5,
  'Vaping Supplies': 12.5,
  'Anythingory': 12.5,
  'Camera': 12.5,
  'B Else': 12.5
};

function calculate_gst() {
    const product = document.getElementById('product').value;
    const mrp = parseFloat(document.getElementById('mrp').value);
    const gstRate = gstRates[product];
    const gstAmount = (mrp * gstRate) / 100;
    const actualCost = mrp - gstAmount;

    document.getElementById('result').innerHTML = `Actual Cost: ${actualCost.toFixed(2)}  Gst Rate: ${gstRate} Gst Paid: ${gstAmount}`;
};
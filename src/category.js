var category = function category(key) {
  const categoryMap = {
    pl: "Personal Loan",
    Vl: "Vehicle Loan",
    EL: "Education Loan",
    hL: "Home Loan",
  };
  return categoryMap[key];
};

module.exports = {
  category: category,
};

export const formatPrice = (number) => {
  // product component -- format price
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100); // divide by 100 to decrease price
};

export const getUniqueValues = () => {};

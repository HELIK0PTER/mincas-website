import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// Get Stripe Product
export const getStripeProduct = async (productId: string) => {
  return await stripe.products.retrieve(productId);
};

// Get Stripe Products
export const getStripeProducts = async () => {
  return await stripe.products.list();
};

// Get Stripe Price
export const getStripePrice = async (priceId: string) => {
  return await stripe.prices.retrieve(priceId);
};

// Get Stripe Price by ProductID
export const getStripePriceByProduct = async (productId: string) => {
  return await stripe.prices.search({
    query: `${`product: "${productId}"`}`,
  });
};

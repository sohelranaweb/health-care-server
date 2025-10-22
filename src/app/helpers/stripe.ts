import Stripe from "stripe";
import config from "../../config";

const stripe = new Stripe(config.stripeSecretKey as string);
export default stripe;

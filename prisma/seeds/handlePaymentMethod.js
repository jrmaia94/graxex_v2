import { PaymentMethod } from "@prisma/client";

export const handlePaymentMethod = (value) => {
  if (!value) return undefined;

  if (value.toUpperCase() === "PIX") return PaymentMethod.PIX;

  if (value.toUpperCase() === "BOLETO") return PaymentMethod.BOLETO;

  if (value.toUpperCase() === "CARTÃO") return PaymentMethod.CARTAO;

  if (value.toUpperCase() === "DINHEIRO") return PaymentMethod.DINHEIRO;
};

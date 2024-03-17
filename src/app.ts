import { calculatorResponse, register } from "./interfaces";

export async function calculator(
  params: register
): Promise<calculatorResponse> {
  return params;
}

const params: register = {
  name: "Luna",
  idade: 1,
};

const response = await calculator(params);
consoele.log(response);

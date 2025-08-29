import { somar, subtrair, multiplicar, dividir } from './index.js';

// ---------- Teste Soma ----------
{
  // Arrange
  const a = 2, b = 3, esperado = 5;
  // Act
  const resultado = somar(a, b);
  // Assert
  console.log(resultado === esperado 
    ? ` Soma passou : Resultado esperado: ${esperado}` 
    : ` Soma falhou : Resultado esperado: ${esperado}, obtido: ${resultado}`);
}

// ---------- Teste Subtração ----------
{
  const a = 5, b = 3, esperado = 2;
  const resultado = subtrair(a, b);
  console.log(resultado === esperado 
    ? ` Subtração passou : Resultado esperado: ${esperado}` 
    : ` Subtração falhou : Resultado esperado: ${esperado}, obtido: ${resultado}`);
}

// ---------- Teste Multiplicação ----------
{
  const a = 4, b = 3, esperado = 12;
  const resultado = multiplicar(a, b);
  console.log(resultado === esperado 
    ? ` Multiplicação passou : Resultado esperado: ${esperado}` 
    : ` Multiplicação falhou : Resultado esperado: ${esperado}, obtido: ${resultado}`);
}

// ---------- Teste Divisão ----------
{
  const a = 10, b = 2, esperado = 5;
  const resultado = dividir(a, b);
  console.log(resultado === esperado 
    ? ` Divisão passou : Resultado esperado: ${esperado}` 
    : ` Divisão falhou : Resultado esperado: ${esperado}, obtido: ${resultado}`);
}

// ---------- Teste Divisão por Zero ----------
{
  try {
    dividir(5, 0);
    console.error(" Divisão por zero não lançou erro : Resultado esperado: lançar erro");
  } catch (e) {
    console.log(" Divisão por zero lançou erro corretamente : Resultado esperado: lançar erro");
  }
}

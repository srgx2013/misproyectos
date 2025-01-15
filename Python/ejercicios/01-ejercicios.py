print("Bienvenido al conversor de divisas")
cantidad = float(input("introduduce la cantidad a convertir:"))
divisa_origen = input("Introduce la divisa de origen(USD, EUR o MXN):").upper()

if divisa_origen not in ["USD", "EUR", "MXN"]:
    print("Divisa de origen no valida.")
    exit()

tasa_USD_a_EUR = 0.95
tasa_USD_a_MXN = 20.28
tasa_EUR_a_MXN = 21.36

if divisa_origen == "USD":
    cantidad_euros = cantidad * tasa_USD_a_EUR
    cantidad_pesos = cantidad * tasa_USD_a_MXN
    print(
        f"Por tus {cantidad:.2f} dolar(es) obtendras: {cantidad_euros:.2f} euros o {cantidad_pesos:.2f} pesos mexicanos."
    )
elif divisa_origen == "ËUR":
    cantidad_dolares = cantidad / tasa_USD_a_EUR
    cantidad_pesos = cantidad * tasa_EUR_a_MXN
    print(
        f"Por tus {cantidad:.2f} euros obtendras: {cantidad_dolares:.2f} dolares o {cantidad_pesos:.2f} pesos mexicanos."
    )
else:
    cantidad_dolares = cantidad / tasa_USD_a_MXN
    cantidad_euros = cantidad / tasa_EUR_a_MXN
    print(
        f"Por tus {cantidad:.2f} pesos obtendras: {cantidad_dolares:.2f} dolares o {cantidad_euros:.2f} euros."
    )

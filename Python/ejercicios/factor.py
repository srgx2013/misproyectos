
i = 0
dato = input ('ingrese el numero que quiera sacar factor')
try:
    factor = int(dato)

except:

    factor = 'hola'

if factor == 'hola':
    print('íngresaste mal un dato, prueba con solo numeros')
    exit() 
    
while i <= factor:
    i += 1

    r = factor%i 
if r == 0:
    print(i)

     
    

        

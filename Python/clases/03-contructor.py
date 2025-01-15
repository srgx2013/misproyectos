class Perro:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def habla(self):
        print(f"{self.nombre} dice Gua")


mi_perro = Perro("chanchito", 1)
mi_perro.habla()

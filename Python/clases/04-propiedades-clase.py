class Perro:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    @classmethod
    def habla(cls):
        print("Gua")

CREATE TABLE Clientes (
id int NOT NULL AUTO_INCREMENT,
nit int NOT NULL,
nombre varchar(200) NOT NULL,
direccion varchar(500) NOT NULL,
ciudad varchar(100) NOT NULL,
correo varchar(100) NOT NULL,
telefono int NOT NULL,
PRIMARY KEY (id)
);
CREATE TABLE Sucursales (
id int NOT NULL AUTO_INCREMENT,
nombre varchar(500) NOT NULL,
direccion varchar(500) NOT NULL,
telefono int NOT NULL,
id_cliente int NOT NULL,
PRIMARY KEY (id),
KEY Sucursales_FK (id_cliente),
CONSTRAINT Sucursales_FK FOREIGN KEY (id_cliente) REFERENCES Clientes (id)
);

CREATE TABLE Perfiles (
id int NOT NULL AUTO_INCREMENT,
nombre varchar(100) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE Usuarios (
id int NOT NULL AUTO_INCREMENT,
login varchar(100) NOT NULL,
password varchar(1000) NOT NULL,
direccion varchar(500) NOT NULL,
correo varchar(200) NOT NULL,
telefono int NOT NULL,
id_perfil int NOT NULL,
PRIMARY KEY (id),
KEY Usuarios_FK (id_perfil),
CONSTRAINT Usuarios_FK FOREIGN KEY (id_perfil) REFERENCES Perfiles (id)
);

CREATE TABLE UsuariosCliente (
id int NOT NULL AUTO_INCREMENT,
id_cliente int NOT NULL,
id_usuario int NOT NULL,
PRIMARY KEY (id),
KEY UsuariosCliente_FK (id_cliente),
KEY UsuariosCliente_FK_1 (id_usuario),
CONSTRAINT UsuariosCliente_FK FOREIGN KEY (id_cliente) REFERENCES Clientes
(id),
CONSTRAINT UsuariosCliente_FK_1 FOREIGN KEY (id_usuario) REFERENCES Usuarios
(id)
);

CREATE TABLE Mensajeros (
id int NOT NULL AUTO_INCREMENT,
id_usuario int NOT NULL,
identificacion int NOT NULL,
nombre varchar(200) NOT NULL,
PRIMARY KEY (id),
KEY Mensajeros_FK (id_usuario),
CONSTRAINT Mensajeros_FK FOREIGN KEY (id_usuario) REFERENCES Usuarios (id)
ON DELETE CASCADE
);

CREATE TABLE MensajerosClientes (
id int NOT NULL AUTO_INCREMENT,
id_cliente int NOT NULL,
id_mensajero int NOT NULL,
PRIMARY KEY (id),
KEY MensajerosClientes_FK (id_cliente),
KEY MensajerosClientes_FK_1 (id_mensajero),
CONSTRAINT MensajerosClientes_FK FOREIGN KEY (id_cliente) REFERENCES Clientes
(id) ON DELETE CASCADE,
CONSTRAINT MensajerosClientes_FK_1 FOREIGN KEY (id_mensajero) REFERENCES
Mensajeros (id) ON DELETE CASCADE
);

CREATE TABLE EstadosPedido (
id int NOT NULL AUTO_INCREMENT,
nombre varchar(50) NOT NULL,
PRIMARY KEY (id)
);
CREATE TABLE TiposTransporte (
id int NOT NULL AUTO_INCREMENT,
nombre varchar(50) NOT NULL,
PRIMARY KEY (id)
);
CREATE TABLE Pedidos (
id int NOT NULL AUTO_INCREMENT,
fecha_hora datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
origen int NOT NULL,
destino int NOT NULL,
ciudad varchar(100) NOT NULL,
descripcion varchar(500) NOT NULL,
tipo_transporte int NOT NULL,
numero_paquetes int NOT NULL,
id_usuario int NOT NULL,
id_mensajero int DEFAULT NULL,
sw_estado VARCHAR(1) NOT NULL DEFAULT '1' COMMENT ' estado del pedido 1->activo, 0->inactivo'
PRIMARY KEY (id),
KEY Pedidos_FK (tipo_transporte),
KEY Pedidos_FK_1 (id_usuario),
CONSTRAINT Pedidos_FK FOREIGN KEY (tipo_transporte) REFERENCES TiposTransporte
(id),
CONSTRAINT Pedidos_FK_1 FOREIGN KEY (id_usuario) REFERENCES UsuariosCliente
(id),
CONSTRAINT Pedidos_FK_2 FOREIGN KEY (id_mensajero) REFERENCES Mensajeros (id),
CONSTRAINT Pedidos_FK_3 FOREIGN KEY (origen) REFERENCES Sucursales (id),
CONSTRAINT Pedidos_FK_4 FOREIGN KEY (destino) REFERENCES Sucursales (id)
);



CREATE TABLE HistorialPedidos (
id int NOT NULL AUTO_INCREMENT,
id_pedido int NOT NULL,
id_estado int NOT NULL,
fecha_hora datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
url_foto varchar(500) DEFAULT NULL,
PRIMARY KEY (id),
KEY HistorialPedidos_FK (id_pedido),
KEY HistorialPedidos_FK_1 (id_estado),
CONSTRAINT HistorialPedidos_FK FOREIGN KEY (id_pedido) REFERENCES Pedidos
(id) ON DELETE CASCADE,
CONSTRAINT HistorialPedidos_FK_1 FOREIGN KEY (id_estado) REFERENCES
EstadosPedido (id)
)

INSERT INTO `perfiles` (`id`, `nombre`) VALUES
(1, 'Administrador'),
(2, 'Mensajero'),
(3, 'empleado');

INSERT INTO `usuarios` (`id`, `login`, `password`, `direccion`, `correo`, `telefono`, `id_perfil`) VALUES
(1, 'esteban98', 'este123', 'calle 8 #7-39', 'esteb12@gmail.com', 3225362, 1),
(2, 'juanpa12', 'por2', 'calle 9 #7-43', 'juaped2@gmail.com', 3102834, 1),
(3, 'estefania92', 'liber12', 'calle 100 #12-5', 'estefa12@gmail.com', 3152348, 2),
(4, 'alejo64', 'alejo01', 'carrera 100 #12-5', 'alejd45@gmail.com', 31234756, 2);

INSERT INTO `mensajeros` (`id`, `id_usuario`, `identificacion`, `nombre`) VALUES
(1, 4, 12464, 'alejo64'),
(2, 3, 87635, 'juanito'),
(3, 1, 453, 'Maria del mar');

INSERT INTO `clientes` (`id`, `nit`, `nombre`, `direccion`, `ciudad`, `correo`, `telefono`) VALUES
(1, 8443, 'banco', 'calle 23 #4-23', 'cali', 'banco@gmail.com', 1);

INSERT INTO `sucursales` (`id`, `nombre`, `direccion`, `telefono`, `id_cliente`) VALUES
(1, 'corresponsal banco', 'calle 29 #80-12', 31209342, 1);

INSERT INTO `tipostransporte` (`id`, `nombre`) VALUES
(1, 'moto'),
(2, 'carro');

INSERT INTO `usuarioscliente` (`id`, `id_cliente`, `id_usuario`) VALUES
(1, 1, 1);

INSERT INTO `pedidos` (`id`, `fecha_hora`, `origen`, `destino`, `ciudad`, `descripcion`, `tipo_transporte`, `numero_paquetes`, `id_usuario`, `id_mensajero`) VALUES
(1, '2023-06-01 22:34:43', 1, 1, 'cali', 'electrodomesticos', 2, 12, 1, 1);

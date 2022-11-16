import httpInstance from './http'


export const LoginAve = () => {
  return httpInstance('APP_AVEONLINE')
  .post('comunes/v2.0/autenticarusuario.php', {
    tipo: "authLogin",
    usuario: "demo",
    idtipo_cliente: "1",
    ipvisitante: "55521244444",
    latitud: "arriba",
    longitud: "aladerecha",
    ciudad: "medallo",
    pais: "polombia",
    nombre: "Will",
    id_usuario: "1"
  })
}
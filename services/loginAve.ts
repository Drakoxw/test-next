import http from './http'

export const LoginAve = () => {
  const route = 'comunes/v2.0/autenticarusuario.php'
  const body = {
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
  }
  return http('APP_AVEONLINE').post(route, body)
}
import http from '@services/http'
import { IredirectRecoverProcces } from '@interfaces/index'

const createFormLogin = (email = '', password = ''): HTMLFormElement => {
  const form = document.createElement('form')
  form.setAttribute('method', 'POST')
  form.setAttribute('action', 'https://app.aveonline.co/principales/servicios/validate_login.V2.php')

  const user = document.createElement('input')
  user.setAttribute('type', 'text')
  user.setAttribute('name', 'usuario')
  user.value = email

  const pass = document.createElement('input')
  pass.setAttribute('type', 'text')
  pass.setAttribute('name', 'clave')
  pass.value = password

  const origin = document.createElement('input')
  origin.setAttribute('type', 'text')
  origin.setAttribute('name', 'origin')
  origin.value = 'newLogin'

  form.append(user)
  form.append(pass)
  form.append(origin)

  return form
}

const redirectRecoverProcces = (data: IredirectRecoverProcces) => {
  const route = 'comunes/v2.0/onBoarding.php'
  const body = {
    tipo: 'recoverProcess',
    ...data
  }
  return http('APP_AVEONLINE').post(route, body)
}

export { createFormLogin, redirectRecoverProcces }

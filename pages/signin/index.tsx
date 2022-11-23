import { FormEvent, useEffect, useState } from 'react';

import LayoutOnBoarding from '@layouts/LayoutOnBoarding'
import AppInputPass from '@components/AppInputPass';
import AppInputText from '@components/AppInputText';
import { poppins } from '../../styles/fonts'
import Image from 'next/image';

import { createFormLogin, redirectRecoverProcces } from 'utils';
import { useRouter } from 'next/router';
import { GetIpClient } from '@services/index';

export default function Signin() {
  const [isValid, setValid] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [user, setUser] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    if (pass && user) {
      return setValid(false)
    }
    setValid(true)
  }, [user, pass])

  const loguerToAve = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const { status } = await redirectRecoverProcces({ email: user, password: pass })
    if (status !== 200) {
      const form = createFormLogin(user, pass)
      const formHidden = window.document.getElementById('form_hidden')
      if (formHidden) {
        formHidden.appendChild(form)
        return form.submit()
      }
    }
  }

  return (
    <LayoutOnBoarding>
      <section className="h-screen background_login text-gray-600">
        <div className="w-full flex justify-center">
          <section
            className="w-full md:w-6/12 lg:w-4/12  mx-auto
            flex h-screen flex-col items-center justify-center" >
            <figure>
              <Image
                src="/svgs/logo-dark.svg"
                alt="logo Aveonline"
                className="w-40"
                loading="lazy"
              />
            </figure>
            <div
              className=" lg:m-[24px] bg-white w-[320px] lg:w-[80%] max-w-[476px] py-4 space-y-6
                mt-4 px-2 h-auto lg:h-auto lg:mt-7 rounded-[20px] border border-gray-100 text-center
                shadow-[0px_8px_17px_0px_#CBCBCB]">
              <h5 className={`${poppins.className} inline-block text-[24px] text-gray-800 font-serif font-bold`}>
                Ingresa
                <div className="m-0 rounded-lg border-2 border-red-500 bg-red-500 p-0 text-red-500"></div>
              </h5>

              <form onSubmit={(ev) => loguerToAve(ev)} className="space-y-3 lg:space-y-4 lg:text-center">
                <AppInputText setValue={setUser} placeHolder='Usuario' />
                <AppInputPass setValue={setPass} placeHolder='Contraseña'/>
                {error ?
                  <p className="text-xs text-red-500 mt-0">
                    <strong>Login</strong> o <strong>Contraseña</strong> incorrecto, vuelve a intentarlo.
                  </p>
                : '' }

                <p className="text-[14px]">
                  ¿Has olvidado tu <strong className='hover:text-gray-700 cursor-pointer'>
                    contraseña</strong>?
                </p>

                {isValid ?
                  <div className="btn btn-secondary mx-auto w-[284px] h-[48px] text-[14px]" >
                    Ingresar
                  </div>
                : 
                  <button type="submit"
                    className="btn btn-primary w-[284px] h-[48px] text-[14px]">
                    Ingresar
                  </button>
                }

                <a
                  href="https://aveonline.co/app/contrato/terminosCondiciones.html"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="m-[24px] text-[12px] text-gray-600">
                    Ver <strong className='hover:text-gray-700 cursor-pointer'>
                      términos y condiciones.
                    </strong>
                  </p>
                </a>
              </form>
            </div>

            <section className="w-full mt-5 flex lg:flex-row justify-center items-center gap-4">
              <p className="font-bold text-[14px]">¿No tienes cuenta?</p>
              <button className="border-2 border-red-500 rounded-full text-red-500 font-bold w-[168px]
                h-[48px] text-[14px] text-center hover:bg-red-500 hover:text-white">
                Registrate
              </button>
            </section>
          </section>
        </div>
      </section>
      <div id='form_hidden' className='hidden'></div>
    </LayoutOnBoarding>
  );
}

export async function getStaticProps() {
  let ip = '';
  const res = await GetIpClient()
  if (res && res.data?.ip) {
    ip = res.data.ip
  }
  return {
    props: {
      ip,
      event: "Login",
      page: "page initial",
    },
  };
}

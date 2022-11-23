import { T_PropsFormLogin } from '@interfaces/index'

export default function AppInputText ({ title = '', placeHolder = '', setValue }: T_PropsFormLogin) {

  const DispatchValue = (ev: React.FormEvent<EventTarget>) => {
    const target = ev.target as HTMLInputElement;
    setValue(`${target.value}`)
  }

  return (
    <section className="py-2">
      { title !== '' ? <span className="px-1 text-sm text-gray-600">{ title }</span> : '' }
      <div className="relative">
      <input placeholder={placeHolder} type='text' onKeyUp={DispatchValue}
        className="text-md block px-3 py-2 rounded-full w-full 
        bg-white border border-gray-300 placeholder-gray-600 hover:shadow-md
        focus:placeholder-gray-500
        focus:bg-white 
        focus:border-2 
        focus:outline-none"/>
      </div>
    </section>
  )

}

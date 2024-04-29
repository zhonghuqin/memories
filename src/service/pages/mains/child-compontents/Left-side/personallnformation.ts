import lsjRequest from '@/service/index'

export function Editperson(formState: {
  name: string
  age: string
  adress: string
}) {
  return lsjRequest.post({
    url: '',
    data: formState
  })
}

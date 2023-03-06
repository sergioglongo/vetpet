// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils

// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Button, Label, FormText, Form, Input } from 'reactstrap'

// ** Store & Actions
import { addUser } from '../store'
import { useDispatch } from 'react-redux'
import { useCreateUserMutation } from '../../../../queries/user/apiUser'


const defaultValues = {
  email: '',
  contact: '',
  company: '',
  fullName: '',
  username: '',
  country: null
}

const checkIsValid = () => {
  return true
}

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [role, setRole] = useState('1')
  const [createUser, {}] = useCreateUserMutation()

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** Function to handle form submit
  const onSubmit = data => {
    if (checkIsValid()) {
      toggleSidebar()
      createUser({
        user:data.username,
        mailUser: data.email,
        idTypeUser: role,
        avatarLink: data.avatarLink
      })
      dispatch(
        addUser({
          role,
          avatar: '',
          status: 'active',
          email: data.email,
          currentPlan: 'plan',
          billing: 'auto debit',
          company: 'company',
          contact: 'contact',
          fullName: data.username,
          username: data.username,
          country: 'Argentina'
        })
      )
    } else {
      console.log("Paso por NO creacion")
      for (const key in data) {
        if (data[key] === null) {
          setError('country', {
            type: 'manual'
          })
        }
        if (data[key] !== null && data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  const handleSidebarClosed = () => {
    for (const key in defaultValues) {
      setValue(key, '')
    }
    setRole('1')
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='Crear Usuario'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
      onClosed={handleSidebarClosed}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-1'>
          <Label className='form-label' for='username'>
            Usuario <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='username'
            control={control}
            render={({ field }) => (
              <Input id='username' placeholder='johnDoe99' invalid={errors.username && true} {...field} />
            )}
          />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='userEmail'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <Input
                type='email'
                id='userEmail'
                placeholder='usuario@email.com'
                invalid={errors.email && true}
                {...field}
              />
            )}
          />
          <FormText color='muted'>Formato email</FormText>
        </div>        
        <div className='mb-1'>
          <Label className='form-label' for='avatarLink'>
            Foto <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='avatarLink'
            control={control}
            render={({ field }) => (
              <Input
                type='text'
                id='avatarLink'
                placeholder='https://kis.agh.edu.pl/wp-content/uploads/2021/01/default-avatar.jpg'
                invalid={errors.avatarLink && true}
                {...field}
              />
            )}
          />
          <FormText color='muted'>Link a imagen en la nube</FormText>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='user-role'>
            Tipo Usuario
          </Label>
          <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
            <option value='1'>Supervisor</option>
            <option value='2'>Administrador</option>
            <option value='3'>Veterinario</option>
            <option value='4'>Cliente</option>
          </Input>
        </div>
        <Button type='submit' className='me-1' color='primary'>
          Crear
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancelar
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers

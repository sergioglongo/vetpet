// ** React Imports
import { useState, Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader } from 'reactstrap'

// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import { Check, Briefcase, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import { usePutUserMutation, useInactiveUserMutation } from '../../../../queries/user/apiUser'

const roleColors = {
  3: 'light-info',
  1: 'light-danger',
  2: 'light-warning',
  4: 'light-success'
}

const statusColors = {
  true: 'light-success',
  false: 'light-warning'
}

const statusOptions = [
  { value: true, label: 'Activo' },
  { value: false, label: 'Inactivo' }
]

const roleOptions = [
  { value: '1', label: 'Supervisor' },
  { value: '2', label: 'Administrativo' },
  { value: '4', label: 'Cliente' },
  { value: '3', label: 'Veterinario' }
]

const MySwal = withReactContent(Swal)

const UserInfoCard = ({ selectedUser }) => {
  // ** State
  const [show, setShow] = useState(false)
  const [putUser, { isSuccess: isSuccessPut }] = usePutUserMutation()
  const [inactiveUser, { isSuccess: isSuccessInactive }] = useInactiveUserMutation()
  // ** Hook
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: selectedUser.username,
      email: selectedUser.email
    }
  })

  // ** render user img
  const renderUserImg = () => {
    if (selectedUser !== null && selectedUser.avatar.length) {
      return (
        <img
          height='110'
          width='110'
          alt='user-avatar'
          src={selectedUser.avatar}
          className='img-fluid rounded mt-3 mb-2'
        />
      )
    } else {
      return (
        <Avatar
          initials
          color={selectedUser.avatarColor || 'light-primary'}
          className='rounded mt-3 mb-2'
          content={selectedUser.fullName}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(48px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '110px',
            width: '110px'
          }}
        />
      )
    }
  }

  if (isSuccessPut) {
    MySwal.fire({
      icon: 'success',
      title: 'Editado',
      text: 'El usuario a sido editado correctamente.',
      customClass: {
        confirmButton: 'btn btn-success'
      }
    })
  }

  if (isSuccessInactive) {
    MySwal.fire({
      icon: 'success',
      title: selectedUser.status ? 'Activado' : 'Inactivado',
      text: `El usuario a sido ${selectedUser.status ? 'Activado' : 'Inactivado'}.`,
      customClass: {
        confirmButton: 'btn btn-success'
      }
    })
  }

  const onSubmit = data => {
    console.log("Fields", Object.values(data)[0].length > 0)
    if (Object.values(data)[0].length > 0) {
      console.log("data onsubmit:", data)
      setShow(false)
      putUser({
        idUser: selectedUser.id,
        user: data.username,
        mailUser: data.email,
        status: data.status.value,
        idTypeUser: data.role.value
      })
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  const handleReset = () => {
    reset({
      username: selectedUser.username,
      email: selectedUser.email
    })
  }

  const handleSuspendedClick = () => {
    return MySwal.fire({
      title: selectedUser.status ? 'Inactivar' : 'Activar',
      text: `Procedera a ${selectedUser.status ? 'Inactivar' : 'Activar'} al usuario`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: selectedUser.status ? 'Inactivar' : 'Activar',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ms-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        inactiveUser({
          idUser: selectedUser.id,
          status: !selectedUser.status
        })
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire({
          title: 'Cancelado',
          text: 'Se cancelo la inactivación',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className='user-avatar-section'>
            <div className='d-flex align-items-center flex-column'>
              {renderUserImg()}
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='user-info'>
                  <h4>{selectedUser !== null ? selectedUser.username : 'Eleanor Aguilar'}</h4>
                  {selectedUser !== null ? (
                    <Badge color={roleColors[selectedUser.role]} className='text-capitalize'>
                      {selectedUser.roleName}
                    </Badge>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-around my-2 pt-75'>
            <div className='d-flex align-items-start me-2'>
              <Badge color='light-primary' className='rounded p-75'>
                <Check className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0'>1.23k</h4>
                <small>Tasks Done</small>
              </div>
            </div>
            <div className='d-flex align-items-start'>
              <Badge color='light-primary' className='rounded p-75'>
                <Briefcase className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0'>568</h4>
                <small>Projects Done</small>
              </div>
            </div>
          </div>
          <h4 className='fw-bolder border-bottom pb-50 mb-1'>Detalles</h4>
          <div className='info-container'>
            {selectedUser !== null ? (
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>Usuario:</span>
                  <span>{selectedUser.username}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>Email:</span>
                  <span>{selectedUser.email}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>Status:</span>
                  <Badge className='text-capitalize' color={statusColors[selectedUser.status]}>
                    {selectedUser.status ? 'Activo' : 'Inactivo'}
                  </Badge>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>Role:</span>
                  <span className='text-capitalize'>{selectedUser.roleName}</span>
                </li>

              </ul>
            ) : null}
          </div>
          <div className='d-flex justify-content-center pt-2'>
            <Button color='primary' onClick={() => setShow(true)}>
              Editar
            </Button>
            <Button className='ms-1' color={selectedUser.status ? 'danger' : 'success'} outline onClick={handleSuspendedClick}>
              {selectedUser.status ? 'Inactivar' : 'Activar'}
            </Button>
          </div>
        </CardBody>
      </Card>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>Editar Información de Usuario</h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='gy-1 pt-75'>
              <Col xs={6}>
                <Label className='form-label' for='username'>
                  Usuario
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='username'
                  name='username'
                  render={({ field }) => (
                    <Input {...field} id='username' placeholder='john.doe.007' invalid={errors.username && true} />
                  )}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='email'>
                  Email
                </Label>
                <Controller
                  defaultValue={selectedUser.email}
                  control={control}
                  id='email'
                  name='email'
                  render={({ field }) => (
                    <Input {...field} id='email' placeholder='example@domain.com' invalid={errors.email && true} />
                  )}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='status'>
                  Estado:
                </Label>
                <Controller
                  defaultValue={statusOptions[statusOptions.findIndex(i => i.value === selectedUser.status)]}
                  control={control}
                  id='status'
                  name='status'
                  render={({ field }) => (
                    <Select
                      {...field}
                      id='status'
                      isClearable={false}
                      className='react-select'
                      classNamePrefix='select'
                      options={statusOptions}
                      theme={selectThemeColors}
                    />
                  )}
                />

              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='role'>
                  Tipo Usuario:
                </Label>
                <Controller
                  defaultValue={roleOptions[roleOptions.findIndex(i => i.label === selectedUser.roleName)]}
                  control={control}
                  id='role'
                  name='role'
                  render={({ field }) => (
                    <Select
                      {...field}
                      isClearable={false}
                      className='react-select'
                      classNamePrefix='select'
                      options={roleOptions}
                      theme={selectThemeColors}
                    />
                  )}
                />
              </Col>
              <Col xs={12} className='text-center mt-2 pt-50'>
                <Button type='submit' className='me-1' color='primary'>
                  Editar
                </Button>
                <Button
                  type='reset'
                  color='secondary'
                  outline
                  onClick={() => {
                    handleReset()
                    setShow(false)
                  }}
                >
                  Cancelar
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default UserInfoCard

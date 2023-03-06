import React, { useState, useEffect, Suspense } from 'react'

// ** Router Import
import Router from './router/Router'

// ** Routes & Default Routes
import { getRoutes } from './router/routes'

// ** Hooks Imports
import { useLayout } from '@hooks/useLayout'

import { enableNotifications, obtainToken } from './@core/auth/api/firebase.js'
import { Button, Card, CardBody } from 'reactstrap'
import { X } from 'react-feather'

const ToastError = () => {
  return (
    <Card>
      <CardBody>
        <div className='d-flex text-center align-items-center flex-column'>
          <X size='32' className='mb-1' />
          <h5 className='mb-1 fw-bolder'>Error</h5>
          <p className='mb-50'>Creates a notification with an animated error icon.</p>
          <Button color='danger' onClick={() => toast.error("This didn't work.")}>
            Error
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

const App = () => {
  const [allRoutes, setAllRoutes] = useState([])

  // ** Hooks
  const { layout } = useLayout()

  useEffect(() => {
    setAllRoutes(getRoutes(layout))
  }, [layout])

  useEffect(() => {
    if (enableNotifications()) {
      console.log("notificaciones habilitadas")
      obtainToken().then(token => {
        if (token?.status) {
          console.log("token obtenido:", token?.value)
        } else {
          console.log("token status fallo:", token?.value)
        }
      }).catch(err => {
        toast(t => (
          <ToastError t={t} error={`Error:${err}`} />
        ))
        console.log("Error obteniendo token")
      })
    }
  }, [])

  return (
    <Suspense fallback={null}>
      <Router allRoutes={allRoutes} />
    </Suspense>
  )
}

export default App

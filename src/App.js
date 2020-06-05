import React from 'react'
import Table from '../components/Table'
import Image from '../components/Image'
import P from '../components/P'

function App() {
  window.marketoVariables = {
    hello: 'I am variableness!!!',
  }
  return (
    <Table style={{ maxWidth: '100%' }} td>
      <td className="mktoContainer">
        <Table>
          <Table className="mktoModule">
            <P x={100} />
            <Image
              src="http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-event-registration-email-logo-image-242x37.png"
              alt="logo"
            />
          </Table>
          <Table className="mktoModule">
            <Image
              src="http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-event-registration-email-header-image-600x207.png"
              style={{ width: '100%' }}
            />
          </Table>
          <Table className="v1" style={{ backgroundColor: '#B01F2E' }}>
            <P h={30} />
            <div
              className="mktEditable"
              id="exampleText"
              mktoname="Main Body Text"
            >
              MONTH 00 | 00:00AM - 00:00PM
            </div>
          </Table>
        </Table>
      </td>
    </Table>
  )
}

export default App

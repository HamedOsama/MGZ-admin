import React from 'react'
import ModalWrapper from '@components/wrappers/ModalWrapper'

interface ShowDataModalProps {
  data: object
  title?: string
}
const notShow = ['password', 'state', 'city', 'address', 'zipCode', '__v', '_id', '__typename', 'tokens' , 'resetLink' , 'image','street','floor','apartment','building']
const ShowDataModal = ({ data, title }: ShowDataModalProps) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="px-3 py-1 bg-red-500 text-white rounded-md cursor-pointer"
      >
        {title || 'Show Data'}
      </div>
      {showModal &&
        (
          <ModalWrapper
            closeHandler={() => setShowModal(false)}
            title='Buyer Information'
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              {
                Object.keys(data).map((key) => {
                  return notShow.includes(key) ? null :
                    (
                      <div className="flex items-center flex-wrap gap-2 w-full h-full">
                        <p className="text-lg sm:text-xl font-bold text-gray-700">{key}:</p>
                        <p className="text-base text-gray-700">{data[key]}</p>
                      </div>
                    )
                })
              }
            </div>
          </ModalWrapper>
        )
      }
    </>

  )
}

export default ShowDataModal
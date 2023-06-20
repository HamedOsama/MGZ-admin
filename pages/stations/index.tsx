import React, { useEffect } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import PageTitle from '../../components/PageTitle/PageTitle'
import MainButton from '../../components/MainButton/MainButton'
import ModalWrapper from '../../components/wrappers/ModalWrapper'
import ModalInput from '../../components/ModalInput/ModalInput'
import Table from '../../components/Table/Table'
import useInput from '../../hooks/use-input'
import axios from 'axios'
import env from '../../API/ApiUrl'
import { toast } from 'react-hot-toast'
import ReactPaginate from 'react-paginate'
import DeleteModal from '@components/Modals/DeleteModal'
import { useRouter } from 'next/router'
import { FormControl, InputLabel, MenuItem } from '@mui/material'
import { HexColorPicker } from 'react-colorful'
import { Input, Select } from 'antd'


interface IStaProps {
  linkQuery: string
  page: string
}

axios.defaults.withCredentials = true;
const index = ({ linkQuery, page }: IStaProps) => {

  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);
  const [stations, setStations] = React.useState([]);
  const [loading, setLoading] = React.useState(false)
  const [refetch, setRefetch] = React.useState<boolean>(false)
  const [totalLength, setTotalLength] = React.useState<number>(0)
  const [selectedStation, setSelectedStation] = React.useState<any>(null)
  const [selectedStationDetails, setSelectedStationDetails] = React.useState<any>(null)

  const [updating, setUpdating] = React.useState<boolean>(false)

  const [deleting, setDeleting] = React.useState<boolean>(false)
  const [currentPage, setCurrentPage] = React.useState<number>(page ? parseInt(page) : 1);
  const [query, setQuery] = React.useState<string>(linkQuery || '?limit=10');

  useEffect(() => {
    const getStation = async () => {
      try {
        setLoading(true)
        console.log(linkQuery)
        const res = await axios.get(`${env.API_URL}/admin/stations${query ? `?${query}` : ''}`);

        setStations(res?.data?.body)
        setTotalLength(res?.data?.totalLength)
      } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.message || 'Something went wrong')
      }
      setLoading(false);
    }
    getStation();
  }, [refetch, query])

  useEffect(() => {
    let query = '?limit=10'
    if (currentPage > 1)
      query += `&page=${currentPage}`
    const formattedQuery = new URLSearchParams(query).toString().replaceAll('+', '%20');
    setQuery(formattedQuery)

    if (formattedQuery)
      router.push(`/stations?${formattedQuery}`)
    else
      router.push(`/stations`)
  }, [currentPage])

  const handlePageClick = (e: any) => {
    setCurrentPage(e.selected + 1)
  };

  const {
    value: enteredLineName,
    isValid: enteredLineNameIsValid,
    hasError: lineNameHasError,
    onChangeHandler: onChangeLineNameHandler,
    setValueHandler: setLineNameValueHandler,
    onBlurHandler: onBlurLineNameHandler,
    resetInputHandler: resetLineNameInput
  } = useInput((value) => value?.trim()?.length > 0);

  // const {
  //   value: enteredWay,
  //   isValid: enteredWayIsValid,
  //   hasError: wayHasError,
  //   onChangeHandler: onChangeWayHandler,
  //   setValueHandler: setWayValueHandler,
  //   onBlurHandler: onBlurWayHandler,
  //   resetInputHandler: resetWayInput
  // } = useInput((value) => value?.length > 0);

  const [enteredWay, setEnteredWay] = React.useState<string[]>([]);
  const [enteredWayHasError, setEnteredWayHasError] = React.useState<string>('');
  const onChangeWayHandler = (value: string[]) => {
    setEnteredWay(value);
  }


  const {
    value: enteredEndPoint,
    isValid: enteredEndPointIsValid,
    hasError: endPointHasError,
    onChangeHandler: onChangeEndPointHandler,
    setValueHandler: setEndPointValueHandler,
    onBlurHandler: onBlurEndPointHandler,
    resetInputHandler: resetEndPointInput
  } = useInput((value) => value?.trim()?.length > 0, 'مصنع جريش للزجاج العاشر من رمضان');


  const {
    value: enteredColor,
    isValid: enteredColorIsValid,
    hasError: colorHasError,
    onChangeHandler: onChangeColorHandler,
    setValueHandler: setColorValueHandler,
    onBlurHandler: onBlurColorHandler,
    resetInputHandler: resetColorInput
  } = useInput((value) => value?.trim()?.length > 0);
  let formIsValid = false;
  if (
    enteredLineNameIsValid &&
    enteredWay.length > 0 &&
    enteredEndPointIsValid &&
    enteredColorIsValid
  )
    formIsValid = true;
  const resetFormHandler = () => {
    resetLineNameInput();
    setEnteredWay([]);
    setEnteredWayHasError('');
    resetEndPointInput();
    resetColorInput();
  }
  const touchFormHandler = () => {
    onBlurLineNameHandler();
    if (enteredWay.length === 0)
      setEnteredWayHasError('This field is required');
    onBlurEndPointHandler();
    onBlurColorHandler();
  }
  useEffect(() => {
    if (!isOpen && !updating)
      resetFormHandler();

  }, [isOpen, updating])


  const updateButtonHandler = (id: string) => {
    setUpdating(true)
    setSelectedStation(id)
    const station = stations.find((station: any) => station._id === id)

    setSelectedStationDetails(station);
    setLineNameValueHandler(station.lineName)
    setEnteredWay(station.way)
    setEndPointValueHandler(station.end)
    setColorValueHandler(station.color)

  }
  const deleteButtonHandler = (id: string) => {
    setDeleting(true)
    setSelectedStation(id)
    console.log(id)
    console.log(deleting)
  }


  const addStaHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //touch form to show errors
    touchFormHandler();

    if (!formIsValid)
      return;

    //send data to server
    console.log('submitting form');

    const notification = toast.loading('Adding Station...');
    try {
      const req = axios.post(`${env.API_URL}/admin/stations`, {
        lineName: enteredLineName,
        way: enteredWay,
        end: enteredEndPoint,
        color: enteredColor
      })
      const res = await req;
      console.log(res.data);
      toast.dismiss(notification);
      toast.success('Station Added Successfully');
      setIsOpen(false);
      setRefetch(prev => !prev);
      resetFormHandler();
    }
    catch (e) {
      console.log(e)
      toast.dismiss(notification);
      toast.error(e?.response?.data?.message || 'something went wrong');
    }
  }

  const updateStaHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //touch form to show errors
    touchFormHandler();

    if (!formIsValid)
      return;

    //send data to server
    console.log('submitting form');

    const notification = toast.loading('Updating Station...');
    try {
      const req = axios.patch(`${env.API_URL}/admin/stations/${selectedStation}`, {
        lineName: enteredLineName,
        way: enteredWay,
        end: enteredEndPoint,
        color: enteredColor
      })
      const res = await req;
      console.log(res.data);
      toast.dismiss(notification);
      toast.success('Station Updated Successfully');
      setUpdating(false);
      setRefetch(prev => !prev);
      resetFormHandler();
    }
    catch (e) {
      console.log(e)
      toast.dismiss(notification);
      toast.error(e?.response?.data?.message || 'something went wrong');
    }
  }

  const deleteStaHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const notification = toast.loading('Deleting Station...');
    try {
      setDeleting(false);
      const req = axios.delete(`${env.API_URL}/admin/stations/${selectedStation}`)
      await req;
      toast.dismiss(notification);
      toast.success('Station Deleted Successfully');
      setRefetch(prev => !prev);
    }
    catch (e) {
      console.log(e)
      toast.dismiss(notification);
      toast.error(e?.response?.data?.message || 'something went wrong');
    }
  }


  console.log(enteredColor)

  return (
    <DashboardLayout>
      <div className="max-sm:px-4 flex flex-col gap-6  sm:flex-row sm:justify-between sm:items-center">
        <PageTitle title='Stations' total={totalLength} />
        <MainButton bg='bg-black max-sm:w-fit'
          rest={{
            onClick: () => setIsOpen(true),
            type: 'button'
          }}
        >
          <span className='text-base'>Add Station</span>
          <span className='ml-2 text-2xl'>+</span>
        </MainButton>
      </div>

      {
        (isOpen || updating) && (
          <ModalWrapper title={isOpen ? 'Add Station' : 'Update Station'}
            closeHandler={
              () => {
                setIsOpen(false)
                setUpdating(false)
              }
            }
          >
            <div className="px-2">
              <div className="grid gap-4 my-4">
                <ModalInput
                  label='LineName'
                  name='lineName'
                  variant='filled'
                  required={true}
                  value={enteredLineName}
                  onChange={onChangeLineNameHandler}
                  onBlur={onBlurLineNameHandler}
                  error={lineNameHasError}
                  helperText={lineNameHasError ? 'This field is required' : ''}
                />
                <ModalInput
                  label='EndPoint'
                  name='endPoint'
                  variant='filled'
                  required={true}
                  value={enteredEndPoint}
                  onChange={onChangeEndPointHandler}
                  onBlur={onBlurEndPointHandler}
                  error={endPointHasError}
                  helperText={endPointHasError ? 'This field is required' : ''}
                />

              </div>
              <div className='mb-4'>
                <p className='mb-4 font-bold text-lg'>Line Color :</p>
                <HexColorPicker
                  color={enteredColor}
                  onChange={setColorValueHandler}
                  className='!w-full'
                />
                {colorHasError && <p className='text-red-500 text-sm mt-2'>This field is required</p>}
              </div>
              <div className="mb-4">
                <p className='block mb-2 text-sm text-black'>Way</p>
                <Select
                  mode="tags"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Line Way"
                  onChange={onChangeWayHandler}
                  value={enteredWay}
                />
                {enteredWayHasError && <p className='text-red-500 text-xs'>{enteredWayHasError}</p>}
              </div>

            </div>
            <div className='flex justify-end items-center'>

              <MainButton bg='bg-green-600 duration-300 hover:bg-green-500 hover:bg-opacity-80 hover:shadow-lg'
                rest={{
                  onClick: (e: any) => isOpen ? addStaHandler(e as any) : updateStaHandler(e as any),
                  type: 'button'
                }}
              >
                <span className='text-base'>{isOpen ? 'Add' : 'Update'}</span>
              </MainButton>
            </div>

          </ModalWrapper>
        )
      }

      <Table
        heads={[
          { title: 'ID', key: '_id' },
          { title: 'Line Name', key: 'lineName' },
          { title: 'Start Point', key: 'startPoint' },
          { title: 'End Point', key: 'end' },
          { title: 'Created At', key: 'createdAt' },
          { title: 'Actions', key: 'actions' },
        ]}
        items={stations}
        onClickUpdate={updateButtonHandler}
        onClickDelete={deleteButtonHandler}
        type="station"
      />

      {
        deleting && (
          <DeleteModal
            title='Delete Station'
            closeHandler={() => setDeleting(false)}
            deleteHandler={deleteStaHandler}
          />
        )
      }

      <div className="">

        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <span className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
              <span>
                Next
              </span>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </span>
          }
          previousLabel={
            <span className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>

              <span>
                previous
              </span>
            </span>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={Math.ceil(totalLength / 10)}
          renderOnZeroPageCount={undefined}
          initialPage={currentPage - 1}
          containerClassName='flex items-center justify-center mt-6 w-full gap-1'

          pageLinkClassName='px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100 duration-150'

          activeLinkClassName='px-2 py-1 text-sm text-blue-500 rounded-md hover:bg-blue-100/60 bg-blue-100/60'
          nextClassName='flex flex-1 justify-end'
          previousClassName='flex flex-1'

        />
      </div>



    </DashboardLayout>
  )
}

export default index



export async function getServerSideProps(context: any) {
  try {
    const { query } = context
    const formattedQuery = new URLSearchParams(query).toString().replaceAll('+', '%20')
    await axios.get(`${env.API_URL}/admin/auth`, {
      headers: {
        Cookie: context.req.headers.cookie,
        "Accept-Encoding": "gzip,deflate,compress"
      }
    })
    if (formattedQuery)
      return {
        props: {
          linkQuery: formattedQuery,
          page: query?.page || null
        },
      }
    return {
      props: {},
    }
  } catch (e) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
      props: {},
    };
  }
}
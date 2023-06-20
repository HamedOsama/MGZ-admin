import React from 'react'

import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DashboardLayout from '@components/layouts/DashboardLayout';
import InfoCard from '@components/InfoCard/InfoCard';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import env from '../API/ApiUrl';

axios.defaults.withCredentials = true;
const index = ({ stats }) => {
  return (
    <div>
      <DashboardLayout >
        <div className="container max-md:p-2 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-4 ">
          <InfoCard title='Stations' link='/stations' value={stats?.stations || '0'} Icon={<DirectionsBusIcon className="text-green-400" />} bg='bg-green-300' />
        </div>
      </DashboardLayout>
    </div>
  )
}

export default index


export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const stats = await axios.get(`${env.API_URL}/admin/stats`, {
      headers: {
        Cookie: context.req.headers.cookie,
        "Accept-Encoding": "gzip,deflate,compress"
      }
    })
    console.log(stats.data)
    return {
      props: {
        stats: stats.data.body
      }, // will be passed to the page component as props
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
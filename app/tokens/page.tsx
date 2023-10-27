import React from 'react'
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import TokenTable from '../components/TokenTable';
const TokesPage = () => {
  return (
    <div className='flex flex-col items-center justify-center  mt-14'>
        <h1>Top tokens on Uniswap</h1>
        <>
        <TokenTable/>
        </>
    </div>
  )
}

export default TokesPage
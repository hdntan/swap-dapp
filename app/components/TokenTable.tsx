'use client'
import React from 'react'
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

const columns: ColumnsType<any> = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
  },
  {
    title: 'Token Name',
    dataIndex: 'name',
    key: 'name',
    width: '40%',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Change',
    dataIndex: 'change',
    key: 'change',
  },
  {
    title: 'TVL',
    dataIndex: 'tvl',
    key: 'tvl',
  },
  {
    title: 'Volume',
    dataIndex: 'volume',
    key: 'volume',
  },
  
  // Add more columns as needed
];

const data = [
  {
    key: '1',
    stt:'1',
    name: 'John Brown',
    price: 32,
    change: 'New York No. 1 Lake Park',
    tvl: 'New York No. 1 Lake Park',
    volume: 'New York No. 1 Lake Park',


  },
  {
    key: '1',
    stt:'1',
    name: 'John Brown',
    price: 32,
    change: 'New York No. 1 Lake Park',
    tvl: 'New York No. 1 Lake Park',
    volume: 'New York No. 1 Lake Park',


  }, {
    key: '1',
    stt:'1',
    name: 'John Brown',
    price: 32,
    change: 'New York No. 1 Lake Park',
    tvl: 'New York No. 1 Lake Park',
    volume: 'New York No. 1 Lake Park',


  },
  {
    key: '1',
    stt:'1',
    name: 'John Brown',
    price: 50,
    change: 'New York No. 1 Lake Park',
    tvl: 'New York No. 1 Lake Park',
    volume: 'New York No. 1 Lake Park',


  }, {
    key: '1',
    stt:'1',
    name: 'John Brown',
    price: 32,
    change: 'New York No. 1 Lake Park',
    tvl: 'New York No. 1 Lake Park',
    volume: 'New York No. 1 Lake Park',


  }, {
    key: '1',
    stt:'1',
    name: 'John Brown',
    price: 32,
    change: 'New York No. 1 Lake Park',
    tvl: 'New York No. 1 Lake Park',
    volume: 'New York No. 1 Lake Park',


  }, {
    key: '1',
    stt:'1',
    name: 'John Brown',
    price: 32,
    change: 'New York No. 1 Lake Park',
    tvl: 'New York No. 1 Lake Park',
    volume: 'New York No. 1 Lake Park',


  }, {
    key: '1',
    stt:'1',
    name: 'John Brown',
    price: 32,
    change: 'New York No. 1 Lake Park',
    tvl: 'New York No. 1 Lake Park',
    volume: 'New York No. 1 Lake Park',


  },
  {
    key: '1',
    stt:'1',
    name: 'John Brown',
    price: 42,
    change: 'New York No. 1 Lake Park',
    tvl: 'New York No. 1 Lake Park',
    volume: 'New York No. 1 Lake Park',


  },
  // Your token data goes here
];
const TokenTable = () => {
  return <Table pagination={false} columns={columns}  dataSource={data}/>;
}

export default TokenTable
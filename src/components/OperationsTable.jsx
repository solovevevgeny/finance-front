import React from "react";
import { Table, Tag } from "antd";


const OperationsTable = () => {

    const dataSource = [
        {
          key: '1',
          date: '22 января 2025',
          from: 'Сбербанк',
          to: '',
          category: <Tag color='success' bordered={false} >Продукты</Tag>,
          amount: 1200
        },
        {
            key: '2',
            date: '22 января 2025',
            from: 'Тинькофф',
            to: '',
            category: <> <Tag color='warning' bordered={false} >Автомобиль</Tag> <Tag color='red' bordered={false} >Ремонт</Tag> </>,
            amount: 18550
          },
   
        {
            key: '3',
            date: '22 января 2025',
            from: 'Тинькофф',
            to: '',
            category: <> <Tag color='warning' bordered={false} >Автомобиль</Tag> <Tag color='lime' bordered={false} >Заправка</Tag> </>,
            amount: 2000
          },
   
      ];
      
      const columns = [
        {
          title: 'Дата',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Категория',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Откуда',
          dataIndex: 'from',
          key: 'from',
        },
        {
          title: 'Куда',
          dataIndex: 'to',
          key: 'to',
        },
        {
          title: 'Сумма',
          dataIndex: 'amount',
          key: 'amount',
        },
      ];



    return (
    <>
        <Table dataSource={dataSource} columns={columns} size="small" />
    </>)
}

export default OperationsTable;
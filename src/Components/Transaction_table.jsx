import React from 'react';

const Transaction_table = () => {
  let data = [
    { 'Order Id': '#281209', 'Status': 'Successful', 'Transaction Id': 131634495747, 'Refund date': 'Today, 08:45PM', 'Order amount': '₹1,125.00' },
    { 'Order Id': '#281208', 'Status': 'Processing', 'Transaction Id': 131634495747, 'Refund date': 'Yesterday, 03:00PM', 'Order amount': '₹1,125.00' },
    { 'Order Id': '#281207', 'Status': 'Successful', 'Transaction Id': 131634495747, 'Refund date': '12 Jul 2023, 03:00PM', 'Order amount': '₹1,125.00' },
    { 'Order Id': '#281207', 'Status': 'Successful', 'Transaction Id': 131634495747, 'Refund date': '12 Jul 2023, 03:00PM', 'Order amount': '₹1,125.00' },
    { 'Order Id': '#281207', 'Status': 'Successful', 'Transaction Id': 131634495747, 'Refund date': '12 Jul 2023, 03:00PM', 'Order amount': '₹1,125.00' },
    { 'Order Id': '#281207', 'Status': 'Successful', 'Transaction Id': 131634495747, 'Refund date': '12 Jul 2023, 03:00PM', 'Order amount': '₹1,125.00' }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                scope="col"
                className={`px-1 py-1 text-left text-xs font-medium uppercase tracking-wider ${
                  key === 'Order Id' ? 'text-[#2c7bb8]' : 'text-gray-500'
                }`}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((order, index) => (
            <tr key={index}>
              {Object.entries(order).map(([key, value], subIndex) => (
                <td
                  key={subIndex}
                  className={`px-1 py-1 whitespace-nowrap ${
                    key === 'Order Id' ? 'text-[#2c7bb8]' : 'text-gray-500'
                  } xs:w-1/6 sm:w-auto`}
                >
                  {key === 'Status' && (
                    <div className="flex items-center">
                      {value === 'Successful' && (
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                      )}
                      {value === 'Processing' && (
                        <div className="w-3 h-3 rounded-full bg-gray-200 mr-1"></div>
                      )}
                      {value}
                    </div>
                  )}
                  {key !== 'Status' && value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction_table;
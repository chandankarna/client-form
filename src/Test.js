import React, { useState, useEffect } from 'react';

const IndexData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://192.168.101.43:16007/get_index_spot')
    // format data in json
      .then(response => response.json())
      // cut data from api (first two data)
      .then(data => setData(data.data.slice(0, 2)))
      // if error
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Index Name</th>
            <th>Index Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.index_name}</td>
              <td>{item.index_value}</td>
              <td>{item.index_value-item.closing_index}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndexData;

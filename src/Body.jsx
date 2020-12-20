import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Body() {
  const DataValue = useSelector((state) => state);
  return (
    <div>
      <div className='container'>
        <div className='row'>
          {DataValue
            ? DataValue.map((d) => {
                return (
                  <div
                    className='col s4 card'
                    style={{
                      padding: '20px',
                      borderRight: '1px solid gray',
                      borderLeft: '1px solid gray',
                    }}
                  >
                    <div className='col s4'>
                      <img
                        src={d.avatar_url}
                        alt={d.login}
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div className='col s8'>
                      <Link to={`/user/${d.login}`}>{d.login}</Link>
                    </div>
                  </div>
                );
              })
            : ''}
        </div>
      </div>
    </div>
  );
}

export default Body;

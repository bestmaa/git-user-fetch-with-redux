import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Header() {
  let history = useHistory();
  let dispatch = useDispatch();
  const [Loading, setLoading] = useState(null);

  function $$(v) {
    return document.querySelector(v);
  }
  async function Search(e) {
    setLoading(
      <div class='progress'>
        <div class='indeterminate'></div>
      </div>,
    );
    e.preventDefault();
    let userData = $$('.input').value;
    fetch('https://api.github.com/users').then((data) => {
      data.json().then((d) => {
        let data = d.filter((v) => {
          if (v.login.match(userData)) {
            return v;
          }
          setLoading(null);
        });
        dispatch({
          type: 'set',
          payload: data,
        });
        history.push('/');
      });
    });
    $$('.input').value = null;
  }

  return (
    <>
      {Loading ? Loading : ''}
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <Link to='/'>
              <b
                style={{
                  padding: '10px',
                  display: 'inline-block',
                  fontSize: '20px',
                }}
              >
                User List
              </b>
            </Link>
            <div className='right' style={{ padding: '10px' }}>
              <form action=''>
                <input
                  type='text'
                  className='input'
                  placeholder='User Search'
                  style={{ width: '300px' }}
                />
                <button
                  onClick={(e) => {
                    Search(e);
                  }}
                >
                  <i className=' material-icons'>search</i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Dashbord() {
  const { name } = useParams();
  const [User, setUser] = useState(null);
  const [Repos, setRepos] = useState(null);

  useEffect(() => {
    if (name) {
      fetch(`https://api.github.com/users/${name}`).then((d) => {
        d.json().then((v) => {
          setUser(v);
        });
      });
      fetch(`https://api.github.com/users/${name}/repos`).then((d) => {
        d.json().then((v) => {
          setRepos(v);
        });
      });
    }
  }, [name]);

  return <>{User ? <UserOutput user={User} Repos={Repos} /> : ''}</>;
}
function UserOutput({ user, Repos }) {
  return (
    <>
      <div className='container' style={{ borderBottom: '1px solid gray' }}>
        <div className='row'>
          <div className='col s4'>
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{ width: '100%' }}
            />
          </div>
          <div className='col s6'>
            <h4>{user.name}</h4>
            <a href={user.html_url} target='__blank'>
              Git Url @{user.login}
            </a>
            <table>
              <tr>
                <th>Followers</th>
                <th>Following</th>
                <th>Repos</th>
              </tr>
              <tr>
                <td>{user.followers}</td>
                <td>{user.following}</td>
                <td>{user.public_repos}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <Repo Repos={Repos} />
      {/* <Followers /> */}
    </>
  );
}
function Repo({ Repos }) {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <h4 className='center'>Repositories</h4>

          {Repos?.map((d) => {
            return (
              <>
                <div className='col s12 card'>
                  <a
                    href={d.html_url}
                    target='__black'
                    style={{ fontSize: '20px' }}
                  >
                    {d.name}
                  </a>
                  <br />
                  <p>{d.description}</p>
                  <i class='material-icons'>star</i>
                  <b>{d.stargazers_count},</b>
                  <b style={{ paddingLeft: '10px' }}>Fork {d.forks},</b>
                  <b style={{ paddingLeft: '10px' }}>Language {d.language},</b>
                  <b style={{ paddingLeft: '10px' }}>
                    Issues {d.open_issues_count},
                  </b>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Dashbord;

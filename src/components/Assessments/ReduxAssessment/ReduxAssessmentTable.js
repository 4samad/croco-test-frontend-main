import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync } from '../../../features/counter/cakeListSlice';

export default function ReduxAssessmentTable() {
  const dispatch = useDispatch();
  const cakeList = useSelector((state)=> state.cakeList.value);
  console.log(cakeList)

  useEffect(()=> {
    dispatch(fetchAsync());
  }, []);

  return (
    <table id="reduxAssessmentTable">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>description</th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>
        {cakeList.map((cake) => (
          <tr key={cake.id}>
            <td>{cake.id}</td>
            <td>{cake.title}</td>
            <td>{cake.description}</td>
            <td>{cake.image}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

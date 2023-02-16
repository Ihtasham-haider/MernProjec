import react, { useState, useEffect } from 'react';
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  styled,
} from '@mui/material';
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
  width: 100%;
  margin: 50px 0 0 0px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: blue;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Activity</TableCell>
          <TableCell>Duration</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Date</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TRow key={user.id}>
            <TableCell>{user._id}</TableCell>{' '}
            {/* change it to user.id to use JSON Server */}
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.Activity}</TableCell>
            <TableCell>{user.Duration}</TableCell>
            <TableCell>{user.Description}</TableCell>
            <TableCell>{user.Date}</TableCell>
            <TableCell>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>{' '}
              {/* change it to user.id to use JSON Server */}
              <Button
                color="secondary"
                variant="contained"
                onClick={() => deleteUserData(user._id)}
              >
                Delete
              </Button>{' '}
              {/* change it to user.id to use JSON Server */}
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;

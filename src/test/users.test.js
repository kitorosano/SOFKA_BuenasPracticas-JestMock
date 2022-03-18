import axios from 'axios';
import Users from '../users';
jest.mock('axios');
test('should fetch users', async () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);
  const data = await Users.all();
  return expect(data).toEqual(users);
});
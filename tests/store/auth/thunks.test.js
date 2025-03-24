
import { checkingAuthentication } from "../../../src/store/auth/thunks";

jest.mock('../../../src/firebase/providers');

describe('Pruebas en authThunks', () => {
  test('Debe de invocar el checkingCredentials', () => {
    checkingAuthentication();    
  });
  
});

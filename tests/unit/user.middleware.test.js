const {checkIfUserHasAccess} = require('../../src/routes/middlewares/user.middleware');

describe('user middleware', () => {
    const nextFunction = jest.fn();
    const res = {
        send: jest.fn(message => {})
    }
    test('should allow super user', () => {
       
        checkIfUserHasAccess({query: {isSuperUser: 1}}, res,  nextFunction);
        expect(nextFunction).toHaveBeenCalled();
    })
    test('should deny non super user', () => {
        checkIfUserHasAccess({query: {isSuperUser: 0}}, res,  nextFunction);
        expect(res.send).toHaveBeenCalledWith('Access Denied');
    })
})
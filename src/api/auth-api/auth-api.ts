import http from '../../http'

const AuthApi = {
    checkToken: async (token: string) => {
        await http.get('checkToken', {
            headers: {
                'Authorization' : `Bearer ${token}`,
            }
        })
    }
}

export default AuthApi;
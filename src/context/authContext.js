import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios'
import qs from 'qs';

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const initialState = {
    post_data: [],
    token: token,
    bookmark_data: [],
    refresh: false,
    user: user ? JSON.parse(user) : null,
    register_success: false
}

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(initialState);

    useEffect(() => {
        loadStorageData()
    }, [])
    
    const axiosApi = require('axios').default
    axiosApi.defaults.baseURL = 'https://oceana-server.herokuapp.com/api'
        
    const addUserToLocalStorage = ({ user, token}) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
    }

    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }
    async function loadStorageData() {
        try {
            const authDataSerialized = await localStorage.getItem('@AuthData');
            if (authDataSerialized) {
                const _authData = JSON.parse(authDataSerialized);
                setAuthData(_authData);
            }
        } catch (error) {
        
        } finally {
            //setLoading(false);
        }
    }

    const authFetch = axios.create({
        baseURL: 'http://192.168.8.100:4000/api',
    })

    const loadUserPosting = async () => {

        var config = {
            method: 'get',
            url: '/user/post',
            headers: { }
        };
          
          axios(config)
            .then(function (response) {
                console.log("Response Load User Posting : " , response.data)
                setAuthData({ ...authData, post_data: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const userPosting = async (nama, email_address, content) => {
        var data = qs.stringify({
            'nama': nama,
            'email_address': email_address,
            'content': content
        });

        var config = {
            method: 'post',
            url: '/user/post',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };
        
        axios(config)
            .then(function (response) {
                setAuthData({ ...authData, post_data: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const postComment = async (id, email_address, nama, content) => {
        var data = qs.stringify({
            id, email_address, nama, content
        });

        var config = {
            method: 'post',
            url: '/user/comment',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };
        
        axios(config)
            .then(function (response) {
                console.log("PostComment : ", response)
                setAuthData({ ...authData, post_data: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const getUserBookmark = async (email) => {
        
        var config = {
            method: 'get',
            url: '/user/bookmark/' + email,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
        };
        
        axios(config)
            .then(function (response) {
                response.data.map((e) => {
                    console.log(e)
                })
                setAuthData({ ...authData, bookmark_data: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const addFriend = async (emaila, emailb) => {
        var data = qs.stringify({
            'emaila': emaila,
            'emailb': emailb
        });

        var config = {
            method: 'post',
            url: '/user/friend',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };
        
        axios(config)
            .then(function (response) {
                // console.log("Add Friend : ", response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const bookmarkPost = async (id, email) => {
        var data = qs.stringify({
            'id': id,
            'email': email
        });

        var config = {
            method: 'post',
            url: '/user/bookmark',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };
        
        axios(config)
            .then(function (response) {
                // console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const postingLike = async (id, email) => {
        var data = qs.stringify({
            'id': id ,
            email_address : email
        });

        var config = {
            method: 'post',
            url: '/user/like',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                setAuthData({ ...authData, bookmark_data: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const registerUser = async (full_name, email_address, password) => {
        var data = qs.stringify( {
            email_address, password, nama: full_name
        });
        console.log(data)
        var config = {
            method: 'post',
            url: '/user/register',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        try {
            const response = await axiosApi.request(config)
            // console.log(response)
            const { user, token } = response.data
            setAuthData({ ...authData, register_success: true })
        } catch (error) {
            console.log(error)
        }
    }

    const searchUser = async (nama) => {
        var config = {
            method: 'get',
            url: '/user?nama=' + {nama},
            headers: { }
        };
          
        axios(config)
            .then(function (response) {
                // setAuthData({ ...authData, register_success: true })
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const authenticateUser = async (email_address, password) => {
        var data = qs.stringify( {
            email_address, password
        });

        var config = {
            method: 'post',
            url: '/user/authentication',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        try {
            const response = await axiosApi.request(config)
            console.log("response : " + response)
            const { user, token } = response.data
            setAuthData({ user, token })
            addUserToLocalStorage({ user, token })
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        if (authData.user) {
            setAuthData({...authData, user : null, token : null })
            removeUserFromLocalStorage()
            console.log("ERROR")
            //localStorage.removeItem('@AuthData')
        }
        
    }

    authFetch.interceptors.request.use(
        (config) => {
            config.headers.common['x-auth-token'] = `Bearer ${authData.token}`
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

        
    authFetch.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {

        if (error.response.status === 401) {
            // logoutUser()
        }
        return Promise.reject(error)
        }
    )

            
    return (
        <AuthContext.Provider value={{ authData, loadUserPosting, postingLike, postComment, userPosting, authenticateUser, logout, registerUser, getUserBookmark, bookmarkPost, addFriend, searchUser }}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('Not Authorized' );
  
    return context;
}

 
export {useAuth, AuthProvider, AuthContext}
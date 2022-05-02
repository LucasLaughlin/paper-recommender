import axios from 'axios';

const Flask = {};

Flask.recommendations = async (selected, skip, limit) => {
    console.log("Flask.recommendations called");
    console.log("selected")
    let result
    try {
      result = (await axios.post(`http://paperrecommender-env.eba-vfpzkqnn.us-west-2.elasticbeanstalk.com//recommend?skip=${skip}&limit=${limit}`, {selected})).data;
    } catch (err) {
      console.log("There has been an error!")
      console.log(err)
      result={documents:[], count:0}
    }
    return result;
  }
  
  
Flask.list = async (search, skip, limit) => {
    console.log("Flask.list called");
    let result
    try {
      result = (await axios.get(`http://paperrecommender-env.eba-vfpzkqnn.us-west-2.elasticbeanstalk.com//list?search=${search}&skip=${skip}&limit=${limit}`)).data;
    } catch (err) {
      console.log("There has been an error!")
      console.log(err)
      result={documents:[], count:0}
    }
    return result;
  }

  
  
  
  
  

Flask.activate = async (token) => (await axios.get(`${process.env.REACT_APP_API}/1/user/activate/${token}`)).data;
Flask.passwordEmail = async (email) => (await axios.post(`${process.env.REACT_APP_API}/1/user/passwordEmail`, { email })).data;
Flask.resetPassword = async (password, token) => (await axios.post(`${process.env.REACT_APP_API}/1/user/passwordReset/${token}`, { password })).data;
Flask.signin = async (email, password) => (await axios.post(`${process.env.REACT_APP_API}/1/user/signin`, { email, password })).data;
Flask.signup = async (userFields) => (await axios.post(`${process.env.REACT_APP_API}/1/user/signup`,  userFields)).data;
Flask.orcidSignup = async (email, pblic, orcidCode) => (await axios.post(`${process.env.REACT_APP_API}/1/user/orcidSignup/${orcidCode}`, { email, pblic })).data;
Flask.orcidSignin = async (orcidCode) => (await axios.post(`${process.env.REACT_APP_API}/1/user/orcidSignin/${orcidCode}`)).data;
Flask.checkImportedEmail = async (params) => (await axios.get(`${process.env.REACT_APP_API}/1/user/checkImportedEmail`, { params })).data;
Flask.claim = async (password, token) => (await axios.post(`${process.env.REACT_APP_API}/1/user/claim/${token}`, { password })).data;
Flask.getClaimable = async (token) => (await axios.get(`${process.env.REACT_APP_API}/1/user/getClaimable/${token}`)).data;
export default Flask;
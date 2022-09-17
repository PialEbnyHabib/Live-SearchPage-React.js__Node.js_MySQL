import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPage from './Components/Navbar/Navbar';
import React, { useState ,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './Form.css';
import Axios from 'axios'
import './App.css'
import './SearchPage.css';
import axios from 'axios';

function App() {
  

  const [fetchAPI,setAPI]=useState('');
  const [searchTerm,setsearchTerm]=useState('');
  const [searchResult,setsearchResult]=useState('');

  useEffect(()=>{
    axios.get('http://localhost:3001/api/get').then((Response)=>{
        setAPI(Response.data);
    },[])
  })

  const SearchData = (value)=>{
    setsearchTerm(value);

    if (searchTerm !== '')
    {
      const filteredData = fetchAPI.filter((item)=>{
        return Object.values(item).join (''). toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
      })
      setsearchResult(filteredData);
    }
    else{
      setsearchResult(fetchAPI);
    }
  }





  const [body,setComment] = useState('');
  const [Username,setUsername] = useState('');
  const [postId,setpostID] = useState('');
  const [userid,setuserID] = useState(''); 
  

  const Sumbit = () =>{
       axios.post('http://localhost:3001/api/insert',{body :body, Username: Username,postId: postId, userid :userid  })
  };

  return (
    <div className=" searchpagee">
         <NavbarPage></NavbarPage>

         <div className='container'>
            
                    <div className="SearhPage">


                        <div className="row Searchbar">
                          <div className="col-md-3"></div>

                          <div className="col-md-6 ">
                              <div className="searchbar">
                              <Form className="d-flex">
                                <Form.Control
                                  type="search"
                                  placeholder="Search"
                                  className="me-2"
                                  aria-label="Search"
                                  onChange={(e)=>SearchData(e.target.value)}
                                />
                                <Button  variant="dark">Search</Button>
                                
                              </Form>


                              </div>

                          </div>
                              <div className="col-md-3"></div>
                        </div>
                       
                        <div className="row searchresult">
                          <div className='col-4'></div>
                          <div className='col-4'>
                          {searchTerm.length > 1 ? (
                          <ul>
                            {searchResult.map(item=>(
                              <li>{item.body}</li>
                            ))
                            }
                          </ul>
                        ):(
                          <ul>
                            
                          </ul>
                        )}
                          </div>
                          <div className='col-4'></div>

                      </div>


                    </div>



                    <div className='row container'> 
            <Form  className='form'  >
            <Row className="mb-3">
              <Form.Group as={Col} md="6" >
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Comment"
                  onChange={(e) => setComment(e.target.value)}
                  
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label> Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Postid</Form.Label>
                <Form.Control type="text" placeholder="Postid" onChange={(e) => setpostID(e.target.value)} required />
                <Form.Control.Feedback type="invalid">
                  Please provide Postid.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Userid</Form.Label>
                <Form.Control type="text" placeholder="Userid" onChange={(e) => setuserID(e.target.value)} required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Userid.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            
            <br></br>
            <Button type="submit" variant="dark" onClick={Sumbit}>Submit form</Button>
            
            <br></br>

            
          
          </Form>  

    </div>
                          

     </div>

                      
    
            
    </div>
  );
}

export default App;

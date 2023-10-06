import * as React from "react";
import Table from "@mui/material/Table";
import Notification from "./notification";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { mockedCalls } from "../data";
import { getCalls } from "../services";
import MissingAudio from "../media/sample.mp3";
import { statusObj, callsAPIDomain } from "../constants";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

// import Audio from './media/sample.mp3'


export default function BasicTable() {
  const [calls, setCalls] = React.useState();
  const [text, setText] = React.useState();
  const [showNotification, toggleNotification] = React.useState(false);

  React.useEffect(() => {
    getCalls
      .then(   ({data=[]}) =>{
        console.log('success calls',data);
        // response.json().then((resp)=>{
        //   console.log('resp.json() :>> ', resp);
          // setCalls(resp);
          setCalls(data.length?data:mockedCalls);
        // })
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log('failure calls',error);
        setCalls(mockedCalls);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  console.log("calls :>> ", calls);

  const handleNotification = () => {
    toggleNotification((prevState)=> !prevState)
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#SR</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">RecruiterId</TableCell>
            <TableCell align="right">Job seeker</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Keywords</TableCell>
            <TableCell align="right">Audio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {calls?.map(
            ({
              sno,
              data:textData,
              company_name,
              recruiter_id,
              jobseeker_id,
              status,
              matching_words,
              file_name,
            }) => (
              <TableRow
                key={sno}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{sno}</TableCell>
                <TableCell component="th" scope="row">
                  {company_name}
                </TableCell>
                <TableCell align="right">{recruiter_id}</TableCell>
                <TableCell align="right">{jobseeker_id}</TableCell>
                <TableCell align="right">
                  <span className={status}>{statusObj[status]}</span>
                  {/* {status ? (
                  ) : (
                    <span className="red">Suspect</span>
                  )} */}
                </TableCell>
                <TableCell align="right" title={matching_words}>
                   {matching_words}
                </TableCell>
                {/* <TableCell align="right">{file_name}</TableCell> */}
                <TableCell align="right">
                  {/* {protein} */}

                  <audio controls>
                    <source src={`${callsAPIDomain}${file_name}`} type="audio/mpeg" />
                    {/* <source src={MissingAudio} type="audio/mpeg" /> */}
                  </audio>
                </TableCell>
                <TableCell align="right" title='Get notification'>
                  <span className='run' onClick={()=>setText(textData)}>&#10227;</span>
                  {status==='FLAGGED' ?   
                  <span className="bell" onClick={handleNotification}>&#128276;</span>
                  :null}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>

      

      {showNotification ? (
          <Notification onClick={handleNotification} />      
      ) : null}
      {text?
      <div className="result">
        {text}
      </div>:null
      }
    </TableContainer>
  );
}
